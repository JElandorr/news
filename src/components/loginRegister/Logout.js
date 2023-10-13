import React from "react";
import { Link } from "react-router-dom";

const Logout = ({ handleLogoutSubmit }) => {
    return (
        <>
            <div className="login-register-tab-list nav nav-pills">
                <div className="nav-item">
                    <Link to={process.env.PUBLIC_URL + "/logout"} className="nav-link active">
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
                            <form style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className="button-box yes" onClick={handleLogoutSubmit}>
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
    );
};

export default Logout;
