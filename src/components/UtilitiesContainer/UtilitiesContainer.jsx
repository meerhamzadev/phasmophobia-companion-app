import React, { useEffect, useRef } from 'react';
import './UtilitiesContainer.css';

import Utilities from "./InnerComponents/Utilities";

export default function UtilitiesContainer(props){
    return(
        <div className={"utilities-container"}>
            <Utilities
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
