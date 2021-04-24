import React from 'react';

// Data
import mapData from '../../utils/data/mapData.json';

// Components
import BlackenedBackground from "./InnerComponents/BlackenedBackground";
import ContentContainer from "./InnerComponents/ContentContainer";

export default function MapReference(){
    return (
        <div className={"map-reference-main-container"}>
            <BlackenedBackground />
            <ContentContainer mapData={mapData.maps} />
        </div>
    )
}
