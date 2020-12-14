import React, { useState, useEffect } from 'react';
import EvidenceContainer from "./components/EvidenceContainer/EvidenceContainer";

// Data
import ghostData from './utils/ghostData.json';

// Styling
import './App.css';

function App() {
    const allGhostIDs = ghostData.ghosts.map((ghost) => {
        return ghost.id
    })

    // Evidence handlers
    const [activeToggles, setActiveToggles] = useState([])
    const [negativeEvidence, setNegativeEvidence] = useState([])

    // Possible outputs
    const [detectedGhost, setDetectedGhost] = useState('');
    const [possibleGhosts, setPossibleGhosts] = useState(allGhostIDs);
    const [negativeGhosts, setNegativeGhosts] = useState([]);

    useEffect(() => {
        for(let i = 0; i < allGhostIDs; i++){
            for(let j = 0; j < activeToggles; i++){

            }

            for(let k = 0; k < negativeEvidence; k++){
                ghostData.ghosts[i].evidence.includes(negativeEvidence[k]) ? setNegativeGhosts([...negativeGhosts]) : null;
            }
        }
    }, [activeToggles, negativeEvidence])

    const handleToggle = (event) => {
        if(activeToggles.includes(event.target.value)){
            let targetIndex = activeToggles.indexOf(event.target.value)
            let tempArray = [...activeToggles]

            tempArray.splice(targetIndex, 1)

            setActiveToggles([...tempArray])
        } else {
            setActiveToggles([...activeToggles, event.target.value])
        }
    }

    const handleNegative = (event) => {
        if(negativeEvidence.includes(event.target.value)){
            let targetIndex = negativeEvidence.indexOf(event.target.value)
            let tempArray = [...negativeEvidence]

            tempArray.splice(targetIndex, 1)
            setNegativeEvidence([...tempArray])
        } else {
            setNegativeEvidence([...negativeEvidence], event.target.value)
        }
    }



  return (
    <div className="App">

        <h2>Active evidence: {activeToggles}</h2>

        <EvidenceContainer
            ghostData={ghostData}
            handleToggle={handleToggle}
            handleNegative={handleNegative}
            allOptionsUsed={ activeToggles.length === 3 ? true : false }
            activeToggles={activeToggles}
        />
    </div>
  );
}

export default App;
