import React from 'react';
import EvidenceRow from "../EvidenceRow/EvidenceRow";

export default function EvidenceTable(props){

    const possibleEvidence = props.evidence.map((evidence) => {
        if(props.allOptionsUsed){
            return props.activeToggles.includes(evidence.key) ? <EvidenceRow {...props} /> : null
        } else {
            return <EvidenceRow {...props} />
        }
    })

    return(
        <table>
            <tr>
                <th>Evidence</th>
                <th>Ghost interaction detected</th>
            </tr>
            {possibleEvidence}
        </table>
    )
}