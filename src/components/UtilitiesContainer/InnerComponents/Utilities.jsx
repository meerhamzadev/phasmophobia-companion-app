import React from 'react';

import ToolboxHeader from "./ToolboxHeader/ToolboxHeader";

import HuntCountdown from "./HuntCountdown/HuntCountdown";
import AppInformation from "./AppInformation/AppInformation";
import Whiteboard from "./Whiteboard/Whiteboard";

export default function Utilities(props){
    const propChecker = () => {
        if(props.currentUtility === "timer"){
            return <HuntCountdown />
        }

        if(props.currentUtility === "info"){
            return <AppInformation />
        }

        if(props.currentUtility === "board"){
            return <Whiteboard
                    handleWhiteboard={props.handleWhiteboard}
                    whiteboardData={props.whiteboardData}
                    clearWhiteboard={props.clearWhiteboard}
            />
        }
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
