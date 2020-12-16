import React from 'react';
import GhostCard from "../GhostCard/GhostCard";

export default function PossibleGhostContainer(props){
    const ghostToRender = props.possibleGhosts.map((ghost) => {
        return <GhostCard cardType={'possible'} ghostType={ghost.type} />
    });

    return(
        <div className={'possible-ghosts-container'}>
            {ghostToRender}
        </div>
    )
}
