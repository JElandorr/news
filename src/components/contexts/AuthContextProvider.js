import React, { useState, useContext } from "react";
import AuthContext from "./AuthContext";

import * as AuthService from "../services/authUtilService";

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (userData) => {
        try {
            const user = await AuthService.login(userData);
            if (user) {
                setUser({ ...user });
                if (localStorage.getItem("userData")) {
                    localStorage.removeItem("userData");
                }
                localStorage.setItem("userData", JSON.stringify(user));
                return user;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const register = async (userData) => {
        try {
            const user = await AuthService.register(userData);
            if (user) {
                setUser({ ...user });
                if (localStorage.getItem("userData")) {
                    localStorage.removeItem("userData");
                }
                localStorage.setItem("userData", JSON.stringify(user));
                return user;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getUser = async () => {
        try {
            const user = await AuthService.getUser();
            if (user) {
                return user;
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
            localStorage.removeItem("userData");
            return result;
        } catch (error) {
            console.log(error);
        }
    };

    return <AuthContext.Provider value={{ user, login, register, logOut, getUser }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
