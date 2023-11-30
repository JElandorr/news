import React, { Fragment, useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useFirestore } from "../../hooks/useFirestore.js";

import { useAuthContext } from "../../hooks/useAuthContext.js";

import SEO from "../seo.js";
import BreadcrumbWrap from "../breadcrumb/BreadcrumbWrap.js";

import { articleIni } from "../dateStructures/articleIni.js";
import { categoriesIni } from "../dateStructures/categoriesIni.js";

import { transliterate } from "transliteration";

// import { create, getAll } from "../services/articlesUtilService.js";

import { addArticle, getArticles } from "../dateStructures/articlesExampleList.js";

import { createSlug } from "../utils/createSlug.js";

import LatestArticlesPanel from "./LatestArticlesPanel.js";
import CreateArticleTitle from "./CreateArticleTitle.js";
import CreateArticleSubTitle from "./CreateArticleSubTitle.js";
import CreateArticleMainBody from "./CreateArticleMainBody.js";
import CreateArticleCategories from "./CreateArticleCategories.js";

const CreateArticle = () => {
    const [article, setArticle] = useState(articleIni);
    const [categories, setCategories] = useState(categoriesIni);
    // const [selectedCategories, setSelectedCategories] = useState([]);
    const [newImageUrl, setNewImageUrl] = useState("");

    // const [warnings, setWarnings] = useState({}); // ["warning1", "warning2"

    const { addDocument, response } = useFirestore("articles");
    const { user } = useAuthContext();

    // const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!user) {
    //         navigate("/login");
    //     }
    // }, [user]);

    let { pathname } = useLocation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setArticle({ ...article, [name]: value });
    };

    const handleImageInputChange = (e) => {
        const image = e.target.value;
        setNewImageUrl(image);
    };

    const handleImageSubmit = (e) => {
        e.preventDefault();
        // console.log(newImageUrl);
        if (newImageUrl === "") return;
        setArticle({ ...article, images: [...article.images, newImageUrl] });
        setNewImageUrl("");
    };

    const handleImageDelete = (e, image) => {
        e.preventDefault();
        console.log(image);
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
    };

    const createArticle = async () => {
        const addedArticle = await addDocument({ ...article, owner_Id: user.uid, slug: createSlug(article.title) });
        setArticle(articleIni);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // console.log(article);
    // console.log(user);
    // console.log(response);
    // console.log("newImageUrl", newImageUrl);

    return (
        <Fragment>
            <SEO title="ProjectNews" titleTemplate="Create Article" description="Create Your Insiring Stories Here." />
            <LatestArticlesPanel />
            <BreadcrumbWrap
                pages={[
                    { label: "Home", path: process.env.PUBLIC_URL + "/" },
                    { label: "Create Article", path: process.env.PUBLIC_URL + pathname },
                ]}
            />
            <div className="checkout-area pt-95 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="billing-info-wrap">
                                <h3>Create Article Form</h3>
                                <div className="row">
                                    <CreateArticleTitle title={article.title} handleChange={handleChange} />
                                    <CreateArticleSubTitle subtitle={article.subtitle} handleChange={handleChange} />
                                    <CreateArticleMainBody articleText={article.text} handleChange={handleChange} />
                                    <div className="col-12">
                                        <CreateArticleCategories
                                            articleCategories={article.categories}
                                            categories={categories}
                                            toggleSelectCategory={toggleSelectCategory}
                                        />
                                        <div className="billing-info mb-20">
                                            <label>Article Pictures</label>
                                            {article?.images && (
                                                <div className="row">
                                                    {article?.images?.map((image, key) => {
                                                        console.log(image);
                                                        // console.log(key);
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
                                                <div className="col-lg-10 col-md-10">
                                                    <input
                                                        className="add-image-input"
                                                        id="images"
                                                        type="text"
                                                        name="images"
                                                        placeholder="Article Images"
                                                        value={newImageUrl}
                                                        onChange={handleImageInputChange}
                                                    />
                                                </div>
                                                <div
                                                    className="col-lg-2 col-md-2 add-image-btn"
                                                    onClick={handleImageSubmit}
                                                >
                                                    Add Image
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
                                            <div className="col-lg-2 col-md-2 add-article-btn" onClick={createArticle}>
                                                Add Article
                                            </div>
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
