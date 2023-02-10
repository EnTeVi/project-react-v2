import React from 'react'
import {Navigate, Route, BrowserRouter, Routes} from "react-router-dom";

import './App.css';
import {Posts, Users} from "./components";
import {MainLayouts} from "./layouts";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainLayouts/>}>
                    <Route index element={<Navigate to={'users'}/>}/>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'posts'} element={<Posts/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
