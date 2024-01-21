import React, {memo} from 'react';
import NewMovies from "../../components/NewMovie/NewMovie";
import Header from "../../components/Header/Header";


const Home = () => {

    return (
        <>
            <Header/>
            <NewMovies/>
        </>
)

};

export default memo(Home);