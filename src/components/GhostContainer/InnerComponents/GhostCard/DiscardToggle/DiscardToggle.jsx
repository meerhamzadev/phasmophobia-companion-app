import React from 'react';

export default function DiscardToggle(props){
    return(
        <div className={"card-toggle-container"}>
            <label>
                <input type={"checkbox"} value={"discard"} /> Discard ghost
            </label>
        </div>
    )
}
