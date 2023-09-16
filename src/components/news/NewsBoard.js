import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../seo";
import BreadcrumbWrap from "../breadcrumb/BreadcrumbWrap";
import NewsSidebar from "./sub-components/NewsSidebar";
import NewsPagination from "./sub-components/NewsPagination";
import SingleNews from "./sub-components/SingleNews";

const NewsBoard = () => {
    let { pathname } = useLocation();

    return (
        <Fragment>
            <SEO titleTemplate="Blog" description="Blog of flone react minimalist eCommerce template." />
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <BreadcrumbWrap
                    pages={[
                        { label: "Home", path: process.env.PUBLIC_URL + "/" },
                        { label: "Blog", path: process.env.PUBLIC_URL + pathname },
                    ]}
                />
                <div className="blog-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="mr-20">
                                    <div className="row">
                                        {/* blog posts */}
                                        <SingleNews />
                                    </div>

                                    {/* blog pagination */}
                                    <NewsPagination />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                {/* blog sidebar */}
                                <NewsSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default NewsBoard;
