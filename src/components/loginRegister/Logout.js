import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useLogout } from "../../hooks/useLogout";

import SEO from "../seo";
import Breadcrumb from "../breadcrumb/BreadcrumbWrap";

const Logout = () => {
    const { logout, logoutError, isLoading } = useLogout();
    const navigate = useNavigate();

    const handleLogoutSubmit = async (e) => {
        e.preventDefault();
        console.log("handleLogoutSubmit");
        logout();
        navigate("/");
    };

    const handleLogoutCancel = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <>
            <Fragment>
                <SEO title="NewsProject" titleTemplate="Logout" description="Logout page of Project News." />
                {/* breadcrumb */}
                <Breadcrumb
                    pages={[
                        { label: "Home", path: process.env.PUBLIC_URL + "/" },
                        { label: "Logout", path: process.env.PUBLIC_URL + "/logout" },
                    ]}
                />
                <div className="login-register-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-12 ms-auto me-auto">
                                <div className="login-register-wrapper">
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
                                                {isLoading ? (
                                                    <p className="loading">Signing out...</p>
                                                ) : (
                                                    <>
                                                        <h4>Are you sure you want to logout?</h4>
                                                        <div className="mtb-50"></div>
                                                        <div className="login-register-form">
                                                            <form
                                                                style={{
                                                                    display: "flex",
                                                                    justifyContent: "space-between",
                                                                }}
                                                            >
                                                                <div
                                                                    className="button-box yes"
                                                                    onClick={handleLogoutSubmit}
                                                                >
                                                                    <button>
                                                                        <span>Yes, logout!</span>
                                                                    </button>
                                                                </div>
                                                                <div
                                                                    className="button-box no"
                                                                    onClick={(e) => handleLogoutCancel(e)}
                                                                >
                                                                    <button>
                                                                        <span>No, stay onsite!</span>
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </>
                                                )}
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

export default Logout;
