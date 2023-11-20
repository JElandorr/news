import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useRegister } from "../../hooks/useRegister";

const Register = ({
    userInputData,
    handleUserInputDataChange,
    userInputDataError,
    validateNewUserInput,
    verifyRegisterInputData,
    clearInputData,
}) => {
    const { register, registerError, isLoading } = useRegister();
    const [errors, setErrors] = useState(registerError);
    const navigate = useNavigate();

    // console.log("errors", errors);
    // console.log("registerError", registerError);

    const handleRegisterSubmit = async (e) => {
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
        navigate("/");
    };

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
                                {/* {errors ? (
                                    <p className="error">{errors} </p>
                                ) : registerError ? (
                                    <p className="error">{registerError}</p>
                                ) : null} */}
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
                                    className={`${userInputDataError["email"] ? "danger" : ""}`}
                                    onBlur={validateNewUserInput}
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    value={userInputData.email}
                                    onChange={handleUserInputDataChange}
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
        </>
    );
};

export default Register;
