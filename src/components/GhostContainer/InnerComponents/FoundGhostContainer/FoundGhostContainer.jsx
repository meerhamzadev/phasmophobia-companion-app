import React from 'react';
import GhostCard from "../GhostCard/GhostCard";

export default function FoundGhostContainer(props){
    return(
        <div className={"found-ghost-container"}>
            <div className={"found-ghost-card"}>
                <GhostCard cardType={'found'} ghostType={props.foundGhost.type} ghostId={props.foundGhost.id} />
            </div>
            <div className={"found-ghost-description"}>
                <h4>{props.foundGhost.description}</h4>
                <ul>
                    <li>Strength: {props.foundGhost.strength}</li>
                    <li>Weakness: {props.foundGhost.weakness}</li>
                </ul>
            </div>
        </div>
    )
}
