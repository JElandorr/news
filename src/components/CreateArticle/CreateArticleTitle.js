import React from "react";

const CreateArticleTitle = ({ title, handleChange }) => {
    return (
        <div className="col-lg-12 col-md-12">
            <div className="billing-info mb-20">
                <input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Article Title"
                    value={title}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default CreateArticleTitle;
