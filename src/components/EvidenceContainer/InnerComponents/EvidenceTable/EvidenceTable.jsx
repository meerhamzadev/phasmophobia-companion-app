import React from 'react';
import EvidenceRow from "../EvidenceRow/EvidenceRow";

export default function EvidenceTable(props){
    const possibleEvidence = props.evidence.map((evidence) => {
        if(props.allOptionsUsed){
            if(props.activeToggles.includes(evidence.evidenceID + "")){
                return <EvidenceRow
                    {...evidence}
                    activeToggles={props.activeToggles}
                    handleToggle={props.handleToggle}
                    handleNegative={props.handleNegative}
                  />
            } else {
                return null
            }
        } else {
            return <EvidenceRow
                        {...evidence}
                        activeToggles={props.activeToggles}
                        handleToggle={props.handleToggle}
                        handleNegative={props.handleNegative}
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
