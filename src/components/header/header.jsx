import React, { Component } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component{
    render() {
        return (
            <header>
                <div className='logo'>
                    <h1>MUSIC</h1>
                </div>
                <div className='navBar'>
                    <Link to='/'>PESQUISA</Link>
                    <Link to='/historico'>HISTÓRICO</Link>
                </div>
            </header>
        )
    }
}