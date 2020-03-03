import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './redax/state';
import {addPost} from "./redax/state";
import {BrowserRouter} from "react-router-dom";

import {updateNewPostText} from "./redax/state";

let rerendetEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        </BrowserRouter>, document.getElementById('root'));
};

rerendetEntireTree(state);

subscribe(rerendetEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
