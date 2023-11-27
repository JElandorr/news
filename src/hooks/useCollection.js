import { useState, useEffect } from "react";
import { projectNewsFirestore } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (collectionName) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        let ref = collection(projectNewsFirestore, collectionName);

        const unsubscribe = onSnapshot(
            ref,
            (snapshot) => {
                let results = [];
                snapshot.forEach((doc) => {
                    results.push({ ...doc.data(), id: doc.id });
                });
                setDocuments(results);
                setError(null);
                setIsLoading(false);
            },
            (error) => {
                setError(`Could not fetch data! Error: ${error}`);
                setIsLoading(false);
            }
        );

        return () => unsubscribe();
    }, [collectionName]);

    return { documents, error, isLoading };
};