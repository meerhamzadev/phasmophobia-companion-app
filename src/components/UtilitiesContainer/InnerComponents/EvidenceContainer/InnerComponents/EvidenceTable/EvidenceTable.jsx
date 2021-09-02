import React from 'react';

import EvidenceRow from "../EvidenceRow/EvidenceRow";
import './EvidenceTable.css'

export default function EvidenceTable(props){

    const addedProbability = props.evidence.map((evidence) => {
        for(let key in props.evidenceProbability){
            if(evidence.evidenceID === parseInt(key)){
                evidence['probability'] = props.evidenceProbability[parseInt(key)];
                return evidence
            }
        }
    });

    addedProbability.sort((a, b) => {
        return b.probability - a.probability;
    })

    const possibleEvidence = addedProbability.map((evidence) => {
        const rowStructure =
            <EvidenceRow
                {...evidence}
                positiveEvidence={props.positiveEvidence}
                negativeEvidence={props.negativeEvidence}
                evidenceProbability={props.evidenceProbability[evidence.evidenceID]}
                handleEvidenceToggle={props.handleEvidenceToggle}
            />

        if(props.allOptionsUsed){
            if(props.positiveEvidence.includes(evidence.evidenceID)){
                return rowStructure
            } else {
                return null
            }
        } else {
            return rowStructure
        }
    })

    return(
        <div className={"evidence-table"}>
            {possibleEvidence}
        </div>
    )
}
