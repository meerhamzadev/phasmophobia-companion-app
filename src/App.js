import React, { useState, useEffect } from 'react';

// Analytics
import ReactGA from 'react-ga';

// Components
import Header from "./components/Header/Header";
import GhostContainer from "./components/GhostContainer/GhostContainer";
import UtilitiesContainer from './components/UtilitiesContainer/UtilitiesContainer';
import ToolboxToggle from "./components/UtilitiesContainer/ToolboxToggle";

// Data
import ghostData from './utils/data/ghostData.json';
import googleId from "./utils/google-analytics-sensitive/gaConfiguration";

// Auxiliary functions
import fullOutput from './utils/auxiliaryFunctions/outcomeChecker';

// Styling
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
    const [currentUtility, setCurrentUtility] = useState("evidence");
    const [toolbox, setToolbox] = useState(false);

    // Whiteboard Data
    const [ghostName, setGhostName] = useState('');
    const [objectiveTwo, setObjectiveTwo] = useState('');
    const [objectiveThree, setObjectiveThree] = useState('');
    const [objectiveFour, setObjectiveFour] = useState('');
    const [whiteboardData, setWhiteboardData] = useState({});

    useEffect(() => {
        ReactGA.initialize(googleId);
        ReactGA.pageview('/');

        stateUpdater()

    }, [positiveEvidence, negativeEvidence]);

    const handleUtility = (event) => {
        setCurrentUtility(event.target.value);
    }

    const handleToolbox = () => {
        setToolbox(!toolbox);
    }

    const handleWhiteboard = (event) => {
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

        setWhiteboardData({
            'ghostName': ghostName,
            'objectiveTwo': objectiveTwo,
            'objectiveThree': objectiveThree,
            'objectiveFour': objectiveFour,
        });

        event.preventDefault();
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
        <Header />
        {   toolbox
            ? <UtilitiesContainer
                evidence={ghostData.evidences}
                currentUtility={currentUtility}
                allOptionsUsed={positiveEvidence.length === 3}
                positiveEvidence={positiveEvidence}
                negativeEvidence={negativeEvidence}
                resetEvidence={resetEvidence}
                whiteboardData={whiteboardData}
                handleEvidenceToggle={handleEvidenceToggle}
                handleUtility={handleUtility}
                handleWhiteboard={handleWhiteboard}
                handleToolbox={handleToolbox}
            />
            : <ToolboxToggle handleToolbox={handleToolbox} />
        }
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
