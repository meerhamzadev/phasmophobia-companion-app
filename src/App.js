import React, { useState, useEffect } from 'react';

// Analytics
import ReactGA from 'react-ga';

// Components
import EvidenceContainer from "./components/EvidenceContainer/EvidenceContainer";
import GhostContainer from "./components/GhostContainer/GhostContainer";
import EvidenceTrigger from "./components/EvidenceTrigger/EvidenceTrigger";

// Data
import ghostData from './utils/data/ghostData.json';
import googleId from "./utils/google-analytics-sensitive/gaConfiguration";

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
    const [evidenceLogger, setEvidenceLogger] = useState(false);
    const [positiveEvidence, setPositiveEvidence] = useState([]);
    const [negativeEvidence, setNegativeEvidence] = useState([]);

    // Possible outputs
    const [detectedGhost, setDetectedGhost] = useState('');
    const [possibleGhosts, setPossibleGhosts] = useState(allGhostIDs);
    const [negativeGhosts, setNegativeGhosts] = useState([]);
    const [messageToUser, setMessageToUser] = useState('');

    useEffect(() => {
        ReactGA.initialize(googleId);
        ReactGA.pageview('/');

        stateUpdater()

    }, [positiveEvidence, negativeEvidence]);

    const handlePositive = (event) => {
        const targetValue = parseInt(event.target.value);

        if(positiveEvidence.includes(targetValue)){
            let targetIndex = positiveEvidence.indexOf(targetValue);
            let tempArray = [...positiveEvidence];

            tempArray.splice(targetIndex, 1);

            setPositiveEvidence([...tempArray], stateUpdater());
        } else {
            setPositiveEvidence([...positiveEvidence, targetValue], stateUpdater());
        }
    }

    const handleNegative = (event) => {
        const targetValue = parseInt(event.target.value);

        if(negativeEvidence.includes(targetValue)){
            let targetIndex = negativeEvidence.indexOf(targetValue);
            let tempArray = [...negativeEvidence];

            tempArray.splice(targetIndex, 1);

            setNegativeEvidence([...tempArray], stateUpdater());
        } else {
            setNegativeEvidence([...negativeEvidence, targetValue], stateUpdater());
        }
    }

    const handleEvidenceLogger = () => {
        setEvidenceLogger(!evidenceLogger);
    }

    const resetApplication = () => {
        window.location.reload(false);
    }

    const stateUpdater = () => {
        const result = fullOutput(positiveEvidence, negativeEvidence, ghostData.ghosts);

        setDetectedGhost(result.positiveID);
        setPossibleGhosts(result.possibleGhosts);
        setNegativeGhosts(result.eliminatedGhosts);
        setMessageToUser(result.message);
    }

  return (
    <div className="App">
        <img src={logo} />
        <h1>Unofficial Phasmophobia Companion App (Journal)</h1>

        <EvidenceTrigger handleEvidenceLogger={handleEvidenceLogger} />

        {!evidenceLogger
            ? null
            : <EvidenceContainer
            handleEvidenceLogger={handleEvidenceLogger}
            evidence={ghostData.evidences}
            handlePositive={handlePositive}
            handleNegative={handleNegative}
            resetApplication={resetApplication}
            allOptionsUsed={positiveEvidence.length === 3}
            positiveEvidence={positiveEvidence}
            negativeEvidence={negativeEvidence}
        />}

        <GhostContainer
            ghosts={ghostData.ghosts}
            evidence={ghostData.evidences}
            positiveID={detectedGhost}
            possibleGhosts={possibleGhosts}
            negativeGhosts={negativeGhosts}
            message={messageToUser}
        />
    </div>
  );
}

export default App;
