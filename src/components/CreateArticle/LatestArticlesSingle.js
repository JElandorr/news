import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { dateTimeFormatterFromSeconds } from "../utils/dateFormatter";

const LatestArticlesSingle = ({ article }) => {
    const articleCreatedAt = dateTimeFormatterFromSeconds(article.createdAt, true, "short");

    return (
        <div className="blog-wrap mb-30 scroll-zoom">
            <div className="blog-img">
                <Link to={process.env.PUBLIC_URL + "/news/" + article.slug}>
                    <img src={process.env.PUBLIC_URL + article.images[0]} alt="" />
                </Link>
                {/* <div className="blog-category-names">
                    {article.categories.map((singleCategory, key) => {
                        return (
                            <span className="purple" key={key}>
                                {singleCategory}
                            </span>
                        );
                    })}
                </div> */}
            </div>
            <div className="blog-content-wrap">
                <div className="blog-content text-center">
                    <h3>
                        <Link to={process.env.PUBLIC_URL + "/news/" + article.slug}>{article.title}</Link>
                    </h3>
                    {/* <span>
                        By <Link to={process.env.PUBLIC_URL + article.authorUrl}>{article.author.fullname}</Link>
                    </span> */}
                    {/* <p>{article.summary}</p> */}
                    {/* <span>{article.datePublished}</span> */}
                    <p>{articleCreatedAt}</p>
                </div>
            </div>
        </div>
    );
};

LatestArticlesSingle.propTypes = {
    article: PropTypes.shape({}),
};

export default LatestArticlesSingle;
