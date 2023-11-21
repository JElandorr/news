import { Fragment } from "react";
import { useLocation } from "react-router-dom";

import { useCollection } from "../../hooks/useCollection";

import SEO from "../seo";
import BreadcrumbWrap from "../breadcrumb/BreadcrumbWrap";
import NewsSidebar from "./sub-components/NewsSidebar";
import NewsPagination from "./sub-components/NewsPagination";
import NewsList from "./sub-components/NewsList";
import LatestNewsPanel from "./LatestNewsPanel";
import Preloader from "../preloader/Preloader";

const MainNewsBoard = () => {
    let { pathname } = useLocation();
    const { documents, error, isLoading } = useCollection("articles");

    if (error) {
        return <p>{error}</p>;
    }

    // let latestNewsArticles = articles.sort((a, b) => b.createdAt - a.createdAt).slice(0, 3);
    let latestNewsArticles = documents;
    //the rest of the articles
    // let restOfTheArticles = articles.sort((a, b) => b.createdAt - a.createdAt).slice(3);

    console.log("documents", documents);

    return (
        <>
            {isLoading ? (
                <Preloader />
            ) : (
                <Fragment>
                    <SEO title="ProjectNews" titleTemplate="NewsBoard" description="NewsBoard - ProjectNews" />
                    <BreadcrumbWrap
                        pages={[
                            { label: "Home", path: process.env.PUBLIC_URL + "/" },
                            { label: "NewsBoard", path: process.env.PUBLIC_URL + "/news" },
                        ]}
                    />
                    {/* <LatestNewsPanel articles={latestNewsArticles} /> */}
                    <div className="blog-area pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10">
                                    <div className="mr-20">
                                        <div className="row">
                                            {/* news posts */}
                                            <NewsList articles={documents} />
                                        </div>

                                        {/* news pagination */}
                                        <NewsPagination />
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    {/* news sidebar */}
                                    <NewsSidebar />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </>
    );
};

export default MainNewsBoard;
