import React, { Fragment, useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SEO from "../seo";
import BreadcrumbWrap from "../breadcrumb/BreadcrumbWrap";

import { articleIni } from "../dateStructures/articleIni";
import { categoriesIni } from "../dateStructures/categoriesIni";

// import AuthContext from "../contexts/AuthContext";

import { create, getAll } from "../services/articlesUtilService.js";

import { addArticle, getArticles } from "../dateStructures/articlesExampleList.js";

const CreateArticle = () => {
    const [article, setArticle] = useState(articleIni);
    const [categories, setCategories] = useState(categoriesIni);
    // const [selectedCategories, setSelectedCategories] = useState([]);
    const [newImageUrl, setNewImageUrl] = useState("");

    const [warnings, setWarnings] = useState({}); // ["warning1", "warning2"
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

    const handleImageChange = (e) => {
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
        const createdArticle = await create(article);
        console.log(createdArticle);
        addArticle(createdArticle);
        setArticle({ ...articleIni });
        // navigate("/");
    };

    // let articles;

    // const getArticles = async () => {
    //     articles = await getAll();
    //     // console.log(articles);
    //     return articles;
    // };

    // getArticles();

    // console.log(articles);

    console.log(JSON.stringify(getArticles()));
    console.log(getArticles());
    console.log(article);

    return (
        <Fragment>
            <SEO title="ProjectNews" titleTemplate="Create Article" description="Create Your Insiring Stories Here." />
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
                                    <div className="col-lg-12 col-md-12">
                                        <div className="billing-info mb-20">
                                            <input
                                                id="title"
                                                type="text"
                                                name="title"
                                                placeholder="Article Title"
                                                value={article.title}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="billing-info mb-20">
                                            <input
                                                id="subtitle"
                                                type="text"
                                                name="subtitle"
                                                placeholder="Article Sub-Title"
                                                value={article.subtitle}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="additional-info-wrap">
                                        <label>Article Main Body</label>
                                        <div className="additional-info">
                                            <textarea
                                                id="text"
                                                type="text"
                                                name="text"
                                                placeholder="Article Text"
                                                value={article.text}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* <div className="billing-info mb-20">
                                            <label>Tags</label>
                                            {article?.tags && (
                                                <div className="row">
                                                    {article?.tags?.map((tag, key) => {
                                                        const tagExists = article.tags.includes(tag);
                                                        console.log(tag);
                                                        console.log(key);
                                                        return (
                                                            <div
                                                                className={`col-lg-3 col-md-4 col-sm-6 col-xxs-12 category-holder`}
                                                                key={key}
                                                                onClick={() => toggleSelectCategory(tag)}
                                                            >
                                                                {tagExists ? (
                                                                    <>
                                                                        <div>
                                                                            <i class="fa-regular fa-rectangle-xmark"></i>
                                                                        </div>
                                                                    </>
                                                                ) : (
                                                                    ""
                                                                )}
                                                                <div className={`col-8`}>{tag}</div>
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
                                                        placeholder="Article Tags"
                                                        value={newImageUrl}
                                                        onChange={handleImageChange}
                                                    />
                                                </div>
                                                <div
                                                    className="col-lg-2 col-md-2 add-image-btn"
                                                    onClick={handleImageSubmit}
                                                >
                                                    Add Image
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="billing-info mb-20">
                                            <label>Article Categories</label>
                                            {categories && (
                                                <div className="row">
                                                    {categories?.map((category, key) => {
                                                        const isSelected = article.categories.includes(category);
                                                        // console.log(category);
                                                        return (
                                                            <div
                                                                className={`col-lg-3 col-md-4 col-sm-6 col-xxs-12 category-holder ${
                                                                    isSelected ? "selected" : ""
                                                                }`}
                                                                key={key}
                                                                onClick={() => toggleSelectCategory(category)}
                                                            >
                                                                {isSelected ? (
                                                                    <>
                                                                        <div>
                                                                            <i className="fa-regular fa-square-check"></i>
                                                                        </div>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <div>
                                                                            <i className="fa-regular fa-square"></i>
                                                                        </div>
                                                                    </>
                                                                )}
                                                                <div className={`col-8`}>{category}</div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
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
                                                        onChange={handleImageChange}
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
                                                    onChange={handleImageChange}
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
