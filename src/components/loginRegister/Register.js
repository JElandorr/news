import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useRegister } from "../../hooks/useRegister";

import SEO from "../seo";
import Breadcrumb from "../breadcrumb/BreadcrumbWrap";

const Register = () => {
    const [userInputData, setUserInputData] = useState({
        username: "",
        password: "",
        rePass: "",
        email: "",
    });
    const [userInputDataError, setUserInputDataError] = useState({});
    const { register, registerError, isLoading } = useRegister();
    const [errors, setErrors] = useState(registerError);
    // const navigate = useNavigate();

    async function handleRegisterSubmit(e) {
        e.preventDefault();
        // console.log("handleRegisterSubmit");
        const isValid = verifyRegisterInputData();

        if (!isValid) {
            setErrors((state) => "Invalid input data! Check the form for errors!");
            return;
        } else {
            setErrors((state) => null);
        }

        const registeredUser = await register(userInputData.email, userInputData.password, userInputData.username);
        console.log("registeredUser", registeredUser);
        clearInputData();
        // navigate("/");
    }

    function handleUserInputDataChange(e) {
        const targetName = e.target.name;
        const targetValue = e.target.value;
        if (targetValue !== "") {
            setUserInputDataError({ ...userInputDataError, [targetName]: false });
        }
        setUserInputData({ ...userInputData, [targetName]: targetValue });
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

    return (
        <>
            <Fragment>
                <SEO title="NewsProject" titleTemplate="Register" description="Register page of Project News." />
                {/* breadcrumb */}
                <Breadcrumb
                    pages={[
                        { label: "Home", path: process.env.PUBLIC_URL + "/" },
                        { label: "Register", path: process.env.PUBLIC_URL + "/register" },
                    ]}
                />
                <div className="login-register-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-12 ms-auto me-auto">
                                <div className="login-register-wrapper">
                                    <div className="login-register-tab-list nav nav-pills">
                                        <div className="nav-item">
                                            <Link to={process.env.PUBLIC_URL + "/login"} className="nav-link">
                                                <h4>Login</h4>
                                            </Link>
                                        </div>
                                        <div className="nav-item">
                                            <Link to="#" className="nav-link active">
                                                <h4>Register</h4>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="tab-content">
                                        <div className="fade tab-pane active show">
                                            <div className="login-form-container">
                                                <div className="login-register-form">
                                                    <form onSubmit={handleRegisterSubmit}>
                                                        {/* {errors ? (
                                    <p className="error">{errors} </p>
                                ) : registerError ? (
                                    <p className="error">{registerError}</p>
                                ) : null} */}
                                                        <input
                                                            className={`${
                                                                userInputDataError["username"] ? "danger" : ""
                                                            }`}
                                                            type="text"
                                                            name="username"
                                                            placeholder="Username"
                                                            value={userInputData.username}
                                                            onChange={handleUserInputDataChange}
                                                            onBlur={validateNewUserInput}
                                                        />
                                                        <input
                                                            className={`${userInputDataError["email"] ? "danger" : ""}`}
                                                            onBlur={validateNewUserInput}
                                                            name="email"
                                                            placeholder="Email"
                                                            type="email"
                                                            value={userInputData.email}
                                                            onChange={handleUserInputDataChange}
                                                        />
                                                        <input
                                                            className={`${
                                                                userInputDataError["password"] ? "danger" : ""
                                                            }`}
                                                            onBlur={validateNewUserInput}
                                                            type="password"
                                                            name="password"
                                                            placeholder="Password"
                                                            value={userInputData.password}
                                                            onChange={handleUserInputDataChange}
                                                        />
                                                        <input
                                                            className={`${
                                                                userInputDataError["rePass"] ? "danger" : ""
                                                            }`}
                                                            onBlur={validateNewUserInput}
                                                            type="password"
                                                            name="rePass"
                                                            placeholder="Repeat Password"
                                                            value={userInputData.rePass}
                                                            onChange={handleUserInputDataChange}
                                                        />
                                                        <div className="button-box">
                                                            {isLoading ? (
                                                                <button type="submit" disabled>
                                                                    <span>Registering in process...</span>
                                                                </button>
                                                            ) : (
                                                                <button type="submit">
                                                                    <span>Register</span>
                                                                </button>
                                                            )}
                                                        </div>
                                                        {errors ? (
                                                            <p className="error">{errors} </p>
                                                        ) : registerError ? (
                                                            <p className="error">{registerError}</p>
                                                        ) : null}
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        </>
    );
};

export default Register;
