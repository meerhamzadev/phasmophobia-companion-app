import React from 'react';
import './GhostCard.css';

import GhostPicture from "./GhostPicture/GhostPicture";
import EvidenceRow from "./EvidenceRow/EvidenceRow";

export default function GhostCard(props){
    return(
        <div className={props.cardType}>
            <div className={"ghost-name"}>
                {props.ghostType}
            </div>
            <GhostPicture
                ghostType={props.ghostType}
                ghostId={props.ghostId}
            />
            <EvidenceRow evidence={props.evidence} />
        </div>
    )
}
