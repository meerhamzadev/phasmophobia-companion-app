import React from 'react';
import './MapReference.css';

// Data
import mapData from '../../utils/data/mapData.json';

// Components
import BlackenedBackground from "./InnerComponents/BlackenedBackground/BlackenedBackground";
import ContentContainer from "./InnerComponents/ContentContainer/ContentContainer";

export default function MapReference(props){
    return (
        <div className={"map-reference-main-container"}>
            <ContentContainer mapData={mapData.maps} toggleAction={props.toggleAction} />
            <BlackenedBackground />
        </div>
    )
}
