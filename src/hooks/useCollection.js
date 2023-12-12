import { useState, useEffect, useRef } from "react";
import { projectNewsFirestore } from "../firebase/config";
import { collection, where, query, onSnapshot, orderBy } from "firebase/firestore";

export const useCollection = (collectionName, _queryParams) => {
    const [documents, setDocuments] = useState(null);
    const [collectionError, setCollectionError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const queryParams = useRef(_queryParams).current;

    useEffect(() => {
        setIsLoading(true);
        let ref = collection(projectNewsFirestore, collectionName);

        if (queryParams?.where && queryParams?.orderBy && queryParams.where.length > 0) {
            console.log("queryParams1");
            ref = query(
                ref,
                where(queryParams.where[0], queryParams.where[1], queryParams.where[2]),
                orderBy(queryParams.orderBy[0], queryParams.orderBy[1])
            );
        } else if (queryParams?.where && queryParams.where.length > 0 && !queryParams?.orderBy) {
            console.log("queryParams2");
            ref = query(ref, where(queryParams.where[0], queryParams.where[1], queryParams.where[2]));
        } else if (queryParams?.orderBy && queryParams.orderBy.length === 2) {
            console.log("queryParams3");
            ref = query(ref, orderBy(queryParams.orderBy[0], queryParams.orderBy[1]));
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
