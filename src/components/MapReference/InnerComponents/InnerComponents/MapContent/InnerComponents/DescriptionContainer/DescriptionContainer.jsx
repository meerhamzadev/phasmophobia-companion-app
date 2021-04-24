import React from 'react';

export default function DescriptionContainer(props){
    return (
        <div className={"description-container"}>
            <h3>{props.mapName}</h3>
            <span className={"map-description"}>{props.mapDescription}</span>
            <span className={"map-info-title"}>Recommended team size:</span> {props.teamSize}
            <span className={"map-info-title"}>Recommended items:</span> {props.items}
        </div>
    )
}
