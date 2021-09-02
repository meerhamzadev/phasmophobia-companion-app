import React from 'react';
import ThreeWaySwitch from '../ToggleSwitch/ThreeWaySwitch.jsx';
import ProbabilityIndicator from "../ProbabilityIndicator/ProbabilityIndicator";

export default function EvidenceRow(props){
    return(
        <div className={"evidence-row"} key={props.evidenceID}>
            <div className={"evidence-label"}>{props.evidenceLabel}</div>
            <ProbabilityIndicator probability={(props.evidenceProbability * 100).toFixed(0)}/>
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
