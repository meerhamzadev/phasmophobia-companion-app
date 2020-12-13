import React from 'react';
import EvidenceRow from "../EvidenceRow/EvidenceRow";

export default function EvidenceTable(props){
    const possibleEvidence = props.evidence.map((evidence) => {
        if(props.allOptionsUsed){
            return props.activeToggles.includes(evidence.evidenceID)
                ? <EvidenceRow
                    {...evidence}
                    activeToggles={props.activeToggles}
                    handleToggle={props.handleToggle}
                  />
                  : null
        } else {
            return <EvidenceRow
                        {...evidence}
                        activeToggles={props.activeToggles}
                        handleToggle={props.handleToggle}
                    />
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