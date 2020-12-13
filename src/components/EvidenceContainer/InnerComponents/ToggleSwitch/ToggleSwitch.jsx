import React from "react";

export default function Switch(props) {
  return (
    <div className="switch-container">
      <label className="switch">
        <input type="checkbox" key={props.evidenceID} onChange={props.handleSwitch} />
        <span className="slider"></span>
      </label>
    </div>
  );
}
