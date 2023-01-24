import React, {Component} from 'react';
import {NavLink, Route, Routes, Outlet} from "react-router-dom";

import '../../../styles/Footer.css';
import './Navigation.css';
import { Home } from '../../components/Home/Home';
import { Support } from '../../components/Support/Support';
import { Funktion } from '../../components/Funktion/Funktion';
import { Video } from '../../components/Video/Video';
<<<<<<< HEAD
import { About } from '../../components/About/About';
import { Impressum } from '../../components/Impressum/Impressum';
import logo from '../../../img/logo.jpg';
=======
>>>>>>> parent of b10eb2b (almost done)

class Navigation extends Component {
    render() {
        const navStyle = {
            color: '#fa923f',
            textDecoration: 'none',
            opacity: 0.4,
        }
        return (
            <div>
                <div className="Blog">
                    <header>
                        <div className="BackgroundPic"/>
                        <nav>
                            <ul>
                                <li><NavLink end to="/"
                                    activestyle={navStyle}>Home</NavLink></li>
                                <li><NavLink
                                    to="/funktion"
                                    activestyle={navStyle}>Funktion</NavLink></li>
                                <li><NavLink
                                    to="/video"
                                    activestyle={navStyle}>Video</NavLink></li>
                                <li><NavLink
                                    to="/support"
                                    activestyle={navStyle}>Support</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/funktion" element={<Funktion/>}/>
                    <Route path="/video" element={<Video/>}/>
                    <Route path="/support" element={<Support/>}/>
                </Routes>
                <Outlet/>
                <div className="Footer">
                    <img className="logoStyle" src={logo} alt={"logo"}/>
                </div>
            </div>
        );
    }
}

export default Navigation;