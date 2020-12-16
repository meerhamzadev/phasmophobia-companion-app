import React from 'react';

export default function ImportantInformation(props){
    return(
        <div className={"important-information-container"}>
            <div className={"important-information-bubble"}>
                <div className={"important-information-content"}>
                    <h2>Important Information</h2>
                    <ul>
                        <li>Ghosts cannot be visually recognized. The photos shown here are merely for illustration purposes</li>
                        <li>It may take a while until a ghost interacts with an evidence, so careful when tagging evidence for no interaction</li>
                    </ul>
                </div>
                <div className={"important-information-controls"}>
                    <button className={"modal-close"} />
                </div>
            </div>
        </div>
    )
}
