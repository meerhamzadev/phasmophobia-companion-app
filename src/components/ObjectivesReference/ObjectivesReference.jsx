import React from 'react';
import './ObjectivesReference.css';

export default function ObjectivesReference(props){
    return (
        <div className={"objectives-reference"} onClick={props.handleSessionInformation}>
            <span className={"ghost-name-reference"}>{props.whiteboardData.ghostName}</span>
            <span className={"objectives-reference-container"}>
                <span className={"objective-reference"}>{props.whiteboardData.objectiveTwo}</span>
                <span className={"objective-reference"}>{props.whiteboardData.objectiveThree}</span>
                <span className={"objective-reference"}>{props.whiteboardData.objectiveFour}</span>
            </span>
        </div>
    )
}
