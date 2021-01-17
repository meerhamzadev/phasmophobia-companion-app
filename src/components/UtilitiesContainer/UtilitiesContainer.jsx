import React from 'react';
import './UtilitiesContainer.css';

import Utilities from "./InnerComponents/Utilities";

export default function UtilitiesContainer(props){
    return(
        <div className={"utilities-container"}>
            <Utilities
                evidence={props.evidence}
                handleEvidenceToggle={props.handleEvidenceToggle}
                allOptionsUsed={props.allOptionsUsed}
                positiveEvidence={props.positiveEvidence}
                negativeEvidence={props.negativeEvidence}
                resetEvidence={props.resetEvidence}
                currentUtility={props.currentUtility}
                whiteboardData={props.whiteboardData}
                handleWhiteboard={props.handleWhiteboard}
                handleToolbox={props.handleToolbox}
                handleUtility={props.handleUtility}
            />
        </div>
    )
}
