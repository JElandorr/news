import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import NotFound404 from "./components/pages/NotFound";
import ArticlePage from "./components/pages/ArticlePage";

import Admin from "./components/pages/Admin/Admin";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/news/:article" element={<ArticlePage />} />

                    <Route path="*" element={<NotFound404 />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
