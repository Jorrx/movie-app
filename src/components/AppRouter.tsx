import React from 'react'
import {publicRoute} from '../router/index'
import { Route , Routes } from 'react-router-dom'
import Error from '../pages/Error/Error'

const AppRouter = () => {
    
    return (
        <Routes>
            {publicRoute.map(({path , Element})=>
                <Route key={path} path={path} element={<Element />}/>
            )}

            <Route path='*' element={<Error />}/>
        </Routes>
    )
}

export default AppRouter
