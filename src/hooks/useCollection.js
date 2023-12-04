import { useState, useEffect, useRef } from "react";
import { projectNewsFirestore } from "../firebase/config";
import { collection, where, query, onSnapshot } from "firebase/firestore";

export const useCollection = (collectionName, _queryParams) => {
    const [documents, setDocuments] = useState(null);
    const [collectionError, setCollectionError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // This is a workaround to avoid infinite loops in useEffect
    const queryParams = useRef(_queryParams).current;

    useEffect(() => {
        setIsLoading(true);
        let ref = collection(projectNewsFirestore, collectionName);
        if (queryParams) {
            ref = query(ref, where(...queryParams));
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
