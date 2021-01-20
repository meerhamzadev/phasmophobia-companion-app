import React from 'react';

export default function ToolboxHeader(props){
    //<button className={"toolbox-access"} value={"timer"} onClick={props.handleUtility}>Timer</button>
    //<button className={"toolbox-access"} value={"board"} onClick={props.handleUtility}>Whiteboard</button>

    return(
        <div className={"toolbox-header"}>
            <button
                className={props.currentUtility === 'evidence' ? 'active-toolbox-access' : 'toolbox-access'}
                value={"evidence"}
                onClick={props.handleUtility}
            >
                    Evidence
            </button>
            <button
                className={props.currentUtility === 'info' ? 'active-toolbox-access' : 'toolbox-access'}
                value={"info"}
                onClick={props.handleUtility}
            >
                    App Info
            </button>
            <button className={"toolbox-access"} onClick={props.handleToolbox}>Collapse</button>
        </div>
    )
}
