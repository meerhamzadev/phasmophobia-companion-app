import React, { useState, useEffect } from 'react';
import './ContentContainer.css'

// Components
import MapInformation from "./InnerComponents/MapContent/MapInformation";
import MapList from "./InnerComponents/MapList/MapList";
import ResetButton from "../../../UtilitiesContainer/InnerComponents/ResetButton/ResetButton";

export default function ContentContainer(props){
    const [currentMap, setCurrentMap] = useState('none');

    useEffect(() => {}, [currentMap]);

    const handleCurrentMap = (event) => {
        setCurrentMap(event.target.id);
    }

    const currentMapInformation = currentMap !== 'none'
        ? props.mapData.filter((location) => { return location.id === currentMap })
        : ['none'];

    return (
        <div className={"map-content-container"}>
            <MapList
                mapData={props.mapData}
                activeMap={currentMap}
                handleCurrentMap={handleCurrentMap}
            />
            <MapInformation mapInfo={currentMapInformation} />
            <div className={"map-reference-controls"}>
                <ResetButton text={"Close"} action={props.toggleAction} />
            </div>
        </div>
    )

}
