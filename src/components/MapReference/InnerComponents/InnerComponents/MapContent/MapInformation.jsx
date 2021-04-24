import React from 'react';

// Components
import PhotoGallery from "./InnerComponents/PhotoGallery/PhotoGallery";
import DescriptionContainer from "./InnerComponents/DescriptionContainer/DescriptionContainer";

export default function MapInformation(props){
    const noMapSelected = "Select a map on the left hand side to get information for it";

    const mapInformation = <>
        <DescriptionContainer
            mapName={props.mapInfo.name}
            mapDescription={props.mapInfo.description}
            teamSize={props.mapInfo.recommendedTeamSize}
            items={props.mapInfo.recommendedItems}
        />
        <PhotoGallery mapId={props.mapInfo.id} />
        </>

    return(
        <div className={"map-information"}>
            { props.mapInfo === "none" ? noMapSelected : mapInformation }
        </div>
    )
}
