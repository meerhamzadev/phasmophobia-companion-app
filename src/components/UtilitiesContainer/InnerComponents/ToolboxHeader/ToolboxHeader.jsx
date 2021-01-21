import React from 'react';
import './ToolboxHeader.css'

export default function ToolboxHeader(props){
    return(
        <div className={"toolbox-header"}>
            <select className={"header-option"} onChange={props.handleUtility}>
                <option value={"evidence"}>Evidence</option>
                <option value={"board"}>Whiteboard</option>
                <option value={"info"}>App Information</option>
            </select>

            <button className={"hide-toolbox"} onClick={props.handleToolbox}>Hide</button>
        </div>
    )
}
