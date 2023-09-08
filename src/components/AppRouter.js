import React from 'react';
import {Routes, Route, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import Shop from "../page/Shop";

const AppRouter = () => {

    const isAuth = false

    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) => {
                    <Route id={path} path={path} element={Component}/>
            })}
            {publicRoutes.map(({path, Component}) => {
                    <Route id={path} path={path} element={Component}/>
            })}
        </Routes>
    );
};

export default AppRouter;