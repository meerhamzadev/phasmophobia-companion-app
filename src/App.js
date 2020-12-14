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
    const [positiveEvidence, setPositiveEvidence] = useState([])
    const [negativeEvidence, setNegativeEvidence] = useState([])

    // Possible outputs
    const [detectedGhost, setDetectedGhost] = useState('');
    const [possibleGhosts, setPossibleGhosts] = useState(allGhostIDs);
    const [negativeGhosts, setNegativeGhosts] = useState([]);

    useEffect(() => {

    }, [positiveEvidence, negativeEvidence])

    const handleToggle = (event) => {
        if(positiveEvidence.includes(event.target.value)){
            let targetIndex = positiveEvidence.indexOf(event.target.value)
            let tempArray = [...positiveEvidence]

            tempArray.splice(targetIndex, 1)

            setPositiveEvidence([...tempArray])
        } else {
            setPositiveEvidence([...positiveEvidence, event.target.value])
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

        <h2>Active evidence: {positiveEvidence}</h2>

        <EvidenceContainer
            ghostData={ghostData}
            handleToggle={handleToggle}
            handleNegative={handleNegative}
            allOptionsUsed={ positiveEvidence.length === 3 ? true : false }
            positiveEvidence={positiveEvidence}
            negativeEvidence={negativeEvidence}
        />
    </div>
  );
}

export default App;
