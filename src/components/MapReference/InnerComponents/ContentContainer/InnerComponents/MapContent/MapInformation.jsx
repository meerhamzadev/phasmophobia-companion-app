import React from 'react';
import './MapInformation.css'

// Components
import PhotoGallery from "./InnerComponents/PhotoGallery/PhotoGallery";
import DescriptionContainer from "./InnerComponents/DescriptionContainer/DescriptionContainer";

export default function MapInformation(props){
    const noMapSelected = <div className={"map-information-null"}><span className={"no-info-text"}>Select a map on the left hand side to get information for it</span></div>
    const relevantMap = props.mapInfo[0];

    const mapInformation = <div className={"map-information"}>
        <DescriptionContainer
            mapName={relevantMap.name}
            mapDescription={relevantMap.description}
            teamSize={relevantMap.recommendedTeamSize}
            items={relevantMap.recommendedItems}
        />
        <PhotoGallery activeMap={relevantMap.id} />
        </div>

    return relevantMap === "none" ? noMapSelected : mapInformation
}
