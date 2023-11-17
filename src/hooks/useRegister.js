import { useState, useEffect } from "react";
import { projectNewsAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [registerError, setRegisterError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const register = async (email, password, displayName) => {
        setIsLoading(true);
        try {
            //sign the user up
            const res = await createUserWithEmailAndPassword(projectNewsAuth, email, password);
            // console.log("res", res);
            if (!res.user) {
                throw new Error("Could not complete the registration");
            }

            //update the user's profile
            await updateProfile(res.user, { displayName });

            //dispatch login action
            dispatch({ type: "LOGIN", payload: res.user });

            //update state
            if (!isCancelled) {
                setRegisterError(null);
                setIsLoading(false);
                return res.user;
            }
        } catch (err) {
            if (!isCancelled) {
                const errorCode = err.code;
                let errorMessage = "An error occurred during registration. ";

                switch (errorCode) {
                    case "auth/weak-password":
                        errorMessage += "Password should be at least 6 characters";
                        break;
                    case "auth/email-already-in-use":
                        errorMessage += "Email is already in use.";
                        break;
                    default:
                        errorMessage = err.message;
                        break;
                }

                setRegisterError(errorMessage);
                setIsLoading(false);
            }
        }
    };
    useEffect(() => {
        return () => {
            setIsCancelled(true);
        };
    }, []);
    return { register, registerError, isLoading };
};
