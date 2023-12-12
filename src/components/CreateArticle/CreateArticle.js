import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { projectNewsFirestore } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

import { useFirestore } from "../../hooks/useFirestore.js";

import { useAuthContext } from "../../hooks/useAuthContext.js";

import SEO from "../seo.js";
import BreadcrumbWrap from "../breadcrumb/BreadcrumbWrap.js";

import { articleIni } from "../dateStructures/articleIni.js";
import { categoriesIni } from "../dateStructures/categoriesIni.js";

// import { transliterate } from "transliteration";

// import { create, getAll } from "../services/articlesUtilService.js";

// import { addArticle, getArticles } from "../dateStructures/articlesExampleList.js";

import { createSlug } from "../utils/createSlug.js";

import LatestArticlesPanel from "./LatestArticlesPanel.js";
import CreateArticleTitle from "./CreateArticleTitle.js";
import CreateArticleSubTitle from "./CreateArticleSubTitle.js";
import CreateArticleMainBody from "./CreateArticleMainBody.js";
import CreateArticleCategories from "./CreateArticleCategories.js";

const CreateArticle = () => {
    const [article, setArticle] = useState(articleIni);
    const [articleWarnings, setArticleWarnings] = useState({});
    const [categories, setCategories] = useState(categoriesIni.map((category) => category.name));
    const [newImageUrl, setNewImageUrl] = useState("");

    const [updateMode, setUpdateMode] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state) {
            setArticle(location.state.article);
            setCategories(location.state.categories);
            setUpdateMode(true);
        }
    }, [location.state]);

    const { user } = useAuthContext();
    const { addDocument, updateDocument, response } = useFirestore("articles");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setArticle({ ...article, [name]: value });
        setArticleWarnings({ ...articleWarnings, [name]: false });
    };

    const handleImageInputChange = (e) => {
        const image = e.target.value;
        setNewImageUrl(image);
        setArticleWarnings({ ...articleWarnings, image: false });
    };

    const handleImageSubmit = (e) => {
        e.preventDefault();
        // console.log(newImageUrl);
        if (newImageUrl === "") return;
        setArticle({ ...article, images: [...article.images, newImageUrl] });
        setNewImageUrl("");
        setArticleWarnings({ ...articleWarnings, images: false });
    };

    const handleImageDelete = (e, image) => {
        e.preventDefault();
        // console.log(image);
        setArticle({ ...article, images: article.images.filter((img) => img !== image) });
        setNewImageUrl("");
    };

    const toggleSelectCategory = (category) => {
        const isCategorySelected = article.categories.includes(category);
        if (isCategorySelected) {
            // setSelectedCategories(selectedCategories.filter((selectedCategory) => selectedCategory !== category));
            setArticle({
                ...article,
                categories: article.categories.filter((selectedCategory) => selectedCategory !== category),
            });
        } else {
            // setSelectedCategories([...selectedCategories, category]);
            setArticle({ ...article, categories: [...article.categories, category] });
        }
        setArticleWarnings({ ...articleWarnings, categories: false });
    };

    const createArticle = async () => {
        const validatedArticle = validateArticle(article);
        const allValuesFalse = Object.values(validatedArticle).every((value) => value === false);

        if (!allValuesFalse) {
            setArticleWarnings(validatedArticle);
            return;
        } else {
            const addedArticle = await addDocument({ ...article, owner_Id: user.uid, slug: createSlug(article.title) });
            setArticle(articleIni);
            window.scrollTo({ top: 0, behavior: "smooth" });
            setArticleWarnings({});
        }
    };

    const updateArticle = async () => {
        const validatedArticle = validateArticle(article);
        const allValuesFalse = Object.values(validatedArticle).every((value) => value === false);

        if (!allValuesFalse) {
            setArticleWarnings(validatedArticle);
            return;
        } else {
            // const ref = doc(projectNewsFirestore, "articles", article.id);
            // await updateDoc(ref, { ...article, slug: createSlug(article.title) });
            
            await updateDocument(article.id, { ...article, slug: createSlug(article.title) });
            
            setArticle(articleIni);
            window.scrollTo({ top: 0, behavior: "smooth" });
            setArticleWarnings({});
            setUpdateMode(false);
            navigate("/my-articles");
        }
    };

    function validateArticle(article) {
        const articleWarnings = {};
        if (article.title === "") {
            articleWarnings.title = true;
        } else {
            articleWarnings.title = false;
        }

        if (article.subtitle === "") {
            articleWarnings.subtitle = true;
        } else {
            articleWarnings.subtitle = false;
        }

        if (article.text === "") {
            articleWarnings.text = true;
        } else {
            articleWarnings.text = false;
        }

        if (article.categories.length === 0) {
            articleWarnings.categories = true;
        } else {
            articleWarnings.categories = false;
        }
        if (article.images.length === 0) {
            articleWarnings.images = true;
        } else {
            articleWarnings.images = false;
        }

        return articleWarnings;
    }

    // console.log(location);
    // console.log(user);
    // console.log(response);
    // console.log("newImageUrl", newImageUrl);
    console.log("article", article);

    return (
        <Fragment>
            <SEO title="ProjectNews" titleTemplate="Create Article" description="Create Your Inspiring Stories Here." />
            <LatestArticlesPanel />
            <BreadcrumbWrap
                pages={[
                    { label: "News", path: process.env.PUBLIC_URL + "/" },
                    { label: "Create Article", path: process.env.PUBLIC_URL + location.pathname },
                ]}
            />
            <div className="checkout-area pt-95 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="billing-info-wrap">
                                <h3>Създай нова статия</h3>
                                <div className="row">
                                    <CreateArticleTitle
                                        title={article.title}
                                        handleChange={handleChange}
                                        articleWarnings={articleWarnings}
                                    />
                                    <CreateArticleSubTitle
                                        subtitle={article.subtitle}
                                        handleChange={handleChange}
                                        articleWarnings={articleWarnings}
                                    />
                                    <CreateArticleMainBody
                                        articleText={article.text}
                                        handleChange={handleChange}
                                        articleWarnings={articleWarnings}
                                    />
                                    <div className="col-12">
                                        <CreateArticleCategories
                                            articleCategories={article.categories}
                                            categories={categories}
                                            toggleSelectCategory={toggleSelectCategory}
                                            articleWarnings={articleWarnings}
                                        />
                                        <div className="billing-info mb-20">
                                            <label>
                                                Изображения към статията &nbsp;&nbsp;
                                                {articleWarnings.images && (
                                                    <span className="warning">{articleWarnings.images}</span>
                                                )}
                                            </label>
                                            {article?.images && (
                                                <div className="row">
                                                    {article?.images?.map((image, key) => {
                                                        return (
                                                            <div
                                                                className={`col-lg-3 col-md-4 col-sm-6 col-xxs-12 image-holder`}
                                                                key={key}
                                                                style={{ backgroundImage: `url(${image})` }}
                                                            >
                                                                {/* <img src={image} alt="article" /> */}
                                                                <div
                                                                    className={`img-delete-btn`}
                                                                    onClick={(e) => handleImageDelete(e, image)}
                                                                >
                                                                    <i className="fa-solid fa-xmark"></i>
                                                                </div>
                                                                <Link
                                                                    to={`${image}`}
                                                                    className={`img-show-btn`}
                                                                    target="_blank"
                                                                >
                                                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                                                </Link>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                            <div className="row add-image">
                                                <div
                                                    className={`col-lg-10 col-md-10 ${
                                                        articleWarnings?.images && "danger"
                                                    }`}
                                                >
                                                    <input
                                                        className={`add-image-input`}
                                                        id="images"
                                                        type="text"
                                                        name="images"
                                                        placeholder="Изображение - адрес"
                                                        value={newImageUrl}
                                                        onChange={handleImageInputChange}
                                                    />
                                                </div>
                                                <div
                                                    className="col-lg-2 col-md-2 add-image-btn"
                                                    onClick={handleImageSubmit}
                                                >
                                                    Добави изображение
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row billing-info">
                                            {/* <div className="col-lg-10 col-md-10">
                                                <input
                                                    className="add-image-input"
                                                    id="images"
                                                    type="text"
                                                    name="images"
                                                    placeholder="Article Images"
                                                    value={newImageUrl}
                                                    onChange={handleImageInputChange}
                                                />
                                            </div> */}
                                            {updateMode ? (
                                                <div
                                                    className="col-lg-2 col-md-2 add-article-btn"
                                                    onClick={updateArticle}
                                                >
                                                    Обнови статия
                                                </div>
                                            ) : (
                                                <div
                                                    className="col-lg-2 col-md-2 add-article-btn"
                                                    onClick={createArticle}
                                                >
                                                    Създай статия
                                                </div>
                                            )}
                                            {/* <div className="col-lg-2 col-md-2 add-article-btn" onClick={createArticle}>
                                                Създай статия
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CreateArticle;
