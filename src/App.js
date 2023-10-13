import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthContextProvider from "./components/contexts/AuthContextProvider";

import Home from "./components/pages/Home";
import NotFound404 from "./components/pages/NotFound";
import ArticlePage from "./components/pages/ArticlePage";
import LoginRegisterPage from "./components/pages/LoginRegisterPage";
import CreateArticlePage from "./components/pages/CreateArticlePage";

import Admin from "./components/pages/Admin/Admin";

function App() {
    return (
        <>
            <AuthContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/admin" element={<Admin />} />

                        {/* News */}
                        <Route path="/news" element={<Home />} />
                        <Route path="/news/:article" element={<ArticlePage />} />

                        {/* Articles */}
                        <Route path="/create-new-article" element={<CreateArticlePage />} />

                        {/* Login and Register */}
                        <Route path="/login" element={<LoginRegisterPage />} />
                        <Route path="/register" element={<LoginRegisterPage />} />
                        <Route path="/logout" element={<LoginRegisterPage />} />
                        <Route path="/forgotten-password" element={<LoginRegisterPage />} />

                        <Route path="*" element={<NotFound404 />} />
                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </>
    );
}

export default App;
