import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { projectNewsFirestore } from "../../../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import { useAuthContext } from "../../../hooks/useAuthContext";
import { useCollection } from "../../../hooks/useCollection";
import { useFirestore } from "../../../hooks/useFirestore";

import Preloader from "../../preloader/Preloader";
import { dateTimeFormatterFromSeconds } from "../../utils/dateFormatter";

// import { articles } from "../../dataStructures/examples/articles_example";

import { categoriesIni } from "../../dateStructures/categoriesIni";

const Article = () => {
    const [articleData, setArticleData] = useState(null);
    const [currentCategories, setCurrentCategories] = useState(null);

    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [deleteError, setDeleteError] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const { user } = useAuthContext();
    const { article } = useParams();
    const { documents, collectionError, isLoading } = useCollection("articles", {
        where: ["slug", "==", article],
        orderBy: ["createdAt", "desc"],
    });

    const { deleteDocument, response } = useFirestore("articles");

    const navigate = useNavigate();

    useEffect(() => {
        if (documents && documents.length > 0) {
            setArticleData(documents[0]);
            setCurrentCategories(
                documents[0].categories.map((category) => {
                    const currentCategory = categoriesIni.find((categoryIni) => categoryIni.name === category);
                    return currentCategory;
                })
            );
            window.scrollTo(0, 0);
        }

        return () => {
            setArticleData(null);
        };
    }, [documents, article]);

    if (collectionError) {
        return <p>{collectionError}</p>;
    }

    let formattedDate = "";

    if (articleData) {
        formattedDate = dateTimeFormatterFromSeconds(articleData.createdAt, true, "long");
    }

    window.scrollTo(0, 0);

    const handleDeleteArticle = (e, bool) => {
        e.preventDefault();
        setDeleteConfirmation(bool);
    };

    const handleDeleteArticleConfirm = async (e) => {
        e.preventDefault();
        setIsDeleting(true);

        await deleteDocument(articleData.id)
            .then(() => {
                setIsDeleting(false);
                navigate("/my-articles");
            })
            .catch((error) => {
                // console.log("error", error);
                setDeleteError(error.message);
                setIsDeleting(false);
            });
    };

    console.log("documents", documents);

    return (
        <>
            {isLoading || isDeleting ? (
                <Preloader />
            ) : (
                <Fragment>
                    {collectionError && <p>{collectionError}</p>}
                    {deleteError && <p>{deleteError}</p>}
                    {(!collectionError || !deleteError) && (
                        <>
                            <div className="blog-details-top">
                                <div className="blog-details-img">
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
                                <div className="edit-delete-article">
                                    {user && user.uid === articleData?.owner_Id && (
                                        <>
                                            {!deleteConfirmation ? (
                                                <div className="row edit-delete-btn-holder">
                                                    <Link
                                                        className="col-lg-2 col-md-3 col-sm-4 col-xs-12 edit"
                                                        to={`/update-article/${articleData.slug}`}
                                                        state={{ article: articleData }}
                                                    >
                                                        update article
                                                    </Link>
                                                    <Link
                                                        className="col-lg-2 col-md-3 col-sm-4 col-xs-12  delete"
                                                        to={`#`}
                                                        onClick={(e) => handleDeleteArticle(e, true)}
                                                    >
                                                        delete article
                                                    </Link>
                                                </div>
                                            ) : (
                                                <div className="row edit-delete-btn-holder">
                                                    <Link
                                                        className="col-lg-2 col-md-3 col-sm-4 col-xs-12  delete"
                                                        to={`#`}
                                                        onClick={(e) => handleDeleteArticleConfirm(e)}
                                                    >
                                                        delete
                                                    </Link>
                                                    <Link
                                                        className="col-lg-2 col-md-3 col-sm-4 col-xs-12  edit"
                                                        to={`#`}
                                                        onClick={(e) => handleDeleteArticle(e, false)}
                                                    >
                                                        cancel
                                                    </Link>
                                                </div>
                                            )}
                                        </>
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
                                            <img
                                                alt=""
                                                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-details.jpg"}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="dec-img mb-50">
                                            <img
                                                alt=""
                                                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-details-2.jpg"}
                                            />
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
                                    </ul>
                                </div>
                            </div>
                        </>
                    )}
                </Fragment>
            )}
        </>
    );
};

export default Article;
