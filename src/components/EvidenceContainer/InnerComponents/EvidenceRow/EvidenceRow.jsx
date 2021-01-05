import React from 'react';
import {PositiveSwitch, NegativeSwitch} from '../ToggleSwitch/ToggleSwitch';
import ThreeWaySwitch from '../ToggleSwitch/ThreeWaySwitch.jsx';

export default function EvidenceRow(props){
    return(
        <tr className={"evidence-row"} key={props.evidenceID}>
            <td className={"evidence-label"}>{props.evidenceLabel}</td>
            <td className={"switch-container"}>
                <ThreeWaySwitch
                    toggleType={"positive-interaction-toggle"}
                    key={props.evidenceID}
                    positiveEvidence={props.positiveEvidence}
                    negativeEvidence={props.negativeEvidence}
                    evidenceID={props.evidenceID}
                    handleEvidenceToggle={props.handleEvidenceToggle}
                />
            </td>
        </tr>
    )
}
