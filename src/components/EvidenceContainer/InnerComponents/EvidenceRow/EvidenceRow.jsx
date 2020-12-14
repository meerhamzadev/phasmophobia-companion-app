import React from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

export default function EvidenceRow(props){
    return(
        <tr key={props.evidenceID}>
            <td>{props.evidenceLabel}</td>
            <td>
                <ToggleSwitch
                    toggleType={"positive"}
                    key={props.evidenceID}
                    evidenceID={props.evidenceID}
                    handleToggle={props.handleToggle}
                />
            </td>
            <td>
                <ToggleSwitch
                    toggleType={"negative"}
                    id={props.evidenceID}
                    value={props.evidenceID}
                    onChange={props.handleNegative}
                />
            </td>
        </tr>
    )
}
