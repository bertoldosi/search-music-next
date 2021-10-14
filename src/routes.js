import React from "react";

import { Route, HashRouter } from "react-router-dom";

import Main from "./pages/Main";
import Historico from "./pages/Historico";
import Header from "./components/Header";

const Routes = () => (
   <HashRouter>
      <div className="app">
         <Header />
         <Route exact path="/" component={Main} />
         <Route path="/historico" component={Historico} />
      </div>
   </HashRouter>
);

export default Routes;
