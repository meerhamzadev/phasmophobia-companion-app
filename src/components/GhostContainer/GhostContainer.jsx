import React from 'react';
import './GhostContainer.css'

import EliminatedGhostContainer from "./InnerComponents/EliminatedGhostsContainer/EliminatedGhostContainer";
import PossibleGhostContainer from "./InnerComponents/PossibleGhostsContainer/PossibleGhostContainer";
import FoundGhostContainer from "./InnerComponents/FoundGhostContainer/FoundGhostContainer";

export default function GhostContainer(props){
    const possibleDetails = props.ghosts.filter((ghost) => {
        return props.possibleGhosts.includes(ghost.id);
    })

    const eliminatedDetails = props.ghosts.filter((ghost) => {
        return props.negativeGhosts.includes(ghost.id);
    })

    const positiveIdDetails = props.ghosts.filter((ghost) => {
        return props.positiveID === ghost.id
    })

    return(
        <div className={"possibility-container"}>
            <h2>{props.message}</h2>
            <h3>(ghosts cannot be visually recognized)</h3>
            {props.positiveID ? <FoundGhostContainer foundGhost={positiveIdDetails} /> : <PossibleGhostContainer possibleGhosts={possibleDetails} />}
            <EliminatedGhostContainer negativeGhosts={eliminatedDetails} />
        </div>
    )
}
