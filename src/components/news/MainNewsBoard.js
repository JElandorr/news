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
    const [queryParams, setQueryParams] = useState(null);
    const [articles, setArticles] = useState(null);
    const [currentCategory, setCurrentCategory] = useState(null);
    const { pathname } = useLocation();

    // useEffect(() => {
    //     if (pathname !== "/") {
    //         const category = categoriesIni.filter((category) => {
    //             if (category.path === pathname) {
    //                 console.log("category", category);
    //                 return category;
    //             }
    //         });
    //         setQueryParams(category ? ["categories", "array-contains", category[0].name] : null);
    //     }
    // }, [pathname]);

    const { documents, collectionError, isLoading } = useCollection("articles");

    useEffect(() => {
        let news = [];
        if (documents) {
            news = [...documents];
            // console.log("news1", news);
            news = sortArticlesArrayByDate(news);
            // console.log("news2", news);
            if (categoriesIni.filter((category) => category.path === pathname).length > 0) {
                const categoryIni = categoriesIni.filter((category) => {
                    return category.path === pathname;
                })[0];
                console.log("categoryIni", categoryIni);
                console.log("categoryIni", typeof categoryIni.name);
                news = news.filter((article) => article.categories.includes(categoryIni.name));
                setCurrentCategory(categoryIni);
            }
            setArticles(news);
        }
        return () => {
            setArticles(null);
        };
    }, [documents, pathname]);

    if (collectionError) {
        return <p>{collectionError}</p>;
    }

    function sortArticlesArrayByDate(array) {
        return array.sort((a, b) => {
            return b.createdAt.seconds - a.createdAt.seconds;
        });
    }

    // console.log("pathname", pathname);
    console.log("articles", articles);

    console.log("documents", documents);
    console.log("queryParams", queryParams);

    let breadcrumbPages = [];

    if (pathname === "/") {
        breadcrumbPages = [
            { label: "NEWS", path: process.env.PUBLIC_URL + "/" },
            { label: "ВСИЧКИ", path: process.env.PUBLIC_URL + "/my-articles" },
        ];
    } else if (pathname === "/my-articles") {
        breadcrumbPages = [
            { label: "NEWS", path: process.env.PUBLIC_URL + "/" },
            { label: "My Articles", path: process.env.PUBLIC_URL + "/my-articles" },
        ];
    } else {
        breadcrumbPages = [
            { label: "NEWS", path: process.env.PUBLIC_URL + "/" },
            { label: `${currentCategory?.name}`, path: process.env.PUBLIC_URL + currentCategory?.path },
        ];
    }

    return (
        <>
            {isLoading ? (
                <Preloader />
            ) : (
                <Fragment>
                    <SEO
                        title="ProjectNews"
                        titleTemplate={currentCategory ? currentCategory.name : "NewsBoard"}
                        description="NewsBoard - ProjectNews"
                    />
                    <BreadcrumbWrap pages={breadcrumbPages} />
                    <div className="blog-area pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10">
                                    {/* <div className="mr-20"> */}
                                    <div className="row">
                                        <NewsList articles={articles} />
                                    </div>
                                    {articles && articles.length > 12 ? <NewsPagination /> : null}
                                    {/* </div> */}
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
