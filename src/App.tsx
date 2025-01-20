import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./UI/navBar/NavBar.tsx";
import AppRouter from "./components/AppRouter/AppRouter.tsx";

import './App.css'



const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;