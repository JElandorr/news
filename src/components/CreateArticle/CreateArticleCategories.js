import React from "react";

const CreateArticleCategories = ({ categories, articleCategories, toggleSelectCategory, articleWarnings }) => {
    return (
        <div className="billing-info mb-20">
            <label>Article Categories</label>
            {categories && (
                <div className={`row ${articleWarnings?.categories && "danger"}`}>
                    {categories?.map((category, key) => {
                        const isSelected = articleCategories.includes(category);
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
    );
};

export default CreateArticleCategories;
