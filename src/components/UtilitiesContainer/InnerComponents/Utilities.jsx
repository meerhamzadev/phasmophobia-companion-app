import React from 'react';

import ToolboxHeader from "./ToolboxHeader/ToolboxHeader";

import EvidenceContainer from "./EvidenceContainer/EvidenceContainer";
import HuntCountdown from "./HuntCountdown/HuntCountdown";
import Whiteboard from "./Whiteboard/Whiteboard";

export default function Utilities(props){
    const propChecker = () => {
        if(props.currentUtility === "evidence"){
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

        /**
        if(props.currentUtility === "board"){
            return <Whiteboard handleWhiteboard={props.handleWhiteboard} whiteboardData={props.whiteboardData} />
        }
         */
    }

    return (
        <>
            <ToolboxHeader
                handleToolbox={props.handleToolbox}
                handleUtility={props.handleUtility}
                currentUtility={props.currentUtility}
            />
            {propChecker()}
        </>
    );
}
