import React, { useState } from 'react';
import EvidenceContainer from "./components/EvidenceContainer/EvidenceContainer";

// Data
import ghostData from './utils/data/ghostData.json';

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

    const handlePositive = (event) => {
        if(positiveEvidence.includes(event.target.value)){
            let targetIndex = positiveEvidence.indexOf(event.target.value)
            let tempArray = [...positiveEvidence]

            tempArray.splice(targetIndex, 1)

            setPositiveEvidence([...tempArray], outcomeChecker())
        } else {
            setPositiveEvidence([...positiveEvidence, parseInt(event.target.value)], outcomeChecker())
        }
    }

    const handleNegative = (event) => {
        if(negativeEvidence.includes(event.target.value)){
            let targetIndex = negativeEvidence.indexOf(event.target.value)
            let tempArray = [...negativeEvidence]

            tempArray.splice(targetIndex, 1)

            setNegativeEvidence([...tempArray], outcomeChecker())
        } else {
            setNegativeEvidence([...negativeEvidence, parseInt(event.target.value)], outcomeChecker())
        }
    }

    const outcomeChecker = () => {
        let positiveID

        let negativeArray = ghostData.ghosts.map((ghost) => {
            let intersection = ghost.evidence.filter(evidence => negativeEvidence.includes(evidence));
            let output = intersection.length > 0 ? ghost.id : null;

            return output
        })

        let positiveArray = ghostData.ghosts.map((ghost) => {
            let intersection = ghost.evidence.filter(evidence => positiveEvidence.includes(evidence));
            console.log("Intersection", intersection)

            if(intersection.length === 3){
                positiveID = ghost.id
                console.log(positiveID)
                negativeArray = allGhostIDs.filter((id) => id !== ghost.id)
                console.log("Negative array", negativeArray)
            } else {
                let output = intersection ? ghost.id : null;
                return output
            }
        });

        let positiveOutput = positiveID ? positiveID : null;

        setDetectedGhost(positiveOutput);
        setNegativeGhosts([...negativeArray]);
        setPossibleGhosts([...positiveArray]);
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
            allOptionsUsed={ positiveEvidence.length === 3 ? true : false }
            positiveEvidence={positiveEvidence}
            negativeEvidence={negativeEvidence}
        />
    </div>
  );
}

export default App;
