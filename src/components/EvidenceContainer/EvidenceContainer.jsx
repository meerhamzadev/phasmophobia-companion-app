import React from 'react';
import './EvidenceContainer.css'

import EvidenceTable from "./InnerComponents/EvidenceTable/EvidenceTable";

export default function EvidenceContainer(props){
    return(
        <div className={"evidence-container"}>
            <h2>With the evidence below...</h2>
            <EvidenceTable
                evidence={props.evidence}
                allOptionsUsed={props.allOptionsUsed}
                positiveEvidence={props.positiveEvidence}
                negativeEvidence={props.negativeEvidence}
                handlePositive={props.handlePositive}
                handleNegative={props.handleNegative}
            />
        </div>
    )
}
