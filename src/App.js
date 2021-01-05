import React, { useState, useEffect } from 'react';

// Analytics
import ReactGA from 'react-ga';

// Components
import EvidenceContainer from "./components/EvidenceContainer/EvidenceContainer";
import GhostContainer from "./components/GhostContainer/GhostContainer";
import HuntCountdown from './components/HuntCountdown/HuntCountdown';

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

    const handleEvidenceToggle = (event) => {
        console.log(event.target);
    }

    const handleNeutralEvidence = (evidenceId) => {
        if(positiveEvidence.includes(evidenceId)){
            let targetIndex = positiveEvidence.indexOf(evidenceId);
            let tempArray = [...positiveEvidence];

            tempArray.splice(targetIndex, 1);

            setPositiveEvidence([...tempArray], stateUpdater());
        }

        if(negativeEvidence.includes(evidenceId)){
            let targetIndex = negativeEvidence.indexOf(evidenceId);
            let tempArray = [...negativeEvidence];

            tempArray.splice(targetIndex, 1);

            setNegativeEvidence([...tempArray], stateUpdater());
        }
    }

    const handlePositiveEvidence = (evidenceId) => {
        if(positiveEvidence.includes(evidenceId)){
            let targetIndex = positiveEvidence.indexOf(evidenceId);
            let tempArray = [...positiveEvidence];

            tempArray.splice(targetIndex, 1);

            setPositiveEvidence([...tempArray], stateUpdater());
        } else {
            setPositiveEvidence([...positiveEvidence, evidenceId], stateUpdater());
        }
    }

    const handleNegativeEvidence = (evidenceId) => {
        if(negativeEvidence.includes(evidenceId)){
            let targetIndex = negativeEvidence.indexOf(evidenceId);
            let tempArray = [...negativeEvidence];

            tempArray.splice(targetIndex, 1);

            setNegativeEvidence([...tempArray], stateUpdater());
        } else {
            setNegativeEvidence([...negativeEvidence, evidenceId], stateUpdater());
        }
    }

    const stateUpdater = () => {
        const result = fullOutput(positiveEvidence, negativeEvidence, ghostData.ghosts);

        setDetectedGhost(result.positiveID);
        setPossibleGhosts(result.possibleGhosts);
        setNegativeGhosts(result.eliminatedGhosts);
        setMessageToUser(result.message);
    }

    const resetEvidence = () => {
        window.location.reload();
    }

  return (
    <div className="App">
        <img alt={"Phasmophobia logo"} className={'phasmophobia-logo'} src={logo} />
        <h1>Unofficial Phasmophobia Companion App (Journal)</h1>

        <EvidenceContainer
            evidence={ghostData.evidences}
            handleEvidenceToggle={handleEvidenceToggle}
            allOptionsUsed={positiveEvidence.length === 3}
            positiveEvidence={positiveEvidence}
            negativeEvidence={negativeEvidence}
            resetEvidence={resetEvidence}
        />

        <GhostContainer
            ghosts={ghostData.ghosts}
            evidence={ghostData.evidences}
            positiveID={detectedGhost}
            possibleGhosts={possibleGhosts}
            negativeGhosts={negativeGhosts}
            message={messageToUser}
        />

        <HuntCountdown />
    </div>
  );
}

export default App;
