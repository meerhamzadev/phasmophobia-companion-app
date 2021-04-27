import React, { useState, useEffect } from 'react';
import './ContentContainer.css'

// Components
import MapInformation from "./InnerComponents/MapContent/MapInformation";
import MapList from "./InnerComponents/MapList/MapList";

export default function ContentContainer(props){
    const [currentMap, setCurrentMap] = useState('none');

    useEffect(() => {}, [currentMap]);

    const handleCurrentMap = (event) => {
        setCurrentMap(event.target.id);
    }

    const currentMapInformation = currentMap !== 'none'
        ? props.mapData.filter((location) => { return location.id === currentMap })
        : 'none';

    return (
        <div className={"map-content-container"}>
            <MapList
                mapData={props.mapData}
                handleCurrentMap={handleCurrentMap}
            />
            <MapInformation mapInfo={currentMapInformation} />
        </div>
    )

}
