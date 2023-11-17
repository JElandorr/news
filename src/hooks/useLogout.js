import { useEffect, useState } from "react";
import { projectNewsAuth } from "../firebase/config";
import { signOut } from "firebase/auth";

import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [logoutError, setLogoutError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = async () => {
        setIsLoading(true);
        try {
            //sign the user out
            await signOut(projectNewsAuth);

            //dispatch logout action
            dispatch({ type: "LOGOUT" });

            //update state
            setLogoutError(null);
            setIsLoading(false);
        } catch (err) {
            if (!isCancelled) {
                // console.log("Firebase error object: ", err);

                const errorCode = err.code;
                let errorMessage = "An error occurred during logout. ";

                switch (errorCode) {
                    default:
                        errorMessage = err.message;
                        break;
                }

                setLogoutError(errorMessage);
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        return () => {
            setIsCancelled(true);
        };
    }, []);

    return { logout, logoutError, isLoading };
};
