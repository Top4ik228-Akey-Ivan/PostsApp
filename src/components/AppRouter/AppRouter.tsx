import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import About from "../../pages/About.tsx";
import Posts from "../../pages/Posts.tsx";
import PostIdPage from "../PostIdPage/PostIdPage.tsx";

const AppRouter = () => {

    

    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostIdPage />} />
            <Route path="*" element={<Navigate to="/posts" />} />
        </Routes>
    );
}

export default AppRouter;