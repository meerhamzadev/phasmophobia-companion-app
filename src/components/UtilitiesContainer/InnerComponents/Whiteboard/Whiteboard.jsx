import React from 'react';

export default function Whiteboard(props){
    console.log(props.whiteboardData)

    return(
        <div className={'white-board'}>
            <span className={"ghost-name-label"}>Ghost name:</span>
                <input
                    className={"ghost-name"}
                    onKeyDown={props.handleWhiteboard}
                    id={"ghost-name"}
                    value={props.whiteboardData.ghostName}
                />

            <h2 className={"board-title"}>Session objectives</h2>
            <span className={"objective"}>Objective 1:</span>
                <span className={"first-objective"}>Discover what type of Ghost we are dealing with</span>

            <span className={"objective"}>Objective 2:</span>
                <input
                    type={"text"}
                    id="objective-two"
                    list={"objective-data"}
                    onChange={props.handleWhiteboard}
                />
            <span className={"objective"}>Objective 3:</span>
                <input
                    type={"text"}
                    id="objective-three"
                    list={"objective-data"}
                    onChange={props.handleWhiteboard}
                />
            <span className={"objective"}>Objective 4:</span>
                <input
                    type={"text"}
                    id="objective-four"
                    list={"objective-data"}
                    onChange={props.handleWhiteboard}
                />

            <datalist id={"objective-data"}>
                <option value={"Have a member of your team witness a Ghost Event"} />
                <option value={"Capture a photo of the Ghost"} />
                <option value={"Capture a photo of Dirty Water in a sink"} />
                <option value={"Find evidence of the paranormal with an EMF Reader"} />
                <option value={"Detect a room below 10 Celsius/50 Fahrenheit with a Thermometer"} />
                <option value={"Detect a Ghosts presence with a Motion Sensor"} />
                <option value={"Cleanse the area near the Ghost using Smudge Sticks"} />
                <option value={"Prevent the Ghost from hunting with a Crucifix"} />
                <option value={"Get a Ghost to walk through Salt"} />
            </datalist>

            <div className={"ghost-behavior-container"}>
                <span className={"ghost-behavior-label"}>Ghost responds to</span>

                <input type={"radio"} className={"ghost-behavior-radio"} id="individuals" name={"behavior"} value={"individuals"} onChange={props.handleWhiteboard} />
                <label>Individuals</label>

                <input type={"radio"} className={"ghost-behavior-radio"} id="groups" name={"behavior"} value={"groups"} onChange={props.handleWhiteboard} />
                <label>Groups</label>
            </div>
        </div>
    )
}
