import React from 'react';
import EliminatedGhostContainer from "./InnerComponents/EliminatedGhostsContainer/EliminatedGhostContainer";
import PossibleGhostContainer from "./InnerComponents/PossibleGhostsContainer/PossibleGhostContainer";
import FoundGhostContainer from "./InnerComponents/FoundGhostContainer/FoundGhostContainer";

export default function GhostContainer(props){
    console.log(props)

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
            {props.positiveID ? <FoundGhostContainer foundGhost={positiveIdDetails} /> : <PossibleGhostContainer possibleGhosts={possibleDetails} />}
            <EliminatedGhostContainer negativeGhosts={eliminatedDetails} />
        </div>
    )
}
