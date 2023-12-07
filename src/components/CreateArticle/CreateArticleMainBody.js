import React from "react";

const CreateArticleMainBody = ({ articleText, handleChange, articleWarnings }) => {
    return (
        <div className="additional-info-wrap">
            <label>Основен текст на статията</label>
            <div className={`additional-info ${articleWarnings?.text && "danger"}`}>
                <textarea
                    id="text"
                    // className={`${articleWarnings?.text && "danger"}`}
                    type="text"
                    name="text"
                    placeholder="Текст на статията"
                    value={articleText}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default CreateArticleMainBody;
