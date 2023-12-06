import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const IconGroupUserDropdownMenu = ({
    user,
    handleGetUser,
    showUserDropdownMenuDesktop,
    showUserDropdownMenuMobile,
}) => {
    return (
        <div
            className={
                showUserDropdownMenuDesktop || showUserDropdownMenuMobile
                    ? "account-dropdown active"
                    : "account-dropdown"
            }
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
    );
};

export default IconGroupUserDropdownMenu;
