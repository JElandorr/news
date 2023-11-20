import React, { useState, Fragment, useContext } from "react";
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";

import SEO from "../seo";
import Breadcrumb from "../breadcrumb/BreadcrumbWrap";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

const LoginRegister = () => {
    const [userInputData, setUserInputData] = useState({
        username: "",
        password: "",
        rePass: "",
        email: "",
    });
    const [userInputDataError, setUserInputDataError] = useState({});
    const { pathname } = useLocation();

    const navigate = useNavigate();

    const handleUserInputDataChange = (e) => {
        const targetName = e.target.name;
        const targetValue = e.target.value;
        if (targetValue !== "") {
            setUserInputDataError({ ...userInputDataError, [targetName]: false });
        }
        setUserInputData({ ...userInputData, [targetName]: targetValue });
    };

    function verifyLoginInputData() {
        if (userInputData.email === "") {
            return false;
        }
        if (userInputData.password === "") {
            return false;
        }
        return true;
    }

    function verifyRegisterInputData() {
        if (userInputData.username === "") {
            return false;
        }
        if (userInputData.password === "") {
            return false;
        }
        if (userInputData.rePass === "") {
            return false;
        }

        if (userInputData.password !== userInputData.rePass) {
            return false;
        }

        if (userInputData.email === "") {
            return false;
        }
        return true;
    }

    function validateNewUserInput(e) {
        e.preventDefault();

        if (userInputData[e.target.name] === "") {
            setUserInputDataError({ ...userInputDataError, [e.target.name]: true });
        } else {
            setUserInputDataError({ ...userInputDataError, [e.target.name]: false });
        }
    }

    function clearInputData() {
        setUserInputData({
            username: "",
            password: "",
            rePass: "",
            email: "",
        });
    }

    const breadcrumbLabel =
        pathname === "/login"
            ? "Login"
            : pathname === "/register"
            ? "Register"
            : pathname === "/forgotten-password"
            ? "Forgotten Password"
            : "Logout";

    return (
        <Fragment>
            <SEO
                title="NewsProject"
                titleTemplate="Login | Register"
                description="Login page of flone react minimalist eCommerce template."
            />
            {/* breadcrumb */}
            <Breadcrumb
                pages={[
                    { label: "Home", path: process.env.PUBLIC_URL + "/" },
                    { label: breadcrumbLabel, path: process.env.PUBLIC_URL + pathname },
                ]}
            />
            <div className="login-register-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 ms-auto me-auto">
                            <div className="login-register-wrapper">
                                {pathname === "/login" && (
                                    <Login
                                        userInputData={userInputData}
                                        handleUserInputDataChange={handleUserInputDataChange}
                                        userInputDataError={userInputDataError}
                                        validateNewUserInput={validateNewUserInput}
                                        verifyLoginInputData={verifyLoginInputData}
                                        clearInputData={clearInputData}
                                    />
                                )}

                                {pathname === "/register" && (
                                    <Register
                                        userInputData={userInputData}
                                        handleUserInputDataChange={handleUserInputDataChange}
                                        userInputDataError={userInputDataError}
                                        validateNewUserInput={validateNewUserInput}
                                        verifyRegisterInputData={verifyRegisterInputData}
                                        clearInputData={clearInputData}
                                    />
                                )}
                                {pathname === "/logout" && <Logout />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LoginRegister;
