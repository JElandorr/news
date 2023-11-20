import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Redirect, Navigate } from "react-router-dom";

import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./components/pages/Home";
import NotFound404 from "./components/pages/NotFound";
import ArticlePage from "./components/pages/ArticlePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import LogoutPage from "./components/pages/LogoutPage";
import CreateArticlePage from "./components/pages/CreateArticlePage";

import Admin from "./components/pages/Admin/Admin";

function App() {
    const { user, authIsReady } = useAuthContext();
    return (
        <>
            {authIsReady && (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/admin" element={<Admin />} />

                        {/* News */}
                        <Route path="/news" element={<Home />} />
                        <Route path="/news/:article" element={<ArticlePage />} />

                        {/* Articles */}
                        <Route path="/create-new-article" element={user ? <CreateArticlePage /> : <Home />} />

                        {/* Login and Register */}
                        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
                        <Route path="/register" element={!user ? <RegisterPage /> : <Navigate to="/" />} />
                        <Route path="/logout" element={user ? <LogoutPage /> : <Navigate to="/" />} />
                        {/* <Route path="/forgotten-password" element={<LoginRegisterPage />} /> */}
                        <Route path="*" element={<NotFound404 />} />
                    </Routes>
                </BrowserRouter>
            )}
        </>
    );
}

export default App;
