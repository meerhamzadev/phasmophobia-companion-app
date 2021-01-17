import React from 'react';
import './EvidenceContainer.css'
import ResetButton from "./InnerComponents/ResetButton/ResetButton";

import EvidenceTable from "./InnerComponents/EvidenceTable/EvidenceTable";

export default function EvidenceContainer(props){
    return(
        <div className={"evidence-container"}>
            <EvidenceTable
                evidence={props.evidence}
                allOptionsUsed={props.allOptionsUsed}
                positiveEvidence={props.positiveEvidence}
                negativeEvidence={props.negativeEvidence}
                handleEvidenceToggle={props.handleEvidenceToggle}
            />

            <ResetButton resetEvidence={props.resetEvidence}/>
        </div>
    )
}
