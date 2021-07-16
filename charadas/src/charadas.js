import React, { useState } from "react";
import useFetch from './hooks';
const getData = async() => {
    let random = Math.floor(Math.random() * 200);
    const apiUrl = "https://api.jikan.moe/v3/character/" + random;
    const data = await fetch(apiUrl);
    const jsonData = await data.json();
    return jsonData;
}


export function Charadas({ data }) {



    console.log('chardascompnent', data);

    if (!data) return null;
    return ( <
        div >
        <
        img src = { data.image_url }
        /> < /
        div >
    );
}