import React from 'react';

export default function ToolboxHeader(props){
    return(
        <div className={"toolbox-header"}>
            <select onChange={props.handleUtility}>
                <option value={"evidence"}>Evidence</option>
                <option value={"board"}>Whiteboard</option>
                <option value={"info"}>App Information</option>
            </select>
        </div>
    )
}
