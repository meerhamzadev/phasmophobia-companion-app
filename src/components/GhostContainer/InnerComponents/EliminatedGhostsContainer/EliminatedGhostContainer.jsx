import React from 'react';
import GhostCard from "../GhostCard/GhostCard";

export default function EliminatedGhostContainer(props){
    const ghostToRender = props.negativeGhosts.map((ghost) => {
        return <GhostCard
                    cardType={'negative'}
                    ghostType={ghost.type}
                    ghostId={ghost.id}
                    evidence={ghost.evidence}
                />
    });

    return(
        <div className={"eliminated-ghosts"}>
            <h2>Eliminated Ghosts</h2>
            {ghostToRender}
        </div>
    )
}
