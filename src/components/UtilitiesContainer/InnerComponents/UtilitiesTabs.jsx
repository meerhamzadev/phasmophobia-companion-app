import React from 'react';

export default function UtilitiesTabs(props){
    const evidenceClass = props.currentUtility === "evidence" ? "active-utility-tab" : "utility-tab";
    const timerClass = props.currentUtility === "timer" ? "active-utility-tab" : "utility-tab";
    const boardClass = props.currentUtility === "board" ? "active-utility-tab" : "utility-tab";

    return(
        <div className={"tabs-container"}>
            <button className={evidenceClass} value={"evidence"} onClick={props.handleUtility}>Evidence</button>
            <button className={timerClass} value={"timer"} onClick={props.handleUtility}>Preparation Time</button>
            <button className={boardClass} value={"board"} onClick={props.handleUtility}>Whiteboard</button>
        </div>
    )
}
