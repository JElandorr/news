import React from "react";

const CreateArticleTitle = ({ title, handleChange, articleWarnings }) => {
    return (
        <div className="col-lg-12 col-md-12">
            <div className={`billing-info mb-20`}>
                <input
                    id="title"
                    className={`${articleWarnings?.title && "danger"}`}
                    type="text"
                    name="title"
                    placeholder="Заглавие на статията"
                    value={title}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default CreateArticleTitle;
