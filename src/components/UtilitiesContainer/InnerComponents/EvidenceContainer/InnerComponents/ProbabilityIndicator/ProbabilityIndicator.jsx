import React from 'react';

export default function ProbabilityIndicator(props){



    return(
        <div className={"probability-indicator"}>
            {props.probability}% chance
        </div>
    )
}
