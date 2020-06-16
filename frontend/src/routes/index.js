import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Buscar from "../pages/Buscar";
import Sediar from "../pages/Sediar";
import Sorteio from "../pages/Sorteio";
import Pagamento from "../pages/Pagamento";
import Sumario from "../pages/Sumario";
import Perfil from "../pages/Perfil";
import EditarPerfil from "../pages/EditarPerfil";
import PaymentWrapper from "../pages/PaymentWrapper";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={SignIn} />
      <Route path="/cadastrar" component={SignUp} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/buscar" isPrivate component={Buscar} />
      <Route path="/sediar" isPrivate component={Sediar} />
      <Route path="/pagamento" isPrivate component={Pagamento} />
      <Route path="/sumario" isPrivate component={Sumario} />
      <Route path="/sorteio/:id" isPrivate component={Sorteio} />
      <Route path="/perfil" isPrivate component={Perfil} />
      <Route path="/editarperfil" isPrivate component={EditarPerfil} />
      <Route path="/stripe" isPrivate component={PaymentWrapper} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
