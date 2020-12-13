import React from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

export default function EvidenceRow(props){
    return(
        <tr key={props.evidenceID}>
            <td>{props.evidenceName}</td>
            <td><ToggleSwitch evidenceID={props.evidenceID} /></td>
            <td><input type="checkbox" className={"ghost-no-interaction"} id={"props.evidenceID"} />Ghost definitely <b>DID NOT</b> interact with it</td>
        </tr>
    )
}