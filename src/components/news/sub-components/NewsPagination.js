const BlogPagination = ({ currentPage, totalItems, itemsPerPage, handlePageClick }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) {
        return null;
    }

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    const pagesOffset = 2;

    return (
        <div className="pro-pagination-style text-center mt-20">
            <ul>
                <li>
                    {currentPage === 1 ? (
                        <button className="prev-disabled">
                            <i className="fa fa-angle-double-left" />
                        </button>
                    ) : (
                        <button onClick={(e) => handlePageClick(e, currentPage - 1)} className="prev">
                            <i className="fa fa-angle-double-left" />
                        </button>
                    )}
                </li>
                {pages.map((page) => {
                    if (page === currentPage) {
                        return (
                            <li key={page}>
                                <button className="active">{page}</button>
                            </li>
                        );
                    }

                    if (page < currentPage + pagesOffset + 1 && page > currentPage - pagesOffset - 1) {
                        return (
                            <li key={page}>
                                <button onClick={(e) => handlePageClick(e, page)}>{page}</button>
                            </li>
                        );
                    }

                    return null;
                })}
                <li>
                    {currentPage === totalPages ? (
                        <button className="next-disabled">
                            <i className="fa fa-angle-double-right" />
                        </button>
                    ) : (
                        <button onClick={(e) => handlePageClick(e, currentPage + 1)} className="next">
                            <i className="fa fa-angle-double-right" />
                        </button>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default BlogPagination;
