import React from 'react';

import UtilitiesTabs from "./InnerComponents/UtilitiesTabs";
import Utilities from "./InnerComponents/Utilities";

export default function UtilitiesContainer(props){
    return(
        <div className={"utilities-container"}>
            <UtilitiesTabs
                handleUtility={props.handleUtility}
            />
            <Utilities
                evidence={props.evidence}
                handleEvidenceToggle={props.handleEvidenceToggle}
                allOptionsUsed={props.allOptionsUsed}
                positiveEvidence={props.positiveEvidence}
                negativeEvidence={props.negativeEvidence}
                resetEvidence={props.resetEvidence}
                currentUtility={props.currentUtility}
            />
        </div>
    )
}
