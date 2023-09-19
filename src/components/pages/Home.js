import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MainNewsBoard from "../news/MainNewsBoard";
import LatestNewsPanel from "../news/LatestNewsPanel";

const Home = () => {
    return (
        <>
            <Header />
            <LatestNewsPanel />
            <MainNewsBoard />
            <Footer />
        </>
    );
};

export default Home;
