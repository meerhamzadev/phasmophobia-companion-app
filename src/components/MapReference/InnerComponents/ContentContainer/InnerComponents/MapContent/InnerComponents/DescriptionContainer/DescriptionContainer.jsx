import React from 'react';
import './DescriptionContainer.css';

export default function DescriptionContainer(props){
    return (
        <div className={"description-container"}>
            <h3>{props.mapName}</h3>
            <span className={"map-description"}>{props.mapDescription}</span>
            <div className={"info-row"}>
                <span className={"map-info-title"}>Recommended team size: </span> <span className={"map-info"}>{props.teamSize}</span>
            </div>
            <div className={"info-row"}>
                <span className={"map-info-title"}>Recommended items:</span> <span className={"map-info"}>{props.items}</span>
            </div>
        </div>
    )
}
