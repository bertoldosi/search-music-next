import React from 'react'

import { Route, HashRouter } from "react-router-dom";
import Header from './components/header/header'

import MainArt from './pages/mainArt'
import MainAlb from './pages/mainAlb'
import Historico from './pages/historico'

const Routes = () => (
    <HashRouter>
        <Header />
        <Route exact path='/' component={MainArt}></Route>
        <Route path='/mainAlb' component={MainAlb}></Route>
        <Route path='/historico' component={Historico}></Route>
    </HashRouter>
)

export default Routes