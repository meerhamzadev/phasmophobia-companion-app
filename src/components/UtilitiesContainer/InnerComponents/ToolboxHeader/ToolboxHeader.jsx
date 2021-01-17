import React from 'react';

export default function ToolboxHeader(props){
    return(
        <div className={"toolbox-header"}>
            <button className={"toolbox-access"} value={"evidence"} onClick={props.handleUtility}>Evidence</button>
            <button className={"toolbox-access"} value={"timer"} onClick={props.handleUtility}>Timer</button>
            <button className={"toolbox-access"} onClick={props.handleToolbox}>Collapse</button>
        </div>
    )
}
