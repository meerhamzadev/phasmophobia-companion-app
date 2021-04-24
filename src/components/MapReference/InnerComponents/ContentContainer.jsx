import React, { useState } from 'react';

// Components
import MapInformation from "./InnerComponents/MapContent/MapInformation";
import MapList from "./InnerComponents/MapList/MapList";

export default function ContentContainer(props){

    const [currentMap, setCurrentMap] = useState('none');

    const handleCurrentMap = (event) => {
        setCurrentMap(event.target.id);
    }

    const mapList = props.mapData.map((location) => {
        return(
        <MapList
            mapId={location.id}
            mapName={location.name}
            mapSize={location.size}
            handleCurrentMap={handleCurrentMap}
        />)
    });

    const currentMapInformation = currentMap !== 'none'
        ? props.map.filter((location) => { return location.id === currentMap })
        : 'none';

    return (
        <div className={"map-content-container"}>
            { mapList }
            <MapInformation mapInfo={currentMapInformation} />
        </div>
    )

}
