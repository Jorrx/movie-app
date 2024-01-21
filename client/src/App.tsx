import React, {memo, useEffect} from 'react';
import './App.scss';
import AppRouter from './components/AppRouter';


function App() {

    // console.log(user)
    console.log('sss')
    return (
        <div className="App">
            <AppRouter/>
        </div>
    );
}

export default memo(App);
