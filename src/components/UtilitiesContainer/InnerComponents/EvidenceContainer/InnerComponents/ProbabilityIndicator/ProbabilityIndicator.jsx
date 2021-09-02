import React from 'react';
import './ProbabilityIndicator.css';

export default function ProbabilityIndicator(props){

    const degrees = "90deg";
    const transparency = "rgba(255, 255, 255, 0)"

    let style;
    let transparencyThreshold;
    const probability = parseInt(props.probability) / 100;

    if(probability === 1){
        style = {
            backgroundColor: "rgb(17, 138, 0)",
            fontWeight: "bold",
            color: "rgb(255, 255, 255)",
        }
    }

    if(probability === 0){
        style = {
            color: "rgb(187, 12, 12)",
            fontWeight: "bold",
            borderColor: "rgb(187, 12, 12)"
        }
    }

    if(probability < 1 && probability > 0.7){
        style = {
            color: "rgb(255, 255, 255)",
            backgroundColor: `rgba(17, 138, 0, ${probability})`
        }
    }

    if(probability < 0.7 && probability > 0.4){
        style = {
            color: "rgb(255, 255, 255)",
            backgroundColor: `rgba(12,63,187,${probability})`
        }
    }

    if(probability < 0.4 && probability > 0){
        style = {
            color: "rgb(255, 255, 255)",
            background: `rgba(187,12,12,${probability})`
        }
    }

    return(
        <div className={"probability-indicator"} style={style}>
            {props.probability}% chance
        </div>
    )
}
