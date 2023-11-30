import React from "react";

const CreateArticleSubTitle = ({ subtitle, handleChange }) => {
    return (
        <div className="col-lg-12 col-md-12">
            <div className="billing-info mb-20">
                <input
                    id="subtitle"
                    type="text"
                    name="subtitle"
                    placeholder="Article Sub-Title"
                    value={subtitle}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default CreateArticleSubTitle;
