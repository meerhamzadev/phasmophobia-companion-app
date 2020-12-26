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
                            handlePositive={props.handlePositive}
                            handleNegative={props.handleNegative}
                        />
            } else {
                return null
            }
        } else {
            return <EvidenceRow
                        {...evidence}
                        positiveEvidence={props.positiveEvidence}
                        negativeEvidence={props.negativeEvidence}
                        handlePositive={props.handlePositive}
                        handleNegative={props.handleNegative}
                    />
        }
    })

    return(
        <table className={"evidence-table"}>
            <th className={"evidence-header"}>Evidence</th>
            <th className={"positive-header"}>Positive</th>
            <th className={"negative-header"}>Negative</th>
            {possibleEvidence}
        </table>
    )
}
