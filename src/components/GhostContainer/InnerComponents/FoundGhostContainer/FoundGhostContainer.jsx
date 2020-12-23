import React from 'react';
import GhostCard from "../GhostCard/GhostCard";
import './FoundGhostContainer.css'

export default function FoundGhostContainer(props){

    const foundGhost = props.foundGhost[0]

    return(
        <div className={"found-ghost-container"}>
            <div className={"found-ghost-card"}>
                <GhostCard cardType={'found'} ghostType={foundGhost.type} ghostId={foundGhost.id} />
            </div>
            <div className={"found-ghost-description"}>
                <div className={"found-ghost-inner-text"}>
                    <h4>{foundGhost.description}</h4>
                    <ul>
                        <li><b>Strength:</b> {foundGhost.strength}</li>
                        <p/>
                        <li><b>Weakness:</b> {foundGhost.weakness}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
