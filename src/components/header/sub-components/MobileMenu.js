import React, { useEffect } from "react";
import MobileMenuSearch from "./MobileSearch";
import MobileNavMenu from "./MobileNavMenu";
import MobileWidgets from "./MobileWidgets";

const MobileMenu = ({ showMobileMenu, handleCloseMobileMenu }) => {
    return (
        <div className={`offcanvas-mobile-menu ${showMobileMenu ? "active" : ""}`} id="offcanvas-mobile-menu">
            <button className="offcanvas-menu-close" id="mobile-menu-close-trigger" onClick={(e) => handleCloseMobileMenu(e)}>
                <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="offcanvas-wrapper">
                <div className="offcanvas-inner-content">
                    {/* mobile search */}
                    <MobileMenuSearch />

                    {/* mobile nav menu */}
                    <MobileNavMenu handleCloseMobileMenu={handleCloseMobileMenu} />

                    {/* mobile widgets */}
                    <MobileWidgets />
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
