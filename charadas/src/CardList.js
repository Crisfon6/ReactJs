import React from 'react';
import Card from './Card';
import { useCards } from './CardProvider';

export default function CardsList() {
    const { datas, getData, getCorrect } = useCards();


    if (!datas) {

        return ( <
            div >
            <
            button onClick = {
                () => {
                    getData();

                }
            } > Start Game < /button> <
            p > Loading... < /p>

            <
            /div>
        )
    } else {
        console.log('LISTS', datas);
        let correct = datas.filter(el => el.correct === true)
        console.log('correct', correct);
        return ( <
            div >

            <
            h1 > Who is: { correct[0].name } < /h1> {
            datas.map((d, i) => {

                    return ( <
                        Card key = { i }
                        data = { d }
                        />)
                    })
            } <
            /div>
        )

    }




    // if (!datas) {
    //     return ( < div > Loading... < /div>)
    //     }


}