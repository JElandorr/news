import PropTypes from "prop-types";
import clsx from "clsx";
// import { articles } from "../dataStructures/examples/articles_example";
import LatestNewsSingle from "./sub-components/LatestNewsSingle";
import SectionTitle from "../common/SectionTitle";

const LatestNewsPanel = ({ spaceTopClass, spaceBottomClass, articles }) => {
    // console.log("articles", articles);

    return (
        <div className={clsx("blog-area", spaceTopClass, spaceBottomClass)}>
            <div className="container">
                <SectionTitle titleText="Latest News" positionClass="text-center" spaceClass="mb-55" />
                <div className="row">
                    {articles.map((article) => (
                        <div className="col-lg-4 col-xs-6" key={article.id}>
                            <LatestNewsSingle article={article} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

LatestNewsPanel.propTypes = {
    spaceBottomClass: PropTypes.string,
    spaceTopClass: PropTypes.string,
};

export default LatestNewsPanel;
