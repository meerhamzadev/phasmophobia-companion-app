import React from 'react';
import {PositiveSwitch, NegativeSwitch} from '../ToggleSwitch/ToggleSwitch';

export default function EvidenceRow(props){
    return(
        <tr className={"evidence-row"} key={props.evidenceID}>
            <td className={"evidence-label"}>{props.evidenceLabel}</td>
            <td className={"positive-switch-container"}>
                <PositiveSwitch
                    toggleType={"positive-interaction-toggle"}
                    key={props.evidenceID}
                    evidenceID={props.evidenceID}
                    handlePositive={props.handlePositive}
                />
            </td>
            <td className={"negative-switch-container"}>
                <NegativeSwitch
                    toggleType={"negative-interaction-toggle"}
                    key={props.evidenceID}
                    evidenceID={props.evidenceID}
                    handleNegative={props.handleNegative}
                />
            </td>
        </tr>
    )
}
