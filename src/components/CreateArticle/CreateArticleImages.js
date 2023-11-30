import React from "react";
import { Link } from "react-router-dom";

const CreateArticleImages = ({
    article,
    handleImageDelete,
    handleImageInputChange,
    handleImageSubmit,
    newImageUrl,
}) => {
    return (
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
                                <div className={`img-delete-btn`} onClick={(e) => handleImageDelete(e, image)}>
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                                <Link to={`${image}`} className={`img-show-btn`} target="_blank">
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
                <div className="col-lg-2 col-md-2 add-image-btn" onClick={handleImageSubmit}>
                    Add Image
                </div>
            </div>
        </div>
    );
};

export default CreateArticleImages;
