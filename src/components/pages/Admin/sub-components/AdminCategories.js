import React from "react";

const AdminCategories = ({ handleArticles, handleUsers }) => {
    return (
        <div className="col-lg-3">
            <div className="your-order-area">
                <h3>Options</h3>
                <div className="your-order-wrap gray-bg-4">
                    <div className="your-order-product-info">
                        <div className="your-order-total">
                            <h3>My Profile</h3>
                            <ul>
                                <li className="order-total" onClick={handleUsers}>
                                    Edit Profile
                                </li>
                            </ul>
                        </div>
                        <div className="your-order-total">
                            <h3>Users</h3>
                            <ul>
                                <li className="order-total" onClick={handleUsers}>
                                    View All Users
                                </li>
                                <li className="order-total" onClick={handleUsers}>
                                    Create Users
                                </li>
                            </ul>
                        </div>
                        <div className="your-order-total">
                            <h3>Articles</h3>
                            <ul>
                                <li className="order-total" onClick={handleArticles}>
                                    New Article
                                </li>
                                <li className="order-total">My Articles</li>
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
