import React from 'react';
import './UtilitiesContainer.css';

import UtilitiesTabs from "./InnerComponents/UtilitiesTabs";
import Utilities from "./InnerComponents/Utilities";

export default function UtilitiesContainer(props){
    return(
        <div className={"utilities-container"}>
            <UtilitiesTabs
                handleUtility={props.handleUtility}
            />
            {props.currentUtility !== 'none'
            ? <Utilities
                evidence={props.evidence}
                handleEvidenceToggle={props.handleEvidenceToggle}
                allOptionsUsed={props.allOptionsUsed}
                positiveEvidence={props.positiveEvidence}
                negativeEvidence={props.negativeEvidence}
                resetEvidence={props.resetEvidence}
                currentUtility={props.currentUtility}
                whiteboardData={props.whiteboardData}
                handleWhiteboard={props.handleWhiteboard}
            />
            : null}
        </div>
    )
}
