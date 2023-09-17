import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ArticleMini from "./ArticleMini";

import { articles } from "../../articles";

const NewsList = () => {
    return (
        <>
            {articles.map((article) => (
                <ArticleMini key={article.id} article={article} />
            ))}
        </>
    );
};

export default NewsList;
