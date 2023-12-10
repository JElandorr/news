import { useState, useEffect, useRef } from "react";
import { projectNewsFirestore } from "../firebase/config";
import { collection, where, query, onSnapshot, orderBy } from "firebase/firestore";

// ... (import statements)

export const useCollection = (collectionName, _queryParams) => {
    const [documents, setDocuments] = useState(null);
    const [collectionError, setCollectionError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // This is a workaround to avoid infinite loops in useEffect
    const queryParams = useRef(_queryParams).current;

    useEffect(() => {
        setIsLoading(true);
        let ref = collection(projectNewsFirestore, collectionName);

        // Check the presence of queryParams.where and queryParams.orderBy separately
        if (queryParams?.where && queryParams?.orderBy && queryParams.where.length > 0) {
            console.log("queryParams 1", queryParams);
            ref = query(
                ref,
                where(queryParams.where[0], queryParams.where[1], queryParams.where[2]),
                orderBy(queryParams.orderBy[0], queryParams.orderBy[1])
            );
        } else if (queryParams?.where && queryParams.where.length > 0 && !queryParams?.orderBy) {
            console.log("queryParams 2", queryParams);
            ref = query(ref, where(queryParams.where[0], queryParams.where[1], queryParams.where[2]));
        } else if (queryParams?.orderBy && queryParams.orderBy.length === 2) {
            console.log("queryParams 3", queryParams);
            ref = query(ref, orderBy(queryParams.orderBy[0], queryParams.orderBy[1]));
        } else {
            console.log("No queryParams");
            ref = query(ref);
        }

        const unsubscribe = onSnapshot(
            ref,
            (snapshot) => {
                let results = [];
                snapshot.forEach((doc) => {
                    results.push({ ...doc.data(), id: doc.id });
                });
                setDocuments(results);
                setCollectionError(null);
                setIsLoading(false);
            },
            (error) => {
                setCollectionError(`Could not fetch data! Error: ${error}`);
                setIsLoading(false);
            }
        );

        return () => unsubscribe();
    }, [collectionName, queryParams]);

    return { documents, collectionError, isLoading };
};
