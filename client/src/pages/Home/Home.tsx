import React from 'react';
import NewMovies from "../../components/NewMovie/NewMovie";
import Genres from "../../components/Genres/Genres";


const Home = () => {

    return (
        <div>
            <NewMovies />
            <div style={{marginTop:'100px'}}></div>
        </div>
    );
};

export default Home;