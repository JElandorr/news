import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/styles.scss";

import { AuthContextProvider } from "./components/contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);
