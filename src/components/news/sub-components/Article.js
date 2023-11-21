import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useCollection } from "../../../hooks/useCollection";

import Preloader from "../../preloader/Preloader";

// import { articles } from "../../dataStructures/examples/articles_example";

const Article = () => {
    const [articleData, setArticleData] = useState(null);
    const { article } = useParams();
    const { documents, error, isLoading } = useCollection("articles");

    useEffect(() => {
        if (documents) {
            setArticleData(documents.find((singleArticle) => singleArticle.slug === article));
        }
    }, [documents]);

    // console.log("documents", documents);
    // console.log("articleData", articleData);
    // console.log("articleData typeof", typeof articleData);
    // console.log("error", error);

    if (error) {
        return <p>{error}</p>;
    }

    let formattedDate = "";

    if (articleData) {
        const date = new Date(articleData?.createdAt.seconds * 1000);
        const options = { year: "numeric", month: "long", day: "numeric" };
        formattedDate = date.toLocaleDateString("bg-BG", options);
    }

    return (
        <>
            {isLoading ? (
                <Preloader />
            ) : (
                <Fragment>
                    <div className="blog-details-top">
                        <div className="blog-details-img">
                            <img alt="" src={`${articleData?.images[0]}`} />
                        </div>
                        <div className="blog-details-content">
                            <div className="blog-meta-2">
                                <ul>
                                    <li>{formattedDate ? formattedDate : ""}</li>
                                    <li>
                                        {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                            {articleData?.comments} <i className="fa fa-comments-o" />
                                        </Link> */}
                                    </li>
                                </ul>
                            </div>
                            <h3>{articleData?.title}</h3>
                            <p>{articleData?.subtitle}</p>
                        </div>
                    </div>
                    <div className="dec-img-wrapper">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="dec-img mb-50">
                                    <img alt="" src={process.env.PUBLIC_URL + "/assets/img/blog/blog-details.jpg"} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="dec-img mb-50">
                                    <img alt="" src={process.env.PUBLIC_URL + "/assets/img/blog/blog-details-2.jpg"} />
                                </div>
                            </div>
                        </div>
                        <p>{articleData?.text}</p>
                    </div>
                    <div className="tag-share">
                        <div className="dec-tag">
                            <ul>
                                {articleData?.categories?.map((category) => (
                                    <li key={category}>
                                        <Link to={process.env.PUBLIC_URL + `/news/categories/${category}`}>
                                            {category}
                                        </Link>
                                    </li>
                                ))}
                                {/* <li>
                                    <Link to={process.env.PUBLIC_URL + "/blog-standard"}>lifestyle ,</Link>
                                </li> */}
                                {/* <li>
                                    <Link to={process.env.PUBLIC_URL + "/blog-standard"}>interior ,</Link>
                                </li>
                                <li>
                                    <Link to={process.env.PUBLIC_URL + "/blog-standard"}>outdoor</Link>
                                </li> */}
                            </ul>
                        </div>
                        {/* <div className="blog-share">
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
                        </div> */}
                    </div>
                    <div className="next-previous-post">
                        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                            {" "}
                            <i className="fa fa-angle-left" /> prev post
                        </Link>
                        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                            next post <i className="fa fa-angle-right" />
                        </Link>
                    </div>
                </Fragment>
            )}
        </>
    );
};

export default Article;
