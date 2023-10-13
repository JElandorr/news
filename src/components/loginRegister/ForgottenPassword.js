import React from "react";
import { Link } from "react-router-dom";

const ForgottenPassword = ({ handleForgottenPasswordSubmit }) => {
    return (
        <>
            <div className="login-register-tab-list nav nav-pills">
                <div className="nav-item">
                    <Link to={process.env.PUBLIC_URL + "/forgotten-password"} className="nav-link active">
                        <h4>Forgotten Password</h4>
                    </Link>
                </div>
            </div>
            <div className="tab-content">
                <div className="fade tab-pane active show">
                    <div className="login-form-container" style={{ textAlign: "center" }}>
                        <h4>
                            Please input the email that you used to register to our website and if it matches an entry
                            in our database, you will recieve an email with instructions how to renew your password!
                        </h4>
                        <div className="mtb-50"></div>
                        <div className="login-register-form">
                            <div className="same-style">
                                <div className="search-content">
                                    <form action="#">
                                        <input type="text" placeholder="Email" />
                                        <div className="button-box" onClick={handleForgottenPasswordSubmit}>
                                            <button>
                                                <span>Send Email</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgottenPassword;
