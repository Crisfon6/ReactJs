import React, { Children, useEffect, useState, useMemo } from "react";

import "./App.css";

async function getNewCharacter(ids) {
    //promise get data
    let promisesData = [];
    for (let index = 0; index < ids.length; index++) {
        promisesData.push(fetch(
            `https://api.jikan.moe/v3/character/${ids[index]}`
        ));
    }
    const dataJson = await Promise.all(promisesData);

    //promsie conver jsondata
    let promisesJson = [];
    for (let index = 0; index < dataJson.length; index++) {
        promisesJson.push(dataJson[index].json());
    }
    const data = await Promise.all(promisesJson);

    return data;
}


export default function AppCards() {
    const [data, setData] = useState("");
    const [startGame, setStartGame] = useState("");
    const verifyAnswer = (event) => {
        event.preventDefault();
        if (event.target[0].value === data.name) { //good response
            alert('Good');
            getData();
        } else {
            alert("Bad Resposne");
        }
    }
    const getNumbers = (n) => {
        let numbers = [];
        while (numbers.length < n) {
            let tempRandom = Math.floor(Math.random() * 200);
            if (!numbers.includes(tempRandom)) {
                numbers.push(tempRandom);
            }
        }
        return numbers;
    }
    const getData = () => {
        const ids = getNumbers(5);
        getNewCharacter(ids).then(d => {
            const dProc = d.map((el, i) => { //put what is the good answer
                if (i === 0) {
                    el.correct = true;

                } else {
                    el.correct = false;
                }
                return el;
            });
            console.log('dProc', dProc);
            setData(dProc.sort(function() { return 0.5 - Math.random() })); //shuffle data 
        });
    }
    const startGam = () => {
        setStartGame("none");
        getData();
    }
    return ( < div className = "app" >
        <
        h1 > Who is ? < /h1>  <
        button onClick = { startGam }
        style = {
            { display: startGame }
        } > Start game < /button> <
        Cards data = { data } > < /Cards> < /
        div >
    )
}

function Cards({ data }) {
    console.log(data);
    if (data) {
        const elements = data.map((el, i) => {
            console.log('el', el);
            return ( < div key = { i } >
                <
                img src = { el.image_url }
                /> <
                p > { el.name } <
                /p> < /
                div > )
        });
        return elements
    }

    return ( <
        p > Loading... < /p >
    );

}