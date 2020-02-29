import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: 'Dialog 1'},
    {id: 2, name: 'Dialog 2'},
    {id: 3, name: 'Dialog 3'},
    {id: 4, name: 'Dialog 4'}
];

let messages = [
    {id: 1, message: 'Dialog 1'},
    {id: 2, message: 'Dialog 2'},
    {id: 3, message: 'Dialog 3'}
];

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
