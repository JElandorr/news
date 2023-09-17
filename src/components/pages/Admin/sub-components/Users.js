import React, { useState } from "react";

const Users = () => {
    const [user, setUser] = useState({});

    const handleUserDataChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div className="col-lg-9">
            <div className="billing-info-wrap">
                <h3>User Details</h3>
                <form>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info mb-20">
                                <label>Username</label>
                                <input type="text" name="username" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info mb-20">
                                <label>Email</label>
                                <input type="text" name="email" />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="your-order-area">
                    <div className="place-order mt-25">
                        <button className="btn-hover">Create User</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
