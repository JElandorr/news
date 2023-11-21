import { useEffect, useState } from "react";
import { projectNewsAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        try {
            //sign the user in
            const res = await signInWithEmailAndPassword(projectNewsAuth, email, password);

            //dispatch login action
            dispatch({ type: "LOGIN", payload: res.user });

            //update state
            setLoginError(null);
            setIsLoading(false);
        } catch (err) {
            if (!isCancelled) {
                // console.log("Firebase error object: ", err);

                const errorCode = err.code;
                let errorMessage = ["An error occurred during login. "];

                switch (errorCode) {
                    case "auth/invalid-email":
                        errorMessage += "Invalid email.";
                        break;
                    case "auth/invalid-login-credentials":
                        errorMessage += "User with the provided credentials does not exist.\n Please register!";
                        break;
                    default:
                        errorMessage = err.message;
                        break;
                }

                setLoginError(errorMessage);
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        return () => {
            setIsCancelled(true);
        };
    }, []);

    return { login, loginError, isLoading };
};
