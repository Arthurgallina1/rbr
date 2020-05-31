import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Buscar from "../pages/Buscar";

export default function Routes() {
    return (
        <Switch>
            <Route path='/login' exact component={SignIn} />
            <Route path='/cadastrar' component={SignUp} />
            <Route path='/dashboard' isPrivate component={Dashboard} />
            <Route path='/buscar' isPrivate component={Buscar} />

            <Route path='/' component={() => <h1>404</h1>} />
        </Switch>
    );
}
