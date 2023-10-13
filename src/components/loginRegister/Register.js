import React from "react";
import { Link } from "react-router-dom";

const Register = ({
    handleRegisterSubmit,
    userInputData,
    handleUserInputDataChange,
    userInputDataError,
    validateNewUserInput,
}) => {
    return (
        <>
            <div className="login-register-tab-list nav nav-pills">
                <div className="nav-item">
                    <Link to={process.env.PUBLIC_URL + "/register"} className="nav-link active">
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
                                    className={`${userInputDataError["username"] ? "danger" : ""}`}
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={userInputData.username}
                                    onChange={handleUserInputDataChange}
                                    onBlur={validateNewUserInput}
                                />
                                <input
                                    className={`${userInputDataError["password"] ? "danger" : ""}`}
                                    onBlur={validateNewUserInput}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={userInputData.password}
                                    onChange={handleUserInputDataChange}
                                />
                                <input
                                    className={`${userInputDataError["rePass"] ? "danger" : ""}`}
                                    onBlur={validateNewUserInput}
                                    type="password"
                                    name="rePass"
                                    placeholder="Repeat Password"
                                    value={userInputData.rePass}
                                    onChange={handleUserInputDataChange}
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
    );
};

export default Register;
