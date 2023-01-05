import React, {Component} from 'react';
import './App.css';
import Navigation from "./pages/containers/NavItems/Navigation";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navigation/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
