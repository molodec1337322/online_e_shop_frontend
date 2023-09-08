import React from 'react';
import {Routes, Route, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import Shop from "../page/Shop";

const AppRouter = () => {

    const isAuth = false

    return (
        <Routes>
            <Route path="/fff"/>
            {isAuth && authRoutes?.map(({path, component}) =>
                    <Route key={path} path={path} element={component}/>
            )}
            {publicRoutes?.map(({path, component}) =>
                    <Route key={path} id={path} path={path} element={component}/>
            )}
        </Routes>
    );
};

export default AppRouter;