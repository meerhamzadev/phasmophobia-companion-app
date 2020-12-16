import React from 'react';
import './GhostCard.css'

export default function GhostCard(props){
    return(
        <div className={props.cardType}>
            <div className={"ghost-name"}>
                {props.ghostType}
            </div>
            <div className={"ghost-picture"}>
                PHOTO
            </div>
        </div>
    )
}
