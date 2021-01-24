import React from 'react';
import './EvidenceRow.css';

// Neutral icons
import emf from '../../../../../images/evidence-icons/PNGs/emf.png';
import fingerprints from '../../../../../images/evidence-icons/PNGs/fingerprints.png';
import freezing from '../../../../../images/evidence-icons/PNGs/freezing-temperatures.png';
import orb from '../../../../../images/evidence-icons/PNGs/ghost-orbs.png';
import writing from '../../../../../images/evidence-icons/PNGs/ghost-writing.png';
import box from '../../../../../images/evidence-icons/PNGs/spirit-box.png';

// Positive icons
import emfPositive from '../../../../../images/evidence-icons/PNGs/emf-pos.png';
import fingerprintsPositive from '../../../../../images/evidence-icons/PNGs/fingerprints-pos.png';
import freezingPositive from '../../../../../images/evidence-icons/PNGs/freezing-temperatures-pos.png';
import orbPositive from '../../../../../images/evidence-icons/PNGs/ghost-orbs-pos.png';
import writingPositive from '../../../../../images/evidence-icons/PNGs/ghost-writing-pos.png';
import boxPositive from '../../../../../images/evidence-icons/PNGs/spirit-box-pos.png';

// Negative icons
import emfNegative from '../../../../../images/evidence-icons/PNGs/emf-neg.png';
import fingerprintsNegative from '../../../../../images/evidence-icons/PNGs/fingerprints-neg.png';
import freezingNegative from '../../../../../images/evidence-icons/PNGs/freezing-temperatures-neg.png';
import orbNegative from '../../../../../images/evidence-icons/PNGs/ghost-orbs-neg.png';
import writingNegative from '../../../../../images/evidence-icons/PNGs/ghost-writing-neg.png';
import boxNegative from '../../../../../images/evidence-icons/PNGs/spirit-box-neg.png';

export default function EvidenceRow(props){
    const evidenceIcons = [
        {emf},
        {fingerprints},
        {freezing},
        {orb},
        {writing},
        {box}
    ];
    const positiveIcons = [
        {emfPositive},
        {fingerprintsPositive},
        {freezingPositive},
        {orbPositive},
        {writingPositive},
        {boxPositive}
    ];
    const negativeIcons = [
        {emfNegative},
        {fingerprintsNegative},
        {freezingNegative},
        {orbNegative},
        {writingNegative},
        {boxNegative}
    ];

    const evidenceNames = ["emf", "fingerprints", "freezing", "orb", "writing", "box"];
    const positiveEvidenceNames = ["emfPositive", "fingerprintsPositive", "freezingPositive", "orbPositive", "writingPositive", "boxPositive"];
    const negativeEvidenceNames = ["emfNegative", "fingerprintsNegative", "freezingNegative", "orbNegative", "writingNegative", "boxNegative"];

    const targetIcons = props.evidence.map((evidence) => {
        let name, icon

        if(props.negativeEvidence.includes(evidence)){
            name = negativeEvidenceNames[evidence];
            icon = negativeIcons[evidence];
        } else if(props.positiveEvidence.includes(evidence)){
            name = positiveEvidenceNames[evidence];
            icon = positiveIcons[evidence];
        } else {
            name = evidenceNames[evidence];
            icon = evidenceIcons[evidence]   ;
        }

        return <img className={"evidence-icon"} height={50} width={50} src={icon[name]} alt={"evidence"}/>
    });

    return(
        <div className={'evidence-row'}>
            {targetIcons}
        </div>
    )
}
