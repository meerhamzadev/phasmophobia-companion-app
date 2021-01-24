import React from 'react';
import './GhostCard.css';

import EvidenceRow from "./EvidenceRow/EvidenceRow";

export default function GhostCard(props){
    return(
        <div className={props.cardType}>
            <div className={"ghost-name"}>
                {props.ghostType}
            </div>
            <EvidenceRow
                evidence={props.evidence}
                positiveEvidence={props.positiveEvidence}
                negativeEvidence={props.negativeEvidence}
            />
        </div>
    )
}
