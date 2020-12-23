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
        <div className={"evidence-table"}>
            <tr>
                <th>Evidence</th>
                <th>Interaction happened</th>
                <th>No interaction</th>
            </tr>
            {possibleEvidence}
        </div>
    )
}
