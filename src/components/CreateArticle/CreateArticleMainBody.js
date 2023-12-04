import React from "react";

const CreateArticleMainBody = ({ articleText, handleChange, articleWarnings }) => {
    return (
        <div className="additional-info-wrap">
            <label>Article Main Body</label>
            <div className={`additional-info ${articleWarnings?.text && "danger"}`}>
                <textarea
                    id="text"
                    // className={`${articleWarnings?.text && "danger"}`}
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
