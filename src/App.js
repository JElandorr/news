import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthContextProvider from "./components/contexts/AuthContextProvider";

import Home from "./components/pages/Home";
import NotFound404 from "./components/pages/NotFound";
import ArticlePage from "./components/pages/ArticlePage";
import LoginRegisterPage from "./components/pages/LoginRegisterPage";

import Admin from "./components/pages/Admin/Admin";

function App() {
    return (
        <>
            <AuthContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/news" element={<Home />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/news/:article" element={<ArticlePage />} />
                        <Route path="/login" element={<LoginRegisterPage />} />
                        <Route path="/register" element={<LoginRegisterPage />} />
                        <Route path="/logout" element={<LoginRegisterPage />} />

                        <Route path="*" element={<NotFound404 />} />
                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </>
    );
}

export default App;
