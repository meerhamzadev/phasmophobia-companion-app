import React from 'react';
import './EvidenceContainer.css'
import ResetButton from "../ResetButton/ResetButton";

import EvidenceTable from "./InnerComponents/EvidenceTable/EvidenceTable";

export default function EvidenceContainer(props){
    return(
        <div className={"evidence-container"}>
            <EvidenceTable
                evidence={props.evidence}
                evidenceProbability={props.evidenceProbability}
                allOptionsUsed={props.allOptionsUsed}
                positiveEvidence={props.positiveEvidence}
                negativeEvidence={props.negativeEvidence}
                handleEvidenceToggle={props.handleEvidenceToggle}
            />

            <ResetButton text={"Reset evidence"} action={props.resetEvidence}/>
        </div>
    )
}
