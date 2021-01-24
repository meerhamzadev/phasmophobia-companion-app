import React, { useEffect, useRef } from 'react';
import './UtilitiesContainer.css';

import Utilities from "./InnerComponents/Utilities";

export default function UtilitiesContainer(props){
    useEffect(() => {
      document.addEventListener("mousedown", handleClick);

      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, []);

    const node = useRef();

    const handleClick = (event) => {
        if(!node.current.contains(event.target)) {
            return props.handleToolbox;
        }
    }

    return(
        <div className={"utilities-container"} ref={node}>
            <Utilities
                evidence={props.evidence}
                handleEvidenceToggle={props.handleEvidenceToggle}
                allOptionsUsed={props.allOptionsUsed}
                positiveEvidence={props.positiveEvidence}
                negativeEvidence={props.negativeEvidence}
                resetEvidence={props.resetEvidence}
                currentUtility={props.currentUtility}
                whiteboardData={props.whiteboardData}
                clearWhiteboard={props.clearWhiteboard}
                handleWhiteboard={props.handleWhiteboard}
                handleToolbox={props.handleToolbox}
                handleUtility={props.handleUtility}
            />
        </div>
    )
}
