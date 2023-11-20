import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useLogin";

const Login = ({
    userInputData,
    handleUserInputDataChange,
    userInputDataError,
    validateNewUserInput,
    verifyLoginInputData,
    clearInputData,
}) => {
    const { login, loginError, isLoading } = useLogin();
    const [errors, setErrors] = useState(loginError);
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
        console.log("loggedUser", loggedUser);
        clearInputData();
        navigate("/");
    };

    console.log("userInputData", userInputData);

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
                                    className={`${userInputDataError["password"] ? "danger" : ""}`}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={userInputData.password}
                                    onChange={handleUserInputDataChange}
                                    onBlur={validateNewUserInput}
                                />
                                <div className="button-box">
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
        </>
    );
};

export default Login;
