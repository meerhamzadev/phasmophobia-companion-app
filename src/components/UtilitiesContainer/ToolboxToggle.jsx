import React from 'react';
import './ToolboxToggle.css'

export default function ToolboxToggle(props){
    return(
        <button className={'toolbox'} onClick={props.handleToolbox}>
            Whiteboard
        </button>
    )
}
