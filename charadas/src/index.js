import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppCards from './AppCards';
import AppFinal from './AppFinal';
import reportWebVitals from './reportWebVitals';
import CardProvider from './CardProvider';

// ReactDOM.render( <
//     React.StrictMode > { /* <App /> */ } <
//     AppFinal / >
//     <
//     /React.StrictMode>,
//     document.getElementById('root')
// );
ReactDOM.render( <
    CardProvider >
    <
    AppFinal / > <
    /CardProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();