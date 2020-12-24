import React from 'react';
import {PositiveSwitch, NegativeSwitch} from '../ToggleSwitch/ToggleSwitch';

export default function EvidenceRow(props){
    return(
        <div className={"evidence-row"} key={props.evidenceID}>
            <div className={"evidence-label"}>{props.evidenceLabel}</div>
            <div className={"positive-switch-container"}>
                <div className={"positive-label"}>
                    Positive
                </div>
                <PositiveSwitch
                    toggleType={"positive-interaction-toggle"}
                    key={props.evidenceID}
                    evidenceID={props.evidenceID}
                    handlePositive={props.handlePositive}
                />
            </div>
            <div className={"negative-switch-container"}>
                <div className={"negative-label"}>
                    Negative
                </div>
                <NegativeSwitch
                    toggleType={"negative-interaction-toggle"}
                    key={props.evidenceID}
                    evidenceID={props.evidenceID}
                    handleNegative={props.handleNegative}
                />
            </div>
        </div>
    )
}
