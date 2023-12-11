import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import FooterCopyright from "./FooterCopyright";

const Footer = ({
    backgroundColorClass,
    spaceTopClass,
    spaceBottomClass,
    spaceLeftClass,
    spaceRightClass,
    extraFooterClass,
}) => {
    return (
        <footer
            className={clsx(
                "footer-area",
                backgroundColorClass,
                spaceTopClass,
                spaceBottomClass,
                extraFooterClass,
                spaceLeftClass,
                spaceRightClass
            )}
        >
            <div className={`container`}>
                <div className="row">
                    <div className={`col-lg-2 col-sm-4`}>
                        {/* footer copyright */}
                        <FooterCopyright footerLogo="/the-project-logo-mini.jpg" spaceBottomClass="mb-30" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    backgroundColorClass: PropTypes.string,
    containerClass: PropTypes.string,
    extraFooterClass: PropTypes.string,
    sideMenu: PropTypes.bool,
    spaceBottomClass: PropTypes.string,
    spaceTopClass: PropTypes.string,
    spaceLeftClass: PropTypes.string,
    spaceRightClass: PropTypes.string,
};

export default Footer;
