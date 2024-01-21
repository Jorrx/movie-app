import React, {memo} from 'react';
import FilmsFilms from "../../components/FilmsFilms/FilmsFilms";
import Header from "../../components/Header/Header";



const Movies = () => {
    return (
        <>
            <Header/>
            <div className={'container'}>
                <FilmsFilms/>
            </div>
        </>

    )
}

export default memo(Movies)