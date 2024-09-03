import React from "react";
import CardBase from "./cardBase.jsx";
        

const CounterCard = (props) => {
	return (
        <>
            <CardBase number={props.wholeTime[0]}/>            
            <CardBase number={props.wholeTime[1]}/>
            <CardBase number={props.wholeTime[2]}/>
            <CardBase number={props.wholeTime[3]}/>
            <CardBase number={props.wholeTime[4]}/>
            <CardBase number={props.wholeTime[5]}/>
        </>  
     
    );
};

export default CounterCard;
