import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Logout from "../loginRegister/Logout";

const LoginRegisterPage = () => {
    return (
        <>
            <Header />
            <Logout />
            <Footer />
        </>
    );
};

export default LoginRegisterPage;
