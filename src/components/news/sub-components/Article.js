import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import { useCollection } from "../../../hooks/useCollection";

import Preloader from "../../preloader/Preloader";
import { dateTimeFormatterFromSeconds } from "../../utils/dateFormatter";

// import { articles } from "../../dataStructures/examples/articles_example";

import { categoriesIni } from "../../dateStructures/categoriesIni";

const Article = () => {
    const [articleData, setArticleData] = useState(null);
    const [currentCategories, setCurrentCategories] = useState(null);
    const [nextArticleSlug, setNextArticleSlug] = useState(null);
    const [previousArticleSlug, setPreviousArticleSlug] = useState(null);
    const { article } = useParams();
    const { documents, collectionError, isLoading } = useCollection("articles");
    const navigate = useNavigate();

    useEffect(() => {
        if (documents) {
            documents.sort((a, b) => b.createdAt - a.createdAt);
            const currentArticleIndex = documents.findIndex((singleArticle) => singleArticle.slug === article);
            setArticleData(documents[currentArticleIndex]);
            setCurrentCategories(
                documents[currentArticleIndex].categories.map((category) => {
                    const currentCategory = categoriesIni.find((categoryIni) => categoryIni.name === category);
                    return currentCategory;
                })
            );
            if (currentArticleIndex > 0) {
                setPreviousArticleSlug(documents[currentArticleIndex - 1].slug);
            } else {
                setPreviousArticleSlug(false);
            }

            if (currentArticleIndex < documents.length - 1) {
                setNextArticleSlug(documents[currentArticleIndex + 1].slug);
            } else {
                setNextArticleSlug(false);
            }
        }

        window.scrollTo(0, 0);

        return () => {
            setArticleData(null);
            setNextArticleSlug(null);
            setPreviousArticleSlug(null);
        };
    }, [documents, article]);

    // console.log("documents", documents);
    // console.log("articleData", articleData);
    // console.log("articleData typeof", typeof articleData);
    // console.log("collectionError", collectionError);
    // console.log("currentCategories", currentCategories);
    if (collectionError) {
        return <p>{collectionError}</p>;
    }

    let formattedDate = "";

    if (articleData) {
        formattedDate = dateTimeFormatterFromSeconds(articleData.createdAt, true, "long");
    }

    return (
        <>
            {isLoading ? (
                <Preloader />
            ) : (
                <Fragment>
                    <div className="blog-details-top">
                        <div className="blog-details-img">
                            {/* <img alt="" src={`${articleData?.images[0]}`} /> */}
                            {articleData?.images.length > 1 ? (
                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={true}
                                    loop={articleData?.images.length > 0 ? true : false}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                >
                                    {articleData.images.map((link, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="article-image-holder">
                                                <img src={link} alt={`Slide ${index + 1}`} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : (
                                <div className="article-image-holder">
                                    <img
                                        src={articleData?.images[0] ? articleData.images[0] : ""}
                                        alt={"Article Image"}
                                    />
                                </div>
                            )}
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
                        {articleData?.text.split("\n").map((item, key) => {
                            const paragraph = item.trim();
                            return (
                                <p key={key}>
                                    {paragraph.length > 0 ? paragraph : null}
                                    <br />
                                </p>
                            );
                        })}
                    </div>
                    <div className="tag-share">
                        <div className="dec-tag">
                            <ul>
                                {currentCategories?.map((category) => (
                                    <li key={category.id}>
                                        <Link to={process.env.PUBLIC_URL + `${category.path}`}>
                                            {category.name}
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
                        {previousArticleSlug ? (
                            <Link to={process.env.PUBLIC_URL + `/news/${previousArticleSlug}`}>
                                <i className="fa fa-angle-left" /> prev post
                            </Link>
                        ) : (
                            <Link to={process.env.PUBLIC_URL + "/"}>News</Link>
                        )}
                        {nextArticleSlug ? (
                            <Link to={process.env.PUBLIC_URL + `/news/${nextArticleSlug}`}>
                                next post <i className="fa fa-angle-right" />
                            </Link>
                        ) : (
                            <Link to={process.env.PUBLIC_URL + "/"}>News</Link>
                        )}
                    </div>
                </Fragment>
            )}
        </>
    );
};

export default Article;
