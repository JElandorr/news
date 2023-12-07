import React, { useState } from "react";
import { Link } from "react-router-dom";

import { categoriesIni } from "../../dateStructures/categoriesIni.js";

const MobileNavMenu = ({ handleCloseMobileMenu }) => {
    const [secondaryCategories, setSecondaryCategories] = useState(false);

    function handleSecondaryCategories(e) {
        e.preventDefault();
        setSecondaryCategories(!secondaryCategories);
    }
    return (
        <nav className="offcanvas-navigation" id="offcanvas-navigation">
            <ul>
                <li onClick={handleCloseMobileMenu}>
                    <Link to={process.env.PUBLIC_URL + "/"}>News</Link>
                </li>
                {!secondaryCategories &&
                    categoriesIni.map((category, index) => {
                        if (category.primary) {
                            return (
                                <li key={index} onClick={handleCloseMobileMenu}>
                                    <Link to={process.env.PUBLIC_URL + category.path}>{category.name}</Link>
                                </li>
                            );
                        }
                    })}

                {secondaryCategories &&
                    categoriesIni.map((category, index) => {
                        return (
                            <li key={index} onClick={handleCloseMobileMenu}>
                                <Link to={process.env.PUBLIC_URL + category.path}>{category.name}</Link>
                            </li>
                        );
                    })}
                <li>
                    {!secondaryCategories ? (
                        <Link to="#" onClick={(e) => handleSecondaryCategories(e)}>
                            Още <i className="fa fa-angle-down" />
                        </Link>
                    ) : (
                        <Link to="#" onClick={(e) => handleSecondaryCategories(e)}>
                            Основни <i className="fa fa-angle-up" />
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default MobileNavMenu;
