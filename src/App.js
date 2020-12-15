import React, { useState, useEffect } from 'react';
import EvidenceContainer from "./components/EvidenceContainer/EvidenceContainer";

// Data
import ghostData from './utils/data/ghostData.json';

// Auxiliary functions
import fullOutput from './utils/auxiliaryFunctions/outcomeChecker';

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
        const result = fullOutput(positiveEvidence, negativeEvidence, ghostData.ghosts)
        console.log(result)

        setDetectedGhost(result.positiveID);
        setPossibleGhosts(result.possibilities);
        setNegativeGhosts(result.negativeValue);
    }, [positiveEvidence, negativeEvidence])

    const handlePositive = (event) => {

        const targetValue = parseInt(event.target.value);

        if(positiveEvidence.includes(targetValue)){
            let targetIndex = positiveEvidence.indexOf(targetValue)
            let tempArray = [...positiveEvidence]

            tempArray.splice(targetIndex, 1)

            setPositiveEvidence([...tempArray])
        } else {
            setPositiveEvidence([...positiveEvidence, targetValue])
        }
    }

    const handleNegative = (event) => {

        const targetValue = parseInt(event.target.value);

        if(negativeEvidence.includes(targetValue)){
            let targetIndex = negativeEvidence.indexOf(targetValue)
            let tempArray = [...negativeEvidence]

            tempArray.splice(targetIndex, 1)

            setNegativeEvidence([...tempArray])
        } else {
            setNegativeEvidence([...negativeEvidence, targetValue])
        }
    }

  return (
    <div className="App">

        <h2>Active evidence: {positiveEvidence}</h2>
        <h2>Negative evidence: {negativeEvidence}</h2>

        <hr />

        <h3>Positive ID: {detectedGhost}</h3>
        <h3>Potentials: {possibleGhosts}</h3>
        <h3>Eliminated: {negativeGhosts}</h3>

        <EvidenceContainer
            ghostData={ghostData}
            handlePositive={handlePositive}
            handleNegative={handleNegative}
            allOptionsUsed={ positiveEvidence.length === 3 }
            positiveEvidence={positiveEvidence}
            negativeEvidence={negativeEvidence}
        />
    </div>
  );
}

export default App;
