import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Register from "../loginRegister/Register";

const LoginRegisterPage = () => {
    return (
        <>
            <Header />
            <Register />
            <Footer />
        </>
    );
};

export default LoginRegisterPage;
