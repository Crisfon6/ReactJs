import React, { createContext, useContext, useState } from 'react';

const CardContext = createContext();
export const useCards = () => useContext(CardContext);

export default function CardProvider({ children }) {
    const [datas, setData] = useState();


    const verifyAnswer = (selected) => {
        console.log('SELECTED;,', selected)
        if (selected.correct) { //good response
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



    return ( <
        CardContext.Provider value = {
            {
                datas,
                verifyAnswer,
                getNumbers,
                getData,

            }
        } > { children } <
        /CardContext.Provider>

    );


}

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