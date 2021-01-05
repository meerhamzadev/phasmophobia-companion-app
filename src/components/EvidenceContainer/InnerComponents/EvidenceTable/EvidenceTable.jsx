import React from 'react';
import EvidenceRow from "../EvidenceRow/EvidenceRow";
import './EvidenceTable.css'

export default function EvidenceTable(props){
    const possibleEvidence = props.evidence.map((evidence) => {
        if(props.allOptionsUsed){
            if(props.positiveEvidence.includes(evidence.evidenceID)){
                return <EvidenceRow
                            {...evidence}
                            positiveEvidence={props.positiveEvidence}
                            negativeEvidence={props.negativeEvidence}
                            handleEvidenceToggle={props.handleEvidenceToggle}
                        />
            } else {
                return null
            }
        } else {
            return <EvidenceRow
                        {...evidence}
                        positiveEvidence={props.positiveEvidence}
                        negativeEvidence={props.negativeEvidence}
                        handleEvidenceToggle={props.handleEvidenceToggle}
                    />
        }
    })

    return(
        <div className={"evidence-table"}>
            {possibleEvidence}
        </div>
    )
}
