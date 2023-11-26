import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link, useParams } from "react-router-dom";

import { dateTimeFormatter } from "../../utils/dateFormatter";

const ArticleMini = ({ article }) => {
    console.log("article", article);
    let formattedDate = "";

    if (article) {
        formattedDate = dateTimeFormatter(article.createdAt, true, "short");
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-wrap-2 mb-30">
                <div className="blog-img-2">
                    <Link to={process.env.PUBLIC_URL + "news/" + article.slug}>
                        <img src={`${article?.images[0]}`} alt="" />
                    </Link>
                </div>
                <div className="blog-content-2">
                    <div className="blog-meta-2">
                        <ul>
                            <li>{formattedDate}</li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "news/" + article.slug}>
                                    {article.comments?.length && article.comments.length}{" "}
                                    <FontAwesomeIcon icon={faCommentAlt} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <h4>
                        <Link to={process.env.PUBLIC_URL + "news/" + article.slug}>{article.title}</Link>
                    </h4>
                    <p>{article.description}</p>
                    <div className="blog-share-comment">
                        <div className="blog-btn-2">
                            <Link to={process.env.PUBLIC_URL + "news/" + article.slug}>read more</Link>
                        </div>
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
        </div>
    );
};

export default ArticleMini;
