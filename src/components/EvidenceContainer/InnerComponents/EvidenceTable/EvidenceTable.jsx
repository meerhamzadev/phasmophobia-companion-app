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
        <table className={"evidence-table"}>
            <th className={"evidence-header"}>Evidence</th>
            <th className={"positive-header"}>Status</th>
            {possibleEvidence}
        </table>
    )
}
