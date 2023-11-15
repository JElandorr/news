import React, { useState, useContext } from "react";
import AuthContext from "./AuthContext";

import * as AuthService from "../services/authUtilService";

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const login = async (userData) => {
        try {
            const loggedUser = await AuthService.login(userData);
            console.log("loggedUser", loggedUser);
            if (loggedUser) {
                setUser(loggedUser);
                setIsLogged(true);
                // if (localStorage.getItem("userData")) {
                //     localStorage.removeItem("userData");
                // }
                // localStorage.setItem("userData", JSON.stringify(loggedUser));
                return loggedUser;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const register = async (userData) => {
        try {
            const registeredUser = await AuthService.register(userData);
            if (registeredUser) {
                setUser({ ...registeredUser });
                setIsLogged(true);
                if (localStorage.getItem("userData")) {
                    localStorage.removeItem("userData");
                }
                localStorage.setItem("userData", JSON.stringify(registeredUser));
                return registeredUser;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getUser = async () => {
        try {
            const userData = await AuthService.getUser();
            if (userData) {
                return userData;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const logOut = async () => {
        try {
            // console.log("logOut");
            const result = await AuthService.logout();
            // console.log(result);
            setUser(null);
            setIsLogged(false);
            localStorage.removeItem("userData");
            return result;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logOut, getUser, isLogged }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
