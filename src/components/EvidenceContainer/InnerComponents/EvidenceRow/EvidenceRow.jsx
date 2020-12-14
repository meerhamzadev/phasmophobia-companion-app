import React from 'react';
import {PositiveSwitch, NegativeSwitch} from '../ToggleSwitch/ToggleSwitch';

export default function EvidenceRow(props){
    const positiveSwitchEnabled = "test";
    const negativeSwitchEnabled = "test"

    return(
        <tr key={props.evidenceID}>
            <td>{props.evidenceLabel}</td>
            <td>
                <PositiveSwitch
                    toggleType={"positive-interaction-toggle"}
                    key={props.evidenceID}
                    evidenceID={props.evidenceID}
                    handlePositive={props.handlePositive}
                />
            </td>
            <td>
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
