import React from 'react';
import './UtilitiesContainer.css';

import UtilitiesTabs from "./InnerComponents/UtilitiesTabs";
import Utilities from "./InnerComponents/Utilities";

export default function UtilitiesContainer(props){
    return(
        <div className={"utilities-container"}>

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
            <UtilitiesTabs
                handleUtility={props.handleUtility}
            />

        </div>
    )
}
