import React, { useContext } from "react";

import { useCollection } from "../../hooks/useCollection.js";
import { useAuthContext } from "../../hooks/useAuthContext";

import PropTypes from "prop-types";
import clsx from "clsx";

import LatestArticlesSingle from "./LatestArticlesSingle";
import SectionTitle from "../common/SectionTitle";

import { useFirestore } from "../../hooks/useFirestore.js";

const LatestArticlesPanel = ({ spaceTopClass, spaceBottomClass }) => {
    const { user } = useAuthContext();
    const { documents, collectionError, isLoading } = useCollection("articles");

    const myArticles = documents
        ?.sort((a, b) => b.createdAt - a.createdAt)
        .filter((article) => article.owner_Id === user?.uid);

    const myLastThreeArticles = myArticles?.slice(0, 3);

    // console.log("user", user);
    console.log("myArticles", myArticles);
    // console.log("documents", documents);

    return (
        <div className={clsx("blog-area", spaceTopClass, spaceBottomClass)}>
            <div className="container">
                <SectionTitle titleText="My Latest Articles" positionClass="text-center" spaceClass="mb-55" />
                <div className="row">
                    {myLastThreeArticles?.map((article) => (
                        <div className="col-lg-4 col-xs-6" key={article.id}>
                            <LatestArticlesSingle article={article} />
                        </div>
                    ))}
                    {myArticles?.length === 0 && (
                        <div className="col-lg-12 col-xs-12">
                            <p className="text-center pb-20 pt20">You have no articles yet.</p>
                        </div>
                    )}
                </div>
                {/* <div className="pos-rel">
                    <button className="btn btn-primary">&#60;&#60; Prev</button>
                    <button className="btn btn-primary pos-abs r0">Next &#62;&#62;</button>
                </div> */}
            </div>
        </div>
    );
};

LatestArticlesPanel.propTypes = {
    spaceBottomClass: PropTypes.string,
    spaceTopClass: PropTypes.string,
};

export default LatestArticlesPanel;
