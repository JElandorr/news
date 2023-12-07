import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuthContext } from "../../../hooks/useAuthContext";

import clsx from "clsx";

const IconGroup = ({ iconWhiteClass, handleShowMobileMenu, handleSearchIconClick, showSearchMenu }) => {
    const [showUserDropdownMenuDesktop, setShowUserDropdownMenuDesktop] = useState(false);
    const [showUserDropdownMenuMobile, setShowUserDropdownMenuMobile] = useState(false);
    const { user } = useAuthContext();

    const handleUserIconClickDesktop = (e) => {
        e.preventDefault();
        setShowUserDropdownMenuDesktop((OldState) => !OldState);
    };

    const handleUserIconClickMobile = (e) => {
        e.preventDefault();
        setShowUserDropdownMenuMobile((OldState) => !OldState);
    };

    const handleGetUser = async (e) => {
        e.preventDefault();
        console.log("handleGetUser");
        // const user = await getUser();
        // console.log("user", user);
    };

    return (
        <div className={clsx("header-right-wrap", iconWhiteClass)}>
            <div className="same-style same-style-desktop header-search d-none d-lg-block">
                <button className="search-active" onClick={(e) => handleSearchIconClick(e)}>
                    <i className="fa fa-magnifying-glass"></i>
                </button>
                <div className={`search-content ${showSearchMenu ? "active" : ""}`}>
                    <form action="#">
                        <input type="text" placeholder="Search" />
                        <button className="button-search">
                            <i className="fa fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </div>
            <div className="same-style same-style-desktop account-setting d-none d-lg-block">
                <button className="account-setting-active" onClick={(e) => handleUserIconClickDesktop(e)}>
                    {user ? <i className="fa-solid fa-user"></i> : <i className="fa-regular fa-user"></i>}
                </button>
                <div
                    className={`account-dropdown ${
                        showUserDropdownMenuDesktop || showUserDropdownMenuMobile ? "active" : ""
                    }`}
                >
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
            <div className="same-style same-style-mobile mobile-off-canvas d-block d-lg-none">
                <button className="account-setting-active" onClick={(e) => handleUserIconClickMobile(e)}>
                    {user ? <i className="fa-solid fa-user fa-xl"></i> : <i className="fa-regular fa-user fa-xl"></i>}
                </button>
                <div className="mr-20" />
                <button className="mobile-aside-button" onClick={(e) => handleShowMobileMenu(e)}>
                    <i className="fa-solid fa-bars fa-2xl"></i>
                </button>
                <div
                    className={`account-dropdown ${
                        showUserDropdownMenuDesktop || showUserDropdownMenuMobile ? "active" : ""
                    }`}
                >
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
        </div>
    );
};

IconGroup.propTypes = {
    iconWhiteClass: PropTypes.string,
};

export default IconGroup;
