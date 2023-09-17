import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import NewsBoard from "../news/NewsBoard";
import Article from "../news/sub-components/Article";

const ArticlePage = () => {
    return (
        <>
            <Header />
            <Article />
            <Footer />
        </>
    );
};

export default ArticlePage;
