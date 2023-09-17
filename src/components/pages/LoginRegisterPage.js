import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import LoginRegister from "../loginRegister/LoginRegister";

const LoginRegisterPage = () => {
    
    return (
        <>
            <Header />
            <LoginRegister />
            <Footer />
        </>
    );
};

export default LoginRegisterPage;
