import React from 'react';

export default function GhostCard(props){
    return(
        <div className={props.cardType}>
            <div className={"ghost-picture"}>
                PHOTO
            </div>
            <div className={"ghost-name"}>
                {props.ghostType}
            </div>
        </div>
    )
}
