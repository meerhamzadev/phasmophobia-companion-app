import React from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

export default function EvidenceRow(props){

    const testChange = (event) => {
        console.log("Change detected on ID ", event.target.value)
    }

    return(
        <tr key={props.evidenceID}>
            <td>{props.evidenceLabel}</td>
            <td><ToggleSwitch key={props.evidenceID} evidenceID={props.evidenceID} handleToggle={props.handleToggle} /></td>
            <td><input type="checkbox" className={"ghost-no-interaction"} id={props.evidenceID} />Negative interaction</td>
        </tr>
    )
}