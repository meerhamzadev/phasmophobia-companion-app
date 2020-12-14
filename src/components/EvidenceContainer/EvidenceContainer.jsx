import React from 'react';
import EvidenceTable from "./InnerComponents/EvidenceTable/EvidenceTable";

export default function EvidenceContainer(props){
    return(
        <div className={"evidence-container"}>
            <h2>With the evidence below...</h2>
            <EvidenceTable
                evidence={props.ghostData.evidences}
                allOptionsUsed={props.allOptionsUsed}
                activeToggles={props.activeToggles}
                handleToggle={props.handleToggle}
                handleNegative={props.handleNegative}
            />
        </div>
    )
}
