import React, { useState, Fragment, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import AuthContext from "../contexts/AuthContext";

import SEO from "../seo";
import Breadcrumb from "../breadcrumb/BreadcrumbWrap";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import ForgottenPassword from "./ForgottenPassword";

const LoginRegister = () => {
    const { user, login, register, logOut, getUser } = useContext(AuthContext);

    const [userInputData, setUserInputData] = useState({
        username: "",
        password: "",
        rePass: "",
        email: "",
    });

    const [userInputDataError, setUserInputDataError] = useState({});

    let { pathname } = useLocation();
    // console.log("pathname", pathname);

    let navigate = useNavigate();

    const handleUserInputDataChange = (e) => {
        const targetName = e.target.name;
        const targetValue = e.target.value;
        if (targetValue !== "") {
            setUserInputDataError({ ...userInputDataError, [targetName]: false });
        }
        setUserInputData({ ...userInputData, [targetName]: targetValue });
    };

    const handleUserInputDataErrorChange = (e) => {
        setUserInputDataError({ ...userInputDataError, [e.target.name]: e.target.value });
    };

    const handleUserInputDataReset = (e) => {
        e.preventDefault();
        setUserInputData({
            username: "",
            password: "",
            email: "",
        });
        navigate(process.env.PUBLIC_URL + `/${e.target.innerText.toLowerCase()}`);
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const isValid = verifyLoginInputData();
        if (!isValid) {
            alert("All fields are required!");
            return;
        }
        const user = await login({ email: userInputData.username, password: userInputData.password });
        console.log("user", user);
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData) {
            navigate(process.env.PUBLIC_URL + "/");
        } else {
            alert("Invalid username or password!");
            return;
        }
    };

    const handleForgottenPasswordSubmit = async (e) => {
        e.preventDefault();
        console.log("handleForgottenPasswordSubmit");
        navigate(process.env.PUBLIC_URL + "/");
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        console.log("handleRegisterSubmit");
        const isValid = verifyRegisterInputData();
        if (!isValid) {
            alert("All fields are required!");
            return;
        }
        const user = await register({ email: userInputData.username, password: userInputData.password });

        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData) {
            navigate(process.env.PUBLIC_URL + "/");
        } else {
            alert("Unsuccessful registration! Try again later! Or maybe you are already registered? Try to login!");
            return;
        }
    };

    const handleLogoutSubmit = async (e) => {
        e.preventDefault();
        console.log("handleLogoutSubmit");
        const result = await logOut();
        // console.log("result", result);
        navigate(process.env.PUBLIC_URL + "/");
    };

    function verifyLoginInputData() {
        if (userInputData.username === "") {
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

    // console.log("userInputData", userInputData);
    // console.log("userInputDataError", userInputDataError);

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
                                        handleLoginSubmit={handleLoginSubmit}
                                        userInputData={userInputData}
                                        handleUserInputDataChange={handleUserInputDataChange}
                                        userInputDataError={userInputDataError}
                                        validateNewUserInput={validateNewUserInput}
                                    />
                                )}

                                {pathname === "/register" && (
                                    <Register
                                        handleRegisterSubmit={handleRegisterSubmit}
                                        userInputData={userInputData}
                                        handleUserInputDataChange={handleUserInputDataChange}
                                        userInputDataError={userInputDataError}
                                        validateNewUserInput={validateNewUserInput}
                                    />
                                )}
                                {pathname === "/logout" && <Logout handleLogoutSubmit={handleLogoutSubmit} />}
                                {pathname === "/forgotten-password" && (
                                    <ForgottenPassword handleForgottenPasswordSubmit={handleForgottenPasswordSubmit} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LoginRegister;
