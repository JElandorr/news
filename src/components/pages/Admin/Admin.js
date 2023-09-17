import React, { useState, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../seo";
import Breadcrumb from "../../breadcrumb/BreadcrumbWrap";
import AdminCategories from "./sub-components/AdminCategories";
import AdminContains from "./sub-components/AdminContains";

const AdminPanel = () => {
    const [users, setUsers] = useState(true);
    const [articles, setArticles] = useState(false);

    const handleUsers = () => {
        setUsers(true);
        setArticles(false);
    };

    const handleArticles = () => {
        setUsers(false);
        setArticles(true);
    };

    let cartTotalPrice = 0;

    let { pathname } = useLocation();

    return (
        <Fragment>
            <SEO
                title="AdminPanel"
                titleTemplate="AdminPanel"
                description="AdminPanel page of flone react minimalist eCommerce template."
            />
            {/* breadcrumb */}
            <Breadcrumb
                pages={[
                    { label: "Home", path: process.env.PUBLIC_URL + "/" },
                    { label: "AdminPanel", path: process.env.PUBLIC_URL + pathname },
                ]}
            />
            <div className="AdminPanel-area pt-95 pb-100">
                <div className="container">
                    <div className="row">
                        <AdminCategories handleArticles={handleArticles} handleUsers={handleUsers} />
                        <AdminContains users={users} articles={articles} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AdminPanel;
