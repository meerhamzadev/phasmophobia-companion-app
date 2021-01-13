import React, { useState, useEffect } from 'react';

// Analytics
import ReactGA from 'react-ga';

// Components
import GhostContainer from "./components/GhostContainer/GhostContainer";
import UtilitiesContainer from './components/UtilitiesContainer/UtilitiesContainer';

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

    // Current utility
    const [currentUtility, setCurrentUtility] = useState("evidence")

    // Whiteboard Data
    const [ghostName, setGhostName] = useState('');
    const [objectiveTwo, setObjectiveTwo] = useState('');
    const [objectiveThree, setObjectiveThree] = useState('');
    const [objectiveFour, setObjectiveFour] = useState('');
    const [ghostBehavior, setGhostBehavior] = useState('');
    const [whiteboardData, setWhiteboardData] = useState({});

    useEffect(() => {
        ReactGA.initialize(googleId);
        ReactGA.pageview('/');

        stateUpdater()

    }, [positiveEvidence, negativeEvidence]);

    const handleUtility = (event) => {
        currentUtility === event.target.value
            ? setCurrentUtility("none")
            : setCurrentUtility(event.target.value);
    }

    const handleWhiteboard = (event) => {
        event.stopPropagation()
        if(event.target.id === "ghost-name"){
            setGhostName(event.target.value);
        }

        if(event.target.id === "objective-two"){
            setObjectiveTwo(event.target.value);
        }

        if(event.target.id === "objective-three"){
            setObjectiveThree(event.target.value);
        }

        if(event.target.id === "objective-four"){
            setObjectiveFour(event.target.value);
        }

        if(event.target.id === "individuals" || event.target.id === "groups"){
            setGhostBehavior(event.target.value);
        }

        setWhiteboardData({
            'ghostName': ghostName,
            'objectiveTwo': objectiveTwo,
            'objectiveThree': objectiveThree,
            'objectiveFour': objectiveFour,
            'ghostBehavior': ghostBehavior
        })
    }

    const handleEvidenceToggle = (event) => {
        const evidenceId = parseInt(event.target.id);
        const eventValue = parseInt(event.target.value);

        if(eventValue === 0){
            handleNegativeEvidence(evidenceId);
        }
        if(eventValue === 1){
            handleNeutralEvidence(evidenceId);
        }
        if(eventValue === 2){
            handlePositiveEvidence(evidenceId);
        }
    }

    const removeEvidence = (evidenceId, target) => {
        if(target === 'positive' && positiveEvidence.includes(evidenceId)){
            let targetIndex = positiveEvidence.indexOf(evidenceId);
            let tempArray = [...positiveEvidence];

            tempArray.splice(targetIndex, 1);

            setPositiveEvidence([...tempArray], stateUpdater());
        }

        if(target === 'negative' && negativeEvidence.includes(evidenceId)){
            let targetIndex = negativeEvidence.indexOf(evidenceId);
            let tempArray = [...negativeEvidence];

            tempArray.splice(targetIndex, 1);

            setNegativeEvidence([...tempArray], stateUpdater());
        }
    }

    const addEvidence = (evidenceId, target) => {
        if(target === 'positive' && !positiveEvidence.includes(evidenceId)){
            setPositiveEvidence([...positiveEvidence, evidenceId], stateUpdater())
        }
        if(target === 'negative' && !negativeEvidence.includes(evidenceId)){
            setNegativeEvidence([...negativeEvidence, evidenceId], stateUpdater())
        }
    }

    const handlePositiveEvidence = (evidenceId) => {
        removeEvidence(evidenceId, 'negative');
        addEvidence(evidenceId, 'positive');
    }

    const handleNegativeEvidence = (evidenceId) => {
        removeEvidence(evidenceId, 'positive');
        addEvidence(evidenceId,'negative');
    }

    const handleNeutralEvidence = (evidenceId) => {
        removeEvidence(evidenceId, 'positive');
        removeEvidence(evidenceId, 'negative');
    }

    const stateUpdater = () => {
        const result = fullOutput(positiveEvidence, negativeEvidence, ghostData.ghosts);

        setDetectedGhost(result.positiveID);
        setPossibleGhosts(result.possibleGhosts);
        setNegativeGhosts(result.eliminatedGhosts);
        setMessageToUser(result.message);
    }

    const resetEvidence = () => {
        setPositiveEvidence([]);
        setNegativeEvidence([])
    }

  return (
    <div className="App">
        <img alt={"Phasmophobia logo"} className={'phasmophobia-logo'} src={logo} />
        <h1>Unofficial Phasmophobia Companion App (Journal)</h1>

        <UtilitiesContainer
            evidence={ghostData.evidences}
            handleEvidenceToggle={handleEvidenceToggle}
            handleUtility={handleUtility}
            currentUtility={currentUtility}
            allOptionsUsed={positiveEvidence.length === 3}
            positiveEvidence={positiveEvidence}
            negativeEvidence={negativeEvidence}
            resetEvidence={resetEvidence}
            whiteboardData={whiteboardData}
            handleWhiteboard={handleWhiteboard}
        />

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
