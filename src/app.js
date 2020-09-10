import React from 'react'
import './app.css'

import Header from './components/header/header'

import Routes from './routes'


export default props => {
    return (
        <div className='app'>
            <Routes />
        </div>
    )
}