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
    const [currentCategory, setCurrentCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const { pathname } = useLocation();

    const { documents, collectionError, isLoading } = useCollection("articles", {
        // where: ["categories", "array-contains", "Авто"],
        orderBy: ["createdAt", "desc"],
    });

    useEffect(() => {
        let news = [];
        if (documents) {
            news = [...documents];
            if (categoriesIni.filter((category) => category.path === pathname).length > 0) {
                const categoryIni = categoriesIni.filter((category) => {
                    return category.path === pathname;
                })[0];
                news = news.filter((article) => article.categories.includes(categoryIni.name));
                setCurrentCategory(categoryIni);
            }
            setArticles(news);
        }
        return () => {
            if (documents) {
                setArticles(null);
            }
        };
    }, [documents, pathname]);

    if (collectionError) {
        return <p>{collectionError}</p>;
    }

    // console.log("articles", articles);

    // console.log("documents", documents);

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

    // Add state for current page and items per page
    const itemsPerPage = 6;

    // Calculate the articles for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = articles?.slice(indexOfFirstItem, indexOfLastItem);

    // Update the page when a pagination button is clicked
    const handlePageClick = (e, pageNumber) => {
        e.preventDefault();
        setCurrentPage(pageNumber);
    };

    // console.log("currentPage", currentPage);
    // console.log("totalItems", articles?.length);
    // console.log("itemsPerPage", itemsPerPage);
    // console.log("articles", articles);

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
                                {/* <div className="col-lg-10"> */}
                                <div className="col-lg-12">
                                    {collectionError && <p>{collectionError}</p>}
                                    {/* <div className="mr-20"> */}
                                    <div className="row">
                                        <NewsList articles={currentItems} />
                                    </div>
                                    {articles && articles?.length > itemsPerPage ? (
                                        <NewsPagination
                                            currentPage={currentPage}
                                            totalItems={articles.length}
                                            itemsPerPage={itemsPerPage}
                                            handlePageClick={handlePageClick}
                                        />
                                    ) : null}
                                    {/* </div> */}
                                </div>
                                {/* <div className="col-lg-2">
                                    <NewsSidebar />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </>
    );
};
export default MainNewsBoard;
