import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ArticleMini from "./ArticleMini";

// import { articles } from "../../dataStructures/examples/articles_example";

const NewsList = ({ articles }) => {

    return (
        <>
            {articles === null ||
                (articles.length <= 0 && (
                    <p className="text-center" style={{ fontSize: "24px" }}>
                        В този раздел още няма статии!
                    </p>
                ))}
            {articles?.map((article) => (
                <ArticleMini key={article.id} article={article} />
            ))}
        </>
    );
};

export default NewsList;
