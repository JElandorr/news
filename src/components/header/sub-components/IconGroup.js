import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";

import clsx from "clsx";
import IconGroupUserDropdownMenu from "./IconGroupUserDropdownMenu";

const IconGroup = ({ iconWhiteClass }) => {
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
                <button className="account-setting-active" onClick={(e) => handleUserIconClickDesktop(e)}>
                    {user ? <i className="fa-solid fa-user"></i> : <i className="fa-regular fa-user"></i>}
                </button>
                {showUserDropdownMenuDesktop && (
                    <IconGroupUserDropdownMenu
                        user={user}
                        handleGetUser={handleGetUser}
                        showUserDropdownMenuDesktop={showUserDropdownMenuDesktop}
                    />
                )}
            </div>
            <div className="same-style mobile-off-canvas d-block d-lg-none">
                <button className="mobile-aside-button" onClick={() => triggerMobileMenu()}>
                    <i className="fa-solid fa-bars fa-lg"></i>
                </button>
                <button className="account-setting-active" onClick={(e) => handleUserIconClickMobile(e)}>
                    {user ? <i className="fa-solid fa-user"></i> : <i className="fa-regular fa-user"></i>}
                </button>
                {showUserDropdownMenuMobile && (
                    <IconGroupUserDropdownMenu
                        user={user}
                        handleGetUser={handleGetUser}
                        showUserDropdownMenuMobile={showUserDropdownMenuMobile}
                    />
                )}
            </div>
        </div>
    );
};

IconGroup.propTypes = {
    iconWhiteClass: PropTypes.string,
};

export default IconGroup;
