import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Login from "../loginRegister/Login";

const LoginRegisterPage = () => {
    return (
        <>
            <Header />
            <Login />
            <Footer />
        </>
    );
};

export default LoginRegisterPage;
