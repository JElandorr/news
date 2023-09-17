import React, { useState } from "react";
import { user } from "../../../dataStructures/user";

import { register } from "../../../services/authUtilService";

const Users = () => {
    const [FlagNewUserCreateMode, setFlagNewUserCreateMode] = useState(true);
    const [newUser, setNewUser] = useState({});
    const [selectedRole, setSelectedRole] = useState(""); // State to hold the selected role

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value); // Update the selected role when the user makes a selection
    };
    const handlenewUserDataChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    const handleSubmitCreateNewUser = (e) => {
        e.preventDefault();

        const newUserData = { ...user };
        newUserData.username = newUser.username;
        newUserData.email = newUser.email;
        newUserData.password = newUser.password;
        newUserData.role = newUser.role;
        newUserData.articles = [];

        // register(newUserData);
        console.log("newUserData", newUserData);
    };

    // console.log("newUser", newUser);

    return (
        <div className="col-lg-9">
            <div className="billing-info-wrap">
                <h3>Create User</h3>
                <form onSubmit={(e) => handleSubmitCreateNewUser(e)}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info mb-20">
                                <label>Username</label>
                                <input type="text" name="username" onChange={handlenewUserDataChange} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info mb-20">
                                <label>Email</label>
                                <input type="text" name="email" onChange={handlenewUserDataChange} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info mb-20">
                                <label>Password</label>
                                <input type="password" name="email" onChange={handlenewUserDataChange} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-select mb-20">
                                <label htmlFor="roleSelect">Select a role:</label>
                                <select id="roleSelect" value={selectedRole} onChange={handleRoleChange}>
                                    <option value="" disabled hidden>
                                        Choose role
                                    </option>
                                    <option value="User">User</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="your-order-area">
                        <div className="place-order mt-25">
                            <button className="btn-hover" type="submit">
                                Create User
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Users;
