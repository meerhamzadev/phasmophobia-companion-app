import React, { useState, useEffect } from 'react';
import EvidenceTable from "./InnerComponents/EvidenceTable/EvidenceTable";

export default function EvidenceContainer(props){
    const [activeToggles, setActiveToggles] = useState([])
    const [allOptionsUsed, setAllOptionsUsed] = useState(false)

    useEffect(() => {
        activeToggles.length === 3 ? setAllOptionsUsed(true) : null;
    }, [activeToggles])

    const handleActiveToggles = (event) => {
        setActiveToggles([...activeToggles, event.target.key])
    }

    return(
        <div className={"evidence-container"}>
            <h2>With the evidence below...</h2>
            <EvidenceTable evidence={props.evidence} allOptionsUsed={allOptionsUsed} activeToggles={activeToggles} />
        </div>
    )
}