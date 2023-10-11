import React, { useState, Fragment, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import AuthContext from "../contexts/AuthContext";

import SEO from "../seo";
import Breadcrumb from "../breadcrumb/BreadcrumbWrap";

const LoginRegister = () => {
    const { user, login, register } = useContext(AuthContext);

    const [userInputData, setUserInputData] = useState({
        username: "",
        password: "",
        email: "",
    });

    let { pathname } = useLocation();
    // console.log("pathname", pathname);

    let navigate = useNavigate();

    const handleUserInputDataChange = (e) => {
        setUserInputData({ ...userInputData, [e.target.name]: e.target.value });
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
        console.log("handleLoginSubmit");
        const user = await login({ email: userInputData.username, password: userInputData.password });
        const userData = JSON.parse(localStorage.getItem("userData"));
        console.log("userData", userData);
        navigate(process.env.PUBLIC_URL + "/");
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        console.log("handleRegisterSubmit");
        const user = await register({ email: userInputData.username, password: userInputData.password });
        const userData = JSON.parse(localStorage.getItem("userData"));
        navigate(process.env.PUBLIC_URL + "/");
    };

    const handleLogoutSubmit = (e) => {
        e.preventDefault();
        console.log("handleLogoutSubmit");
    };

    // console.log("userInputData", userInputData);

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
                    { label: "Login | Register", path: process.env.PUBLIC_URL + pathname },
                ]}
            />
            <div className="login-register-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 ms-auto me-auto">
                            <div className="login-register-wrapper">
                                {pathname === "/login" && (
                                    <>
                                        <div className="login-register-tab-list nav nav-pills">
                                            <div className="nav-item">
                                                <Link
                                                    to={process.env.PUBLIC_URL + "/login"}
                                                    className="nav-link active"
                                                >
                                                    <h4>Login</h4>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="tab-content">
                                            <div className="fade tab-pane active show">
                                                <div className="login-form-container">
                                                    <div className="login-register-form">
                                                        <form onSubmit={handleLoginSubmit}>
                                                            <input
                                                                type="text"
                                                                name="username"
                                                                placeholder="Username"
                                                                value={userInputData.username}
                                                                onChange={handleUserInputDataChange}
                                                            />
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                placeholder="Password"
                                                                value={userInputData.password}
                                                                onChange={handleUserInputDataChange}
                                                            />
                                                            <div className="button-box">
                                                                <div className="login-toggle-btn">
                                                                    <input type="checkbox" />
                                                                    <label className="ml-10">Remember me</label>
                                                                    <Link to={process.env.PUBLIC_URL + "/"}>
                                                                        Forgot Password?
                                                                    </Link>
                                                                </div>
                                                                <button type="submit">
                                                                    <span>Login</span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {pathname === "/register" && (
                                    <>
                                        <div className="login-register-tab-list nav nav-pills">
                                            <div className="nav-item">
                                                <Link
                                                    to={process.env.PUBLIC_URL + "/register"}
                                                    className="nav-link active"
                                                >
                                                    <h4>Register</h4>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="tab-content">
                                            <div className="fade tab-pane active show">
                                                <div className="login-form-container">
                                                    <div className="login-register-form">
                                                        <form onSubmit={handleRegisterSubmit}>
                                                            <input
                                                                type="text"
                                                                name="username"
                                                                placeholder="Username"
                                                                value={userInputData.username}
                                                                onChange={handleUserInputDataChange}
                                                            />
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                placeholder="Password"
                                                                value={userInputData.password}
                                                                onChange={handleUserInputDataChange}
                                                            />
                                                            <input
                                                                name="email"
                                                                placeholder="Email"
                                                                type="email"
                                                                value={userInputData.email}
                                                                onChange={handleUserInputDataChange}
                                                            />
                                                            <div className="button-box">
                                                                <button type="submit">
                                                                    <span>Register</span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                {pathname === "/logout" && (
                                    <>
                                        <div className="login-register-tab-list nav nav-pills">
                                            <div className="nav-item">
                                                <Link
                                                    to={process.env.PUBLIC_URL + "/logout"}
                                                    className="nav-link active"
                                                >
                                                    <h4>Logout</h4>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="tab-content">
                                            <div className="fade tab-pane active show">
                                                <div className="login-form-container" style={{ textAlign: "center" }}>
                                                    <h4>Are you sure you want to logout?</h4>
                                                    <div className="mtb-50"></div>
                                                    <div className="login-register-form">
                                                        <form
                                                            style={{ display: "flex", justifyContent: "space-between" }}
                                                        >
                                                            <div className="button-box yes">
                                                                <button>
                                                                    <span>Yes, logout!</span>
                                                                </button>
                                                            </div>
                                                            <div className="button-box no">
                                                                <button>
                                                                    <span>No, stay onsite!</span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
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
