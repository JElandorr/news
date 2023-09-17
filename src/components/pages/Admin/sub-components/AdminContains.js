import React from "react";
import Users from "./Users";
import Articles from "./Articles";

const AdminContains = ({ users, articles }) => {
    return (
        <>
            {users && <Users />}
            {articles && <Articles />}
        </>
    );
};

export default AdminContains;
