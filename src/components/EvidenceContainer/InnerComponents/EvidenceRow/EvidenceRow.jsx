import React from 'react';
import {PositiveSwitch, NegativeSwitch} from '../ToggleSwitch/ToggleSwitch';

export default function EvidenceRow(props){

    //uniqueGhostIDs.filter((id) => id !== foundGhost);

    const commonQuantityInNegative = props.negativeEvidence.filter((id) => id === props.evidenceID);
    const commonQuantityInPositive = props.positiveEvidence.filter((id) => id === props.evidenceID);

    const positiveSwitchEnabled = commonQuantityInNegative ? false : true;
    const negativeSwitchEnabled = commonQuantityInPositive ? false : true;

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
