import React, { Children, useEffect, useState, useMemo } from "react";
import { Charadas } from './charadas';
import "./App.css";

import useFetch from "./hooks";

async function getNewCharacter(id) {
    const dataJson = await fetch(
        `https://api.jikan.moe/v3/character/${id}`
    );
    const data = await dataJson.json();
    return data;
}


export default function App() {
    const [data, setData] = useState("");
    const [startGame, setStartGame] = useState("");
    const verifyAnswer = (event) => {
        event.preventDefault();
        if (event.target[0].value === data.name) {
            alert('Good');
            getData();
            event.target[0].value = "";
        } else {
            alert("Bad Resposne");
        }
    }
    const getData = () => {
        getNewCharacter(Math.floor(Math.random() * 200)).then(d => {
            setData(d);
        });
    }
    const startGam = () => {
        setStartGame("none");
        getData();
    }
    return ( <
        div className = "app" >
        <
        h1 > Who is ? < /h1>  <
        button onClick = { startGam }
        style = {
            { display: startGame }
        } > Start game < /button>

        <
        div >

        <
        form onSubmit = { verifyAnswer } >
        <
        input placeholder = "name"
        type = "text"
        name = "firstName"
        required /
        >
        <

        /form> < /
        div > <
        Charadas data = { data }


        >
        <
        /Charadas>  < /
        div > );
}