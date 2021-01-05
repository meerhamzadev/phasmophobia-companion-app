import React, { useState, useEffect } from 'react';
import './ThreeWaySwitch.css';

export default function AlternateSwitch(props){

    const [toggleType, setToggleType] = useState([]);

    useEffect(() => {
        let positive = props.positiveEvidence.includes(props.evidenceID)
        let negative = props.negativeEvidence.includes(props.evidenceID)

        if(positive){
            setToggleType(["left-edge-inactive", "center-inactive", "right-edge-active"])
        }

        if(negative){
            setToggleType(["left-edge-active", "center-inactive", "right-edge-inactive"])
        }

        if(!positive && !negative){
            setToggleType(["left-edge-inactive", "center-active", "right-edge-inactive"])
        }
    }, [props]);


    return(
        <div className={'switch-container'} role={"group"}>
            <label className={toggleType[0]}>
                <input className={"interaction-handle"} type="radio" name="options" id={props.evidenceID} value={0} onChange={props.handleEvidenceToggle} /> Zero Interaction </label>
            <label className={toggleType[1]}>
                <input className={"interaction-handle"} type="radio" name="options" id={props.evidenceID} value={1} onChange={props.handleEvidenceToggle} /> Unknown </label>
            <label className={toggleType[2]}>
                <input className={"interaction-handle"} type="radio" name="options" id={props.evidenceID} value={2} onChange={props.handleEvidenceToggle} /> Interaction </label>
        </div>
    )
}
