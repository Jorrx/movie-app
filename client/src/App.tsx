import React from 'react';

import './App.scss';
import Header from "./components/Header/Header";
import Genres from './components/Genres/Genres';
import SimpleSlider from "./components/slide/SimpleSlider";
import NewMovies from "./components/NewMovie/NewMovie";
import Home from "./pages/Home/Home";
import AppRouter from './components/AppRouter';
import {BrowserRouter} from 'react-router-dom'

// import SimpleSlider from './components/slide/show';


function App() {

    return (
        <div className="App">
                <Header/>
            <AppRouter/>
        </div>
    );
}

export default App;
