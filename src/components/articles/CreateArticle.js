import React, { Fragment, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SEO from "../seo";
import BreadcrumbWrap from "../breadcrumb/BreadcrumbWrap";

import { articleIni } from "../dateStructures/articleIni";
import { categoriesIni } from "../dateStructures/categoriesIni";

const CreateArticle = () => {
    const [article, setArticle] = useState(articleIni);
    const [categories, setCategories] = useState(categoriesIni);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [newImageUrl, setNewImageUrl] = useState("");
    const navigate = useNavigate();

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
        console.log(newImageUrl);
        setArticle({ ...article, images: [...article.images, newImageUrl] });
        setNewImageUrl("");
    };

    const handleImageDelete = (e) => {
        e.preventDefault();
        console.log(newImageUrl);
    };

    const toggleSelectCategory = (category) => {
        const isCategorySelected = selectedCategories.includes(category);
        if (isCategorySelected) {
            setSelectedCategories(selectedCategories.filter((selectedCategory) => selectedCategory !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    console.log(selectedCategories);

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
                                                id="sub-title"
                                                type="text"
                                                name="sub-title"
                                                placeholder="Article Sub-Title"
                                                value={article.subtitle}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="additional-info-wrap">
                                        <h4>Article Main Body</h4>
                                        <div className="additional-info">
                                            <textarea
                                                id="text"
                                                type="text"
                                                name="text"
                                                placeholder="Article Text"
                                                value={article.subtitle}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="billing-info mb-20">
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
                                        </div>
                                        <div className="billing-info mb-20">
                                            <label>Article Categories</label>
                                            {categories && (
                                                <div className="row">
                                                    {categories?.map((category, key) => {
                                                        const isSelected = selectedCategories.includes(category);
                                                        console.log(category);
                                                        return (
                                                            <div
                                                                className={`col-lg-3 col-md-4 col-sm-6 col-xxs-12 category-holder`}
                                                                style={
                                                                    isSelected
                                                                        ? {
                                                                              backgroundColor: "#b3b3b3",
                                                                              userSelect: "none",
                                                                          }
                                                                        : {
                                                                              userSelect: "none",
                                                                          }
                                                                }
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
                                                        console.log(key);
                                                        return (
                                                            <div
                                                                className={`col-lg-3 col-md-4 col-sm-6 col-xxs-12 image-holder`}
                                                                key={key}
                                                                style={{ backgroundImage: `url(${image})` }}
                                                            >
                                                                {/* <img src={image} alt="article" /> */}
                                                                <div
                                                                    className={`img-delete-btn`}
                                                                    onClick={handleImageDelete}
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
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-20">
                                            <label>Town / City</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>State / County</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>Postcode / ZIP</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>Phone</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>Email Address</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>

                                <div className="additional-info-wrap">
                                    <h4>Additional information</h4>
                                    <div className="additional-info">
                                        <label>Order notes</label>
                                        <textarea
                                            placeholder="Notes about your order, e.g. special notes for delivery. "
                                            name="message"
                                            defaultValue={""}
                                        />
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
