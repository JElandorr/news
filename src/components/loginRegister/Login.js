import React from "react";
import { Link } from "react-router-dom";

const Login = ({
    handleLoginSubmit,
    userInputData,
    handleUserInputDataChange,
    userInputDataError,
    validateNewUserInput,
}) => {
    return (
        <>
            <div className="login-register-tab-list nav nav-pills">
                <div className="nav-item">
                    <Link to={process.env.PUBLIC_URL + "/login"} className="nav-link active">
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
                                    className={`${userInputDataError["username"] ? "danger" : ""}`}
                                    type="text"
                                    name="username"
                                    placeholder="Email"
                                    value={userInputData.username}
                                    onChange={handleUserInputDataChange}
                                    onBlur={validateNewUserInput}
                                />
                                <input
                                    className={`${userInputDataError["password"] ? "danger" : ""}`}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={userInputData.password}
                                    onChange={handleUserInputDataChange}
                                    onBlur={validateNewUserInput}
                                />
                                <div className="button-box">
                                    <div className="login-toggle-btn">
                                        <Link to={process.env.PUBLIC_URL + "/forgotten-password"}>
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
    );
};

export default Login;
