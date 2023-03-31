import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

function App() {
    return(
        <Router>
            <Routes>
                <Route path={'/'} element={<Blog />} />
                <Route path={'/:blogId'} element={<BlogDetail />} />
            </Routes>
        </Router>
    )
}

export default App;