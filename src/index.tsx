import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "./store";
import Provider from "react-redux/es/components/Provider";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const store = setupStore()

root.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
);


