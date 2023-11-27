import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";

import clsx from "clsx";

const IconGroup = ({ iconWhiteClass }) => {
    const { user } = useAuthContext();

    const handleUserIconClick = (e) => {
        e.currentTarget.nextSibling.classList.toggle("active");
        if (document.querySelector(".search-content").classList.contains("active")) {
            document.querySelector(".search-content").classList.remove("active");
        }
    };

    const handleSearchIconClick = (e) => {
        e.currentTarget.nextSibling.classList.toggle("active");
        if (document.querySelector(".account-dropdown").classList.contains("active")) {
            document.querySelector(".account-dropdown").classList.remove("active");
        }
    };

    const triggerMobileMenu = () => {
        const offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu");
        offcanvasMobileMenu.classList.add("active");
    };

    const handleGetUser = async (e) => {
        e.preventDefault();
        console.log("handleGetUser");
        // const user = await getUser();
        // console.log("user", user);
    };

    return (
        <div className={clsx("header-right-wrap", iconWhiteClass)}>
            <div className="same-style header-search d-none d-lg-block">
                <button className="search-active" onClick={(e) => handleSearchIconClick(e)}>
                    <i className="fa fa-magnifying-glass"></i>
                </button>
                <div className="search-content">
                    <form action="#">
                        <input type="text" placeholder="Search" />
                        <button className="button-search">
                            <i className="fa fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </div>
            <div className="same-style account-setting d-none d-lg-block">
                <button className="account-setting-active" onClick={(e) => handleUserIconClick(e)}>
                    {user ? <i className="fa-solid fa-user"></i> : <i className="fa-regular fa-user"></i>}
                    {/* <i className="fa-regular fa-user"></i> */}
                </button>
                <div className="account-dropdown">
                    <ul>
                        {user ? (
                            <>
                                <p onClick={handleGetUser}>Hello, {user.displayName}</p>
                                {/* <p onClick={handleGetUser}>Hello, {user.email}</p> */}
                                <li>
                                    <Link to={process.env.PUBLIC_URL + "/my-account"}>My account</Link>
                                </li>
                                <li>
                                    <Link to={process.env.PUBLIC_URL + "/my-articles"}>My articles</Link>
                                </li>
                                <li>
                                    <Link to={process.env.PUBLIC_URL + "/create-new-article"}>Create Article</Link>
                                </li>
                                <li>
                                    <Link to={process.env.PUBLIC_URL + "/logout"}>Logout</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to={process.env.PUBLIC_URL + "/login"}>Login</Link>
                                </li>
                                <li>
                                    <Link to={process.env.PUBLIC_URL + "/register"}>Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
            <div className="same-style mobile-off-canvas d-block d-lg-none">
                <button className="mobile-aside-button" onClick={() => triggerMobileMenu()}>
                    <i className="fa-solid fa-bars fa-lg"></i>
                </button>
            </div>
        </div>
    );
};

IconGroup.propTypes = {
    iconWhiteClass: PropTypes.string,
};

export default IconGroup;
