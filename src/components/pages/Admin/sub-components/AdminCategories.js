import React from "react";

const AdminCategories = ({ handleArticles, handleUsers }) => {
    return (
        <div className="col-lg-3">
            <div className="your-order-area">
                <h3>Options</h3>
                <div className="your-order-wrap gray-bg-4">
                    <div className="your-order-product-info">
                        <div className="your-order-total">
                            <ul>
                                <li className="order-total" onClick={handleUsers}>
                                    Users
                                </li>
                            </ul>
                        </div>
                        <div className="your-order-total">
                            <ul>
                                <li className="order-total" onClick={handleArticles}>
                                    Articles
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCategories;
//This component is created with elements from Checkout
