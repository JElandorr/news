import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogFeaturedSingle = ({ article }) => {
    return (
        <div className="blog-wrap mb-30 scroll-zoom">
            <div className="blog-img">
                <Link to={process.env.PUBLIC_URL + "news/" + article.slug}>
                    <img src={process.env.PUBLIC_URL + article.image} alt="" />
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
                        <Link to={process.env.PUBLIC_URL + "news/" + article.slug}>{article.title}</Link>
                    </h3>
                    <span>
                        By <Link to={process.env.PUBLIC_URL + article.authorUrl}>{article.author.fullname}</Link>
                    </span>
                    {/* <p>{article.summary}</p> */}
                    {/* <span>{article.datePublished}</span> */}
                    <p>{article.datePublished}</p>
                </div>
            </div>
        </div>
    );
};

BlogFeaturedSingle.propTypes = {
    article: PropTypes.shape({}),
};

export default BlogFeaturedSingle;
