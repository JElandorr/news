import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const MobileWidgets = () => {
    return (
        <div className="offcanvas-widget-area">
            {/*Off Canvas Widget Social Start*/}
            <div className="blog-wrap-2-mobile">
                <div className="off-canvas-contact-widget">
                    <div className="header-contact-info">
                        <ul className="header-contact-info__list">
                        <span>Contact us:</span>
                            <li>
                                <i className="fa fa-phone"></i> <a href="tel://12452456012">(123) 3456-7890 </a>
                            </li>
                            <li>
                                <i className="fa fa-envelope"></i>{" "}
                                <a href="mailto:info@yourdomain.com">project_news@elandorr.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="blog-content-2">
                    <div className="blog-share-comment">
                        <div className="blog-share">
                            <span>share :</span>
                            <div className="share-social">
                                <ul>
                                    <li>
                                        <Link className="facebook" to="//facebook.com" target="_blank">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="twitter" to="//twitter.com" target="_blank">
                                            <FontAwesomeIcon icon={faXTwitter} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="instagram" to="//instagram.com" target="_blank">
                                            <i className="fa-brands fa-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Off Canvas Widget Social End*/}
        </div>
    );
};

export default MobileWidgets;
