import React, { useState, useEffect } from 'react';

export default function PossibilityContainer(props){

    const [ghostFound, setGhostFound] = useState(false);

    useEffect(() => {
        props.evidenceList.length === 3 ? setGhostFound(true) : setGhostFound(false)
    }, [props])

    return(
        <div className={"possibility-container"}>
            <h2>{ghostFound ? "... it could be on of these:" : "You're dealing with a:"}</h2>
        </div>
    )
}