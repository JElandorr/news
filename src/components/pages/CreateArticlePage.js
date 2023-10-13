import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import CreateArticle from "../articles/CreateArticle";

const CreateArticlePage = () => {
    return (
        <>
            <Header />
            <CreateArticle />
            <Footer />
        </>
    );
};

export default CreateArticlePage;
