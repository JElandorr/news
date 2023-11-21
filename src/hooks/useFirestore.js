import { useState, useEffect, useReducer } from "react";
import { projectNewsFirestore } from "../firebase/config";
import { addDoc, collection, Timestamp } from "firebase/firestore";

let initialState = {
    document: null,
    isLoading: false,
    error: null,
    success: null,
};

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case "ADDED_DOCUMENT":
            return { isLoading: false, document: action.payload, error: null, success: true };
        case "LOADING":
            return { isLoading: true, document: null, error: null, success: false };
        case "ERROR":
            return { isLoading: false, document: null, error: action.payload, success: false };
        default:
            return state;
    }
};

export const useFirestore = (collectionName) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    // collection ref
    const articlesCollectionRef = collection(projectNewsFirestore, collectionName);

    // only dispatch if not Cancelled
    const dispatchIfNotCancelled = (action) => {
        if (!isCancelled) {
            dispatch(action);
        }
    };

    // add an article to firestore
    // add an article to firestore
    const addDocument = async (document) => {
        dispatch({ type: "LOADING" });

        try {
            // add the document to firestore
            const createdAt = Timestamp.fromDate(new Date());
            // Retrieve the added document (assuming you have an auto-generated ID)
            const addedDocumentRef = await addDoc(articlesCollectionRef, { ...document, createdAt });
            // const addedDocumentSnapshot = await addedDocumentRef.get();
            // const addedDocumentData = addedDocumentSnapshot.data();

            dispatchIfNotCancelled({ type: "ADDED_DOCUMENT", payload: addedDocumentRef });
        } catch (error) {
            dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
        }
    };

    // delete an article from firestore
    const deleteDocument = async (id) => {
        // Implement delete logic
    };

    useEffect(() => {
        return () => {
            setIsCancelled(true);
        };
    }, []);

    return { response, addDocument, deleteDocument };
};
