import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Logo from "./sub-components/Logo";
import NavMenu from "./sub-components/NavMenu";
import IconGroup from "./sub-components/IconGroup";
import MobileMenu from "./sub-components/MobileMenu";
// import HeaderTop from "../../components/header/HeaderTop";

const Header = ({ layout, top, borderStyle, headerPaddingClass, headerPositionClass, headerBgClass }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSearchMenu, setShowSearchMenu] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);

    useEffect(() => {
        const header = document.querySelector(".sticky-bar");
        setHeaderTop(header.offsetTop);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleShowMobileMenu = (e) => {
        e.preventDefault();
        setShowMobileMenu(true);
    };

    const handleCloseMobileMenu = (e) => {
        e.preventDefault();
        setShowMobileMenu(false);
    };

    const handleSearchIconClick = (e) => {
        console.log("handleSearchIconClick");
        e.preventDefault();
        setShowSearchMenu((OldState) => !OldState);
    };

    return (
        <header className={clsx("header-area clearfix", headerBgClass, headerPositionClass)}>
            {/* <div
                className={clsx(
                    "header-top-area",
                    headerPaddingClass,
                    top === "visible" ? "d-none d-lg-block" : "d-none",
                    borderStyle === "fluid-border" && "border-none"
                )}
            >
                <div className={layout === "container-fluid" ? layout : "container"}>
                    <HeaderTop borderStyle={borderStyle} />
                </div>
            </div> */}

            <div
                className={clsx(
                    headerPaddingClass,
                    "sticky-bar header-res-padding clearfix",
                    scroll > headerTop && "stick"
                )}
            >
                <div className={layout === "container-fluid" ? layout : "container"}>
                    <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                            {/* header logo */}
                            <Logo imageUrl="/the-project-logo.jpg" logoClass="logo" />
                        </div>
                        <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                            {/* Nav menu */}
                            <NavMenu />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-8">
                            {/* Icon group */}
                            <IconGroup
                                showSearchMenu={showSearchMenu}
                                handleShowMobileMenu={handleShowMobileMenu}
                                handleSearchIconClick={handleSearchIconClick}
                            />
                        </div>
                    </div>
                </div>
                {/* mobile menu */}
                <MobileMenu showMobileMenu={showMobileMenu} handleCloseMobileMenu={handleCloseMobileMenu} />
            </div>
        </header>
    );
};

Header.propTypes = {
    borderStyle: PropTypes.string,
    headerPaddingClass: PropTypes.string,
    headerPositionClass: PropTypes.string,
    layout: PropTypes.string,
    top: PropTypes.string,
};

export default Header;
