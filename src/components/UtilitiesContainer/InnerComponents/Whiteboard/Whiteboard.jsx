import React from 'react';
import ResetButton from "../ResetButton/ResetButton";
import './Whiteboard.css';

export default function Whiteboard(props){
    return(
        <div className={'whiteboard'}>
            <span className={"ghost-name-label"}>Ghost name</span>
                <input
                    className={"ghost-name"}
                    onChange={props.handleWhiteboard}
                    id={"ghost-name"}
                    value={props.whiteboardData.ghostName}
                />
            <div className={"session-objectives"}>
                <h2 className={"board-title"}>Session objectives</h2>
                <span className={"objective"}>Objective 1:</span>
                    <span className={"first-objective"}>Discover what type of Ghost we are dealing with</span>

                <span className={"objective"}>Objective 2:</span>
                    <input
                        type={"text"}
                        className={"objective-selector"}
                        id="objective-two"
                        list={"objective-data"}
                        onChange={props.handleWhiteboard}
                        value={props.whiteboardData.objectiveTwo}
                    />
                <span className={"objective"}>Objective 3:</span>
                    <input
                        type={"text"}
                        className={"objective-selector"}
                        id="objective-three"
                        list={"objective-data"}
                        onChange={props.handleWhiteboard}
                        value={props.whiteboardData.objectiveThree}
                    />
                <span className={"objective"}>Objective 4:</span>
                    <input
                        type={"text"}
                        className={"objective-selector"}
                        id="objective-four"
                        list={"objective-data"}
                        onChange={props.handleWhiteboard}
                        value={props.whiteboardData.objectiveFour}
                    />

                    <div className={"ghost-behavior-controls"}>
                        <span className={"behavior"}>Ghost responds when</span>
                        <select
                            className={"behavior-select"}
                            onChange={props.handleWhiteboard}
                            value={props.whiteboardData.ghostBehavior}
                        >
                            <option value={"Alone"}>Alone</option>
                            <option value={"In group"}>In group</option>
                            <option value={"Unknown"}>Unknown</option>
                        </select>
                    </div>
            </div>
            <ResetButton text={"Reset Objectives"} action={props.clearWhiteboard}/>

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
        </div>
    )
}
