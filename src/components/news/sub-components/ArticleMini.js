import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, useParams } from "react-router-dom";

const ArticleMini = ({ article }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-wrap-2 mb-30">
                <div className="blog-img-2">
                    <Link to={process.env.PUBLIC_URL + "news/" + article.slug}>
                        <img src={process.env.PUBLIC_URL + article.image} alt="" />
                    </Link>
                </div>
                <div className="blog-content-2">
                    <div className="blog-meta-2">
                        <ul>
                            <li>{article.datePublished}</li>
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
                                        <a className="facebook" href="//facebook.com">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="//twitter.com">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="//instagram.com">
                                            <i className="fa fa-instagram" />
                                        </a>
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
