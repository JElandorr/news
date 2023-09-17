import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const IconGroup = ({ iconWhiteClass }) => {
    const handleClick = (e) => {
        e.currentTarget.nextSibling.classList.toggle("active");
    };
    console.log("IconGroup");
    const triggerMobileMenu = () => {
        const offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu");
        offcanvasMobileMenu.classList.add("active");
    };
    //   const { compareItems } = useSelector((state) => state.compare);
    //   const { wishlistItems } = useSelector((state) => state.wishlist);
    //   const { cartItems } = useSelector((state) => state.cart);

    return (
        <div className={clsx("header-right-wrap", iconWhiteClass)}>
            <div className="same-style header-search d-none d-lg-block">
                <button className="search-active" onClick={(e) => handleClick(e)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <div className="search-content">
                    <form action="#">
                        <input type="text" placeholder="Search" />
                        <button className="button-search">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </form>
                </div>
            </div>
            <div className="same-style account-setting d-none d-lg-block">
                <button className="account-setting-active" onClick={(e) => handleClick(e)}>
                    <FontAwesomeIcon icon={faUser} />
                </button>
                <div className="account-dropdown">
                    <ul>
                        <li>
                            <Link to={process.env.PUBLIC_URL + "/login"}>Login</Link>
                        </li>
                        <li>
                            <Link to={process.env.PUBLIC_URL + "/register"}>Register</Link>
                        </li>
                        <li>
                            <Link to={process.env.PUBLIC_URL + "/my-account"}>my account</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="same-style mobile-off-canvas d-block d-lg-none">
                <button className="mobile-aside-button" onClick={() => triggerMobileMenu()}>
                    <i className="pe-7s-menu" />
                </button>
            </div>
        </div>
    );
};

IconGroup.propTypes = {
    iconWhiteClass: PropTypes.string,
};

export default IconGroup;
