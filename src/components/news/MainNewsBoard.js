import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";

import SEO from "../seo";
import BreadcrumbWrap from "../breadcrumb/BreadcrumbWrap";
import NewsSidebar from "./sub-components/NewsSidebar";
import NewsPagination from "./sub-components/NewsPagination";
import NewsList from "./sub-components/NewsList";
import LatestNewsPanel from "./LatestNewsPanel";
import Preloader from "../preloader/Preloader";

const MainNewsBoard = () => {
    const [articles, setArticles] = useState(null);
    let { pathname } = useLocation();
    const { documents, collectionError, isLoading } = useCollection("articles");
    const { user } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (documents) {
            setArticles(documents);
        }
    }, [documents]);

    useEffect(() => {
        if (documents) {
            if (user) {
                if (pathname === "/my-articles") {
                    setArticles(documents.filter((article) => article.owner_Id === user.uid));
                }
                if (pathname === "/" || pathname === "/news") {
                    setArticles(documents);
                }
            } else {
                if (pathname === "/my-articles") {
                    navigate("/login");
                }
                if (pathname === "/" || pathname === "/news") {
                    setArticles(documents);
                }
            }
        }
    }, [user, pathname, documents]);

    if (collectionError) {
        return <p>{collectionError}</p>;
    }

    // let latestNewsArticles = articles.sort((a, b) => b.createdAt - a.createdAt).slice(0, 3);
    let latestNewsArticles = documents;
    //the rest of the articles
    // let restOfTheArticles = articles.sort((a, b) => b.createdAt - a.createdAt).slice(3);

    // console.log("user", user.uid);
    // console.log("articles", articles.owner_Id);

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
                                            <NewsList articles={articles} />
                                        </div>

                                        {/* news pagination */}
                                        {articles && articles.length > 0 ? <NewsPagination /> : null}
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
