import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { categoriesIni } from "../../dateStructures/categoriesIni.js";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
    const [secondaryCategories, setSecondaryCategories] = useState(false);

    function handleSecondaryCategories() {
        setSecondaryCategories(!secondaryCategories);
    }

    return (
        <div className={clsx(sidebarMenu ? "sidebar-menu" : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}>
            <nav>
                <ul>
                    <li>
                        <Link to={process.env.PUBLIC_URL + "/"}>News</Link>
                    </li>
                    {!secondaryCategories &&
                        categoriesIni.map((category, index) => {
                            if (category.primary) {
                                return (
                                    <li key={index}>
                                        <Link to={process.env.PUBLIC_URL + category.path}>{category.name}</Link>
                                    </li>
                                );
                            }
                        })}

                    {secondaryCategories &&
                        categoriesIni.map((category, index) => {
                            return (
                                <li key={index}>
                                    <Link to={process.env.PUBLIC_URL + category.path}>{category.name}</Link>
                                </li>
                            );
                        })}
                    <li onClick={handleSecondaryCategories}>
                        {!secondaryCategories ? (
                            <Link to="#">
                                Още <i className="fa fa-angle-down" />
                            </Link>
                        ) : (
                            <Link to="#">
                                Основни <i className="fa fa-angle-up" />
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

NavMenu.propTypes = {
    menuWhiteClass: PropTypes.string,
    sidebarMenu: PropTypes.bool,
};

export default NavMenu;
