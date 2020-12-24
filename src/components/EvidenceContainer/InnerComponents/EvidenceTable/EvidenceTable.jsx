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
            <div className={"evidence-table-header-row"}>
                <div className={"evidence-header"}>Evidence</div>
                <div className={"positive-header"}>Positive</div>
                <div className={"negative-header"}>Negative</div>
            </div>
            {possibleEvidence}
        </div>
    )
}
