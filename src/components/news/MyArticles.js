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

const MyArticles = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [articles, setArticles] = useState(null);
    const { pathname } = useLocation();
    const { user } = useAuthContext();
    const { documents, collectionError, isLoading } = useCollection("articles", {
        where: ["owner_Id", "==", user.uid],
        orderBy: ["createdAt", "desc"],
    });

    useEffect(() => {
        let news = [];
        if (documents) {
            news = [...documents];
            if (
                categoriesIni.filter((category) => category.path === pathname) &&
                categoriesIni.filter((category) => category.path === pathname).length > 0
            ) {
                const categoryIni = categoriesIni.filter((category) => {
                    return category.path === pathname;
                })[0];
                news.filter((article) => article.categories.includes(categoryIni.name));
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

    return (
        <>
            {isLoading ? (
                <Preloader />
            ) : (
                <Fragment>
                    <SEO title="ProjectNews" titleTemplate="NewsBoard" description="NewsBoard - ProjectNews" />
                    <BreadcrumbWrap
                        pages={[
                            { label: "News", path: process.env.PUBLIC_URL + "/" },
                            { label: `${user.displayName}'s Articles`, path: process.env.PUBLIC_URL + "/news" },
                        ]}
                    />
                    <div className="blog-area pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="mr-20">
                                        <div className="row">
                                            <NewsList articles={articles} />
                                        </div>
                                        {articles && articles?.length > itemsPerPage ? (
                                            <NewsPagination
                                                currentPage={currentPage}
                                                totalItems={articles.length}
                                                itemsPerPage={itemsPerPage}
                                                handlePageClick={handlePageClick}
                                            />
                                        ) : null}
                                    </div>
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
export default MyArticles;
