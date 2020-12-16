import React from 'react';
import GhostCard from "../GhostCard/GhostCard";

export default function EliminatedGhostContainer(props){

    const ghostToRender = props.negativeGhosts.map((ghost) => {
        return <GhostCard cardType={'negative'} ghostType={ghost.type} />
    });

    return(
        <div className={"eliminated-ghosts"}>
            <h3>Eliminated Ghosts</h3>
            {ghostToRender}
        </div>
    )
}
