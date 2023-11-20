import React, { useState, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../seo";
import Breadcrumb from "../../breadcrumb/BreadcrumbWrap";
import AdminCategories from "./sub-components/AdminCategories";
import AdminContains from "./sub-components/AdminContains";
// import LoginRegister from "../../loginRegister/LoginRegister";

const AdminPanel = () => {
    const [users, setUsers] = useState(false);
    const [articles, setArticles] = useState(false);

    // const user = JSON.parse(localStorage.getItem("user"));
    const user = true;

    const handleUsers = () => {
        setUsers(true);
        setArticles(false);
    };

    const handleArticles = () => {
        setUsers(false);
        setArticles(true);
    };

    let { pathname } = useLocation();

    const NotSuccessfulLogin = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h2>News Project Admin Panel</h2>
                            <p>Log in to access the admin panel.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="myaccount-content">
                            <div className="alert alert-danger" role="alert">
                                <h4 className="alert-heading">Access denied!</h4>
                                <p>You are not authorized to access this page.</p>
                                <hr />
                                <p className="mb-0">
                                    Please <Link to="/login">log in</Link> to access the admin panel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Fragment>
            <SEO
                title="NewsProject"
                titleTemplate="AdminPanel"
                description="AdminPanel page of flone react minimalist eCommerce template."
            />
            <div className="AdminPanel-area pt-95 pb-100">
                <div className="container">
                    <div className="row mb-100">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h2>News Project Admin Panel</h2>
                            </div>
                        </div>
                    </div>
                    {!user && (
                        <div className="row">
                            <div className="section-title text-center">{/* <LoginRegister /> */}</div>
                        </div>
                    )}
                    {user && (
                        <>
                            <div className="row">
                                <div className="col-lg-9"></div>
                                <div className="col-lg-2">Добре дошъл, {user.username}!</div>
                                <div className="col-lg-1">
                                    <Link to="/logout">Изход</Link>
                                </div>
                            </div>
                            <div className="row">
                                <AdminCategories handleArticles={handleArticles} handleUsers={handleUsers} />
                                <AdminContains users={users} articles={articles} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default AdminPanel;
