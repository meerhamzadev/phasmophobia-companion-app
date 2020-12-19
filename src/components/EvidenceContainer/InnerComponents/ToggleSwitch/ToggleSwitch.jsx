import React from "react";
import './ToggleSwitch.css'

function PositiveSwitch(props) {
    return(
        <div className="switch-container">
            <label className="switch">
                <input type="checkbox"
                       className={props.toggleType}
                       value={props.evidenceID}
                       onChange={props.handlePositive}
                />
                <span className="slider"></span>
            </label>
        </div>
    )
}

function NegativeSwitch(props){
        return(
        <div className="switch-container">
            <label className="switch">
                <input type="checkbox"
                       className={props.toggleType}
                       value={props.evidenceID}
                       onChange={props.handleNegative}
                />
                <span className="slider"></span>
            </label>
        </div>
    )
}

export {
    PositiveSwitch,
    NegativeSwitch
}
