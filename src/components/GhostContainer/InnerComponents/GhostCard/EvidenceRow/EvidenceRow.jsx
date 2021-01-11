import React from 'react';
import './EvidenceRow.css';

import emf from '../../../../../images/evidence-icons/PNGs/emf.png';
import fingerprints from '../../../../../images/evidence-icons/PNGs/fingerprints.png';
import freezing from '../../../../../images/evidence-icons/PNGs/freezing-temperatures.png';
import orb from '../../../../../images/evidence-icons/PNGs/ghost-orbs.png';
import writing from '../../../../../images/evidence-icons/PNGs/ghost-writing.png';
import box from '../../../../../images/evidence-icons/PNGs/spirit-box.png';

export default function EvidenceRow(props){
    const evidenceIcons = [
        {emf},
        {fingerprints},
        {freezing},
        {orb},
        {writing},
        {box}
    ];

    const evidenceNames = ["emf", "fingerprints", "freezing", "orb", "writing", "box"];

    const targetIcons = props.evidence.map((evidence) => {
        let name = evidenceNames[evidence]
        let icon = evidenceIcons[evidence]
        return <img className={"evidence-icon"} height={50} width={50} src={icon[name]} alt={"evidence"}/>
    });

    return(
        <div className={'evidence-row'}>
            {targetIcons}
        </div>
    )
}
