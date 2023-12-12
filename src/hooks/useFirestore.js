import { useState, useEffect, useReducer } from "react";
import { projectNewsFirestore } from "../firebase/config";
import { addDoc, collection, deleteDoc, doc, updateDoc, Timestamp } from "firebase/firestore";

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
        case "DELETED_DOCUMENT":
            return { isLoading: false, document: null, error: null, success: true };
        case "UPDATED_DOCUMENT":
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
    const addDocument = async (document) => {
        dispatch({ type: "LOADING" });

        try {
            // add article Timestamp
            const createdAt = Timestamp.fromDate(new Date());
            // add article
            const addedDocumentRef = await addDoc(articlesCollectionRef, { ...document, createdAt });
            // dispatch the added document
            dispatchIfNotCancelled({ type: "ADDED_DOCUMENT", payload: addedDocumentRef });
        } catch (error) {
            // dispatch error message if an error occurs
            dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
        }
    };

    // delete an article from firestore
    const deleteDocument = async (id) => {
        dispatch({ type: "LOADING" });

        try {
            const ref = doc(projectNewsFirestore, collectionName, id);
            console.log(ref);
            await deleteDoc(ref);
            dispatchIfNotCancelled({ type: "DELETED_DOCUMENT" });
        } catch (error) {
            dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
        }
    };

    const updateDocument = async (id, document) => {
        dispatch({ type: "LOADING" });

        try {
            const ref = doc(projectNewsFirestore, collectionName, id);

            // Convert createdAt to Firestore Timestamp if it's not already

            const createDateTimeFromFirestoreTimestamp = ({ seconds, nanoseconds }) => {
                const milliseconds = seconds * 1000 + nanoseconds / 1e6;
                return new Date(milliseconds);
            };

            const createdAt = createDateTimeFromFirestoreTimestamp(document.createdAt);
            const updatedDocument = {
                ...document,
                createdAt:
                    document.createdAt instanceof Timestamp
                        ? document.createdAt // If already a Timestamp, leave it as is
                        : Timestamp.fromDate(createdAt),
            };

            await updateDoc(ref, updatedDocument);
            dispatchIfNotCancelled({ type: "UPDATED_DOCUMENT" });
        } catch (error) {
            dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
        }
    };

    // clean up function
    useEffect(() => {
        return () => {
            setIsCancelled(true);
        };
    }, []);

    return { response, addDocument, deleteDocument, updateDocument };
};
