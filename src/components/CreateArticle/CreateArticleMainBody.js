import React from "react";

const CreateArticleMainBody = ({ articleText, handleChange }) => {
    return (
        <div className="additional-info-wrap">
            <label>Article Main Body</label>
            <div className="additional-info">
                <textarea
                    id="text"
                    type="text"
                    name="text"
                    placeholder="Article Text"
                    value={articleText}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default CreateArticleMainBody;
