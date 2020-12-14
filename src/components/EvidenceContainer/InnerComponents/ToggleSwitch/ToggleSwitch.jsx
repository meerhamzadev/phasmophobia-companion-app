import React from "react";

export default function Switch(props) {

    const checkClass = props.toggleType == "positive" ? "positive-interaction-toggle" : "negative-interaction-toggle";

    return (
        <div className="switch-container">
          <label className="switch">
            <input type="checkbox" className={checkClass} value={props.evidenceID} onChange={props.handleToggle} />
            <span className="slider"></span>
          </label>
        </div>
      );
}
