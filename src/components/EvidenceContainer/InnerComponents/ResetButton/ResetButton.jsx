import React from 'react';
import './ResetButton.css'

export default function ResetButton(props){
    return(
        <button className={'reset-button'} onClick={props.resetEvidence}>Reset evidence</button>
    )
}
