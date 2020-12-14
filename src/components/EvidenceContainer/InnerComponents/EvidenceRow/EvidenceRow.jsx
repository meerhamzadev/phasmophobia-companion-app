import React from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

export default function EvidenceRow(props){
    return(
        <tr key={props.evidenceID}>
            <td>{props.evidenceLabel}</td>
            <td><ToggleSwitch key={props.evidenceID} evidenceID={props.evidenceID} handleToggle={props.handleToggle} /></td>
            <td><input
                    type="checkbox"
                    className={"ghost-no-interaction"}
                    id={props.evidenceID}
                    value={props.evidenceID}
                    onChange={props.handleNegative}
            />
                Negative interaction
            </td>
        </tr>
    )
}
