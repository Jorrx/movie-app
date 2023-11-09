import React from 'react';

import './App.scss';
import Header from "./components/Header/Header";
import Genres from './components/Genres/Genres';
import SimpleSlider from "./components/slide/SimpleSlider";
import NewMovies from "./components/NewMoves/NewMovies";
import Home from "./pages/Home/Home";
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom'
// import SimpleSlider from './components/slide/show';


function App() {

    {/*<button onClick={() => {*/
    }
    {/*  const options = {*/
    }
    {/*    method: 'GET',*/
    }
    {/*    headers: {*/
    }
    {/*      accept: 'application/json',*/
    }
    {/*      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDM3NGQ5Mzc4OGZmNTQ5NGZkNWU3ZTViNDNkNWYxNyIsInN1YiI6IjYzZGE2OTAyMjJkZjJlMDA4Y2NhZDRkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pVX1OTXOqmroHxqDAIw4_OzoV4OhCw8hdqlXSUeK6-c'*/
    }
    {/*    }*/
    }
    {/*  };*/
    }

    {/*  fetch('https://api.themoviedb.org/3/discover/movie?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDM3NGQ5Mzc4OGZmNTQ5NGZkNWU3ZTViNDNkNWYxNyIsInN1YiI6IjYzZGE2OTAyMjJkZjJlMDA4Y2NhZDRkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pVX1OTXOqmroHxqDAIw4_OzoV4OhCw8hdqlXSUeK6-c&with_genres=28', options)*/
    }
    {/*    .then(response => response.json())*/
    }
    {/*    .then(response => console.log(response))*/
    }
    {/*    .catch(err => console.error(err));*/
    }
    {/*}}>*/
    }
    {/*  click to do request*/
    }
    {/*</button>*/
    }

    return (
        <div className="App">
            <Header />
            <AppRouter />
        </div >
    );
}

export default App;
