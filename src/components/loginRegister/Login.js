import React, { useState, Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useLogin";

import SEO from "../seo";
import Breadcrumb from "../breadcrumb/BreadcrumbWrap";

const Login = ({ validateNewUserInput, clearInputData }) => {
    const [userInputData, setUserInputData] = useState({
        password: "",
        email: "",
    });
    const [userInputDataError, setUserInputDataError] = useState({});
    const { login, loginError, isLoading } = useLogin();
    const [errors, setErrors] = useState(loginError);
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            setErrors((state) => null);
            setUserInputData({
                password: "",
                email: "",
            });
        };
    }, []);

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

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const isValid = verifyLoginInputData();

        if (!isValid) {
            setErrors((state) => "Invalid input data! Check the form for errors!");
            return;
        } else {
            setErrors((state) => null);
        }
        const loggedUser = await login(userInputData.email, userInputData.password);
        // console.log("loggedUser", loggedUser);
        clearInputData();
    };

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
            password: "",
            email: "",
        });
    }

    // console.log("userInputData", userInputData);

    return (
        <>
            <Fragment>
                <SEO title="NewsProject" titleTemplate="Login | Register" description="Login page of Project News." />
                {/* breadcrumb */}
                <Breadcrumb
                    pages={[
                        { label: "Home", path: process.env.PUBLIC_URL + "/" },
                        { label: "Login", path: process.env.PUBLIC_URL + "/login" },
                    ]}
                />
                <div className="login-register-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-12 ms-auto me-auto">
                                <div className="login-register-wrapper">
                                    <div className="login-register-tab-list nav nav-pills">
                                        <div className="nav-item">
                                            <Link to="#" className="nav-link active">
                                                <h4>Login</h4>
                                            </Link>
                                        </div>
                                        <div className="nav-item">
                                            <Link to={process.env.PUBLIC_URL + "/register"} className="nav-link">
                                                <h4>Register</h4>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="tab-content">
                                        <div className="fade tab-pane active show">
                                            <div className="login-form-container">
                                                <div className="login-register-form">
                                                    <form onSubmit={handleLoginSubmit}>
                                                        {/* <p className="error">{loginError}</p> */}
                                                        <input
                                                            className={`${userInputDataError["email"] ? "danger" : ""}`}
                                                            type="text"
                                                            name="email"
                                                            placeholder="Email"
                                                            value={userInputData.email}
                                                            onChange={handleUserInputDataChange}
                                                            onBlur={validateNewUserInput}
                                                        />
                                                        <input
                                                            className={`${
                                                                userInputDataError["password"] ? "danger" : ""
                                                            }`}
                                                            type="password"
                                                            name="password"
                                                            placeholder="Password"
                                                            value={userInputData.password}
                                                            onChange={handleUserInputDataChange}
                                                            onBlur={validateNewUserInput}
                                                        />
                                                        <div className="button-box login">
                                                            {isLoading ? (
                                                                <button type="submit" disabled>
                                                                    <span>Logging in...</span>
                                                                </button>
                                                            ) : (
                                                                <button type="submit">
                                                                    <span>Login</span>
                                                                </button>
                                                            )}
                                                        </div>
                                                        {errors ? (
                                                            <p className="error">{errors} </p>
                                                        ) : loginError ? (
                                                            <p className="error">{loginError}</p>
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

export default Login;
