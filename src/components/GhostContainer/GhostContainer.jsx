import React from 'react';
import './GhostContainer.css'

import GhostCard from "./InnerComponents/GhostCard/GhostCard";

export default function GhostContainer(props){

    // Ghost Filters
    const possibleDetails = props.ghosts.filter((ghost) => {
        return props.possibleGhosts.includes(ghost.id);
    });

    const eliminatedDetails = props.ghosts.filter((ghost) => {
        return props.negativeGhosts.includes(ghost.id);
    });

    const positiveIdDetails = props.ghosts.filter((ghost) => {
        return props.positiveID === ghost.id
    });

    // Card Generators
    const possibleCards = possibleDetails.map((ghost) => {
        return <GhostCard
                    cardType={'possible'}
                    ghostType={ghost.type}
                    ghostId={ghost.id}
                    evidence={ghost.evidence}

                />
    });

    const eliminatedCards = eliminatedDetails.map((ghost) => {
        return <GhostCard
                    cardType={'negative'}
                    ghostType={ghost.type}
                    ghostId={ghost.id}
                    evidence={ghost.evidence}
                />
    });

    const foundCard = props.positiveID || props.positiveID === 0
        ? (
        <div className={"found-ghost-container"}>
            <div className={"found-ghost-card"}>
                <GhostCard
                    cardType={'found'}
                    ghostType={positiveIdDetails[0].type}
                    ghostId={positiveIdDetails[0].id}
                    evidence={positiveIdDetails[0].evidence}
                />
            </div>
            <div className={"found-ghost-description"}>
                <div className={"found-ghost-inner-text"}>
                    <h4>{positiveIdDetails[0].description}</h4>
                    <ul>
                        <li><b>Strength:</b> {positiveIdDetails[0].strength}</li>
                        <p/>
                        <li><b>Weakness:</b> {positiveIdDetails[0].weakness}</li>
                    </ul>
                </div>
            </div>
        </div>
        )
        : null;

    return(
        <div className={"possibility-container"}>
            <h2>{props.message}</h2>
            <h3 className={"visual-disclaimer"}>(ghosts cannot be visually recognized)</h3>
            {props.positiveID || props.positiveID === 0
                ? foundCard
                : possibleCards}
            {eliminatedCards}
        </div>
    )
}
