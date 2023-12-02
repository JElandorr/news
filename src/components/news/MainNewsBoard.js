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

import { categoriesIni } from "../dateStructures/categoriesIni";

const MainNewsBoard = () => {
    const [articles, setArticles] = useState(null);
    const { pathname } = useLocation();
    const { documents, collectionError, isLoading } = useCollection("articles");
    const { user } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        let news = [];
        if (documents) {
            news = [...documents];
            console.log("news1", news);
            news.sort((a, b) => b.createdAt - a.createdAt);
            console.log("news2", news);
            if (
                categoriesIni.filter((category) => category.path === pathname) &&
                categoriesIni.filter((category) => category.path === pathname).length > 0
            ) {
                const categoryIni = categoriesIni.filter((category) => {
                    console.log("category", category);
                    console.log("category.path", category.path);
                    console.log("pathname", pathname);
                    return category.path === pathname})[0];
                console.log("categoryIni", categoryIni);
                news.filter((article) => article.categories.includes(categoryIni.name));
                console.log("news3", news);
            }
            setArticles(news);
        }
        return () => {
            setArticles(null);
        };
    }, [documents, pathname]);

    useEffect(() => {
        if (documents) {
            let filteredArticles = [];
            if (user) {
                if (pathname === "/my-articles") {
                    filteredArticles = documents.filter((article) => article.owner_Id === user.uid);
                } else {
                    filteredArticles = documents;
                }
            } else {
                if (pathname === "/my-articles") {
                    navigate("/login");
                } else {
                    filteredArticles = documents;
                }
            }
            setArticles(filteredArticles);
        }
        return () => {
            setArticles(null);
        };
    }, [user, pathname, documents]);

    if (collectionError) {
        return <p>{collectionError}</p>;
    }

    console.log("pathname", pathname);
    console.log("articles", articles);

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
                    <div className="blog-area pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10">
                                    <div className="mr-20">
                                        <div className="row">
                                            <NewsList articles={articles} />
                                        </div>
                                        {articles && articles.length > 0 ? <NewsPagination /> : null}
                                    </div>
                                </div>
                                <div className="col-lg-2">
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
