import React from "react";

import { useCollection } from "../../hooks/useCollection.js";
import { useAuthContext } from "../../hooks/useAuthContext";

import PropTypes from "prop-types";
import clsx from "clsx";

import LatestArticlesSingle from "./LatestArticlesSingle";
import SectionTitle from "../common/SectionTitle";
import Preloader from "../preloader/Preloader.js";

const LatestArticlesPanel = ({ spaceTopClass, spaceBottomClass }) => {
    const { user } = useAuthContext();
    const { documents, isLoading } = useCollection("articles", {
        where: ["owner_Id", "==", user.uid],
        orderBy: ["createdAt", "desc"],
    });

    const myLastThreeArticles = documents?.slice(0, 3).sort((a, b) => {
        return b.createdAt.seconds - a.createdAt.seconds;
    });

    // console.log("user", user);
    // console.log("documents", documents);

    return (
        <>
            {isLoading ? (
                <Preloader />
            ) : (
                <div className={clsx("blog-area", spaceTopClass, spaceBottomClass)}>
                    <div className="container">
                        <SectionTitle
                            titleText="Моите последни статии  "
                            positionClass="text-center"
                            spaceClass="mb-55"
                        />
                        <div className="row">
                            {myLastThreeArticles?.map((article) => (
                                <div className="col-lg-4 col-xs-6" key={article.id}>
                                    <LatestArticlesSingle article={article} />
                                </div>
                            ))}
                            {myLastThreeArticles?.length === 0 && (
                                <div className="col-lg-12 col-xs-12">
                                    <p className="text-center pb-20 pt20">Все още не сте публикували никакви статии.</p>
                                </div>
                            )}
                        </div>
                        {/* <div className="pos-rel">
                    <button className="btn btn-primary">&#60;&#60; Prev</button>
                    <button className="btn btn-primary pos-abs r0">Next &#62;&#62;</button>
                </div> */}
                    </div>
                </div>
            )}
        </>
    );
};

LatestArticlesPanel.propTypes = {
    spaceBottomClass: PropTypes.string,
    spaceTopClass: PropTypes.string,
};

export default LatestArticlesPanel;
