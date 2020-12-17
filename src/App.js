import React, { useState, useEffect } from 'react';
import EvidenceContainer from "./components/EvidenceContainer/EvidenceContainer";
import GhostContainer from "./components/GhostContainer/GhostContainer";

// Data
import ghostData from './utils/data/ghostData.json';

// Auxiliary functions
import fullOutput from './utils/auxiliaryFunctions/outcomeChecker';

// Styling
import logo from './images/logos/logo.png';
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
    const [messageToUser, setMessageToUser] = useState('');

    useEffect(() => {
        const result = fullOutput(positiveEvidence, negativeEvidence, ghostData.ghosts)

        if(result.positiveID){
            setDetectedGhost(result.positiveID);
        }

        setPossibleGhosts(result.possibilities);
        setNegativeGhosts(result.negativeValue);
        setMessageToUser(result.message);
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
        <img src={logo} />
        <h1>Unofficial Phasmophobia Companion App (Journal)</h1>

        <EvidenceContainer
            evidence={ghostData.evidences}
            handlePositive={handlePositive}
            handleNegative={handleNegative}
            allOptionsUsed={ positiveEvidence.length === 3 }
            positiveEvidence={positiveEvidence}
            negativeEvidence={negativeEvidence}
        />

        <GhostContainer
            ghosts={ghostData.ghosts}
            positiveID={detectedGhost}
            possibleGhosts={possibleGhosts}
            negativeGhosts={negativeGhosts}
            message={messageToUser}
        />
    </div>
  );
}

export default App;
