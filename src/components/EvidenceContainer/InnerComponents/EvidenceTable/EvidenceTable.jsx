import React from 'react';
import EvidenceRow from "../EvidenceRow/EvidenceRow";

export default function EvidenceTable(props){
    const possibleEvidence = props.evidence.map((evidence) => {
        if(props.allOptionsUsed){
            if(props.positiveEvidence.includes(evidence.evidenceID + "")){
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
        <table>
            <tr>
                <th>Evidence</th>
                <th>Interaction Confirmed</th>
                <th>Negative Interaction Confirmed</th>
            </tr>
            {possibleEvidence}
        </table>
    )
}
