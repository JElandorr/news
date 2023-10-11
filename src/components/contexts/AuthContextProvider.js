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
                localStorage.removeItem("userData");
                localStorage.setItem("userData", JSON.stringify(user));
                return user;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const register = (userData) => {
        // Implement your register logic here
        setUser(userData);
    };

    const logout = () => {
        // Implement your logout logic here
        setUser(null);
    };

    return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
