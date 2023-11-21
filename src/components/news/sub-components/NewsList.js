import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ArticleMini from "./ArticleMini";

// import { articles } from "../../dataStructures/examples/articles_example";

const NewsList = ({ articles }) => {
    return (
        <>
            {articles?.map((article) => (
                <ArticleMini key={article.id} article={article} />
            ))}
        </>
    );
};

export default NewsList;
