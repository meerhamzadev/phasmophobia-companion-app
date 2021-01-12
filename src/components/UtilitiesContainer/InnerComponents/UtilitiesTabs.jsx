import React from 'react';

export default function UtilitiesTabs(props){
    return(
        <div className={"tabs-container"}>
            <button className={"utility-tab"} value={"evidence"} onClick={props.handleUtility}>Evidence</button>
            <button className={"utility-tab"} value={"timer"} onClick={props.handleUtility}>Preparation Time</button>
            <button className={"utility-tab"} value={"board"} onClick={props.handleUtility}>Whiteboard</button>
        </div>

    )
}
