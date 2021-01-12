import React from 'react';

import EvidenceContainer from "./EvidenceContainer/EvidenceContainer";
import HuntCountdown from "./HuntCountdown/HuntCountdown";
import Whiteboard from "./Whiteboard/Whiteboard";

export default function Utilities(props){
    const propChecker = () => {
        if(props.currentUtility === "evidence"){
            console.log("evidence reached");
            return <EvidenceContainer
                    evidence={props.evidence}
                    handleEvidenceToggle={props.handleEvidenceToggle}
                    allOptionsUsed={props.allOptionsUsed}
                    positiveEvidence={props.positiveEvidence}
                    negativeEvidence={props.negativeEvidence}
                    resetEvidence={props.resetEvidence}
                    currentUtility={props.currentUtility}
            />
        }

        if(props.currentUtility === "timer"){
            return <HuntCountdown />
        }

        if(props.currentUtility === "board"){
            return <Whiteboard handleWhiteboard={props.handleWhiteboard} whiteboardData={props.whiteboardData} />
        }

        if(props.currentUtility === "none"){
            return null
        }
    }

    const componentToRender = propChecker();

    return componentToRender
}
