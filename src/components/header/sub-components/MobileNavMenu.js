import React, { useState } from "react";
import { Link } from "react-router-dom";

import { categoriesIni } from "../../dateStructures/categoriesIni.js";

const MobileNavMenu = () => {
    const [secondaryCategories, setSecondaryCategories] = useState(false);

    function handleSecondaryCategories() {
        setSecondaryCategories(!secondaryCategories);
    }
    return (
        <nav className="offcanvas-navigation" id="offcanvas-navigation">
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
    );
};

export default MobileNavMenu;
