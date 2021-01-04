import React from 'react';
import GhostCard from "../GhostCard/GhostCard";
import './PossibleGhostContainer.css';

export default function PossibleGhostContainer(props) {
    const ghostToRender = props.possibleGhosts.map((ghost) => {
        return <GhostCard cardType={'possible'} ghostType={ghost.type} ghostId={ghost.id} />
    });

    return (
        <div className={'possible-ghosts-container'}>
            {ghostToRender}
        </div>
    )
}
