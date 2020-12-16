import React from 'react';
import GhostCard from "../GhostCard/GhostCard";

export default function EliminatedGhostContainer(props){

    const cardsToReturn = props.eliminatedGhosts.map((ghost) => {
        return <GhostCard {...ghost} cardType={"eliminated"} />
    })

    return(
        <div className={"eliminated-ghosts"}>
            {cardsToReturn}
        </div>
    )
}
