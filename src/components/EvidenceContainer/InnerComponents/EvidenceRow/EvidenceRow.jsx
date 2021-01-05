import React from 'react';
import ThreeWaySwitch from '../ToggleSwitch/ThreeWaySwitch.jsx';

export default function EvidenceRow(props){
    return(
        <div className={"evidence-row"} key={props.evidenceID}>
            <div className={"evidence-label"}>{props.evidenceLabel}</div>
            <ThreeWaySwitch
                toggleType={"positive-interaction-toggle"}
                key={props.evidenceID}
                positiveEvidence={props.positiveEvidence}
                negativeEvidence={props.negativeEvidence}
                evidenceID={props.evidenceID}
                handleEvidenceToggle={props.handleEvidenceToggle}
            />
        </div>
    )
}
