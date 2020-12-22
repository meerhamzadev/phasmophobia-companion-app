import React from 'react';
import GhostCard from "../GhostCard/GhostCard";

export default function FoundGhostContainer(props){
    return(
        <div className={"found-ghost-container"}>
            <div className={"found-ghost-picture"}>

            </div>
            <div className={"found-ghost-description"}>
                <h2>{props.message}</h2>

                {props.ghostDescription}
            </div>
        </div>
    )
}
