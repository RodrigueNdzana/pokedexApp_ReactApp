import React from 'react';
import { useState } from 'react';
const CaughtPokemon=(props)=>{
    // let [caught,setCaught] = useState(0);
    // function catchPokemon(){
    //     return setCaught(caught+=1);
    // }
    let [caught,setCaught] = useState([]);
    function catchPokemon(){
        <ul>
            {caught.map((item,index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
        return setCaught(caught.concat(1,2,3,4,5,6,7,8,9));
    }
    return (
        <div>
        {/* <button onClick={catchPokemon}>catchPokemon</button> */}
        <button onClick={catchPokemon}>catchPokemon</button>
        <p>Caught Pokemon {caught} on {props.TodayDate}</p>
        </div>
        
    );
}
export default CaughtPokemon;