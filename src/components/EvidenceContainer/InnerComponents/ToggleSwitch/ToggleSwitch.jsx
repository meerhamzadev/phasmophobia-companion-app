import React from "react";

export default function Switch(props) {
  return (
    <div className="switch-container">
      <label className="switch">
        <input type="checkbox" value={props.evidenceID} onChange={props.handleToggle} />
        <span className="slider"></span>
      </label>
    </div>
  );
}
