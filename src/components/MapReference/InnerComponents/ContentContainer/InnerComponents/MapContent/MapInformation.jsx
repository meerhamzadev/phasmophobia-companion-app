import React from 'react';
import './MapInformation.css'

// Components
import PhotoGallery from "./InnerComponents/PhotoGallery/PhotoGallery";
import DescriptionContainer from "./InnerComponents/DescriptionContainer/DescriptionContainer";

export default function MapInformation(props){
    const noMapSelected = "Select a map on the left hand side to get information for it";
    const relevantMap = props.mapInfo[0];

    const mapInformation = <>
        <DescriptionContainer
            mapName={relevantMap.name}
            mapDescription={relevantMap.description}
            teamSize={relevantMap.recommendedTeamSize}
            items={relevantMap.recommendedItems}
        />
        <PhotoGallery activeMap={relevantMap.id} />
        </>

    return(
        <div className={"map-information"}>
            { relevantMap === "none" ? noMapSelected : mapInformation }
        </div>
    )
}
