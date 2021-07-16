import React from "react";
import { useCards } from './CardProvider';

export default function Card({ data }) {
    console.log('data', data)
    const { verifyAnswer } = useCards();
    return ( <
        div >
        <
        button onClick = {
            () => verifyAnswer(data)
        } >
        <
        img src = { data.image_url }
        />  < /
        button > < /
        div >
    )
}