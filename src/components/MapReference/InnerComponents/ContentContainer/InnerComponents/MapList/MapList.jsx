import React from 'react';
import MapListItem from "./MapListItem";
import './MapList.css';

export default function MapList(props){

    const listItems = props.mapData.map((location) => {
        return <MapListItem
            mapId={location.id}
            mapName={location.name}
            handleCurrentMap={props.handleCurrentMap}
        />
    })

    return (
        <ul className={"map-list"}>
            <h3>Available maps</h3>
            {listItems}
        </ul>
    )
}
