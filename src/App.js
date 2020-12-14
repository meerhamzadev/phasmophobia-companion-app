import React, { useState } from 'react';
import EvidenceContainer from "./components/EvidenceContainer/EvidenceContainer";

// Data
import ghostData from './utils/ghostData.json';

// Styling
import './App.css';

function App() {
    const [activeToggles, setActiveToggles] = useState([])

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

  return (
    <div className="App">

        <h2>Active evidence: {activeToggles}</h2>

        <EvidenceContainer
            ghostData={ghostData}
            handleToggle={handleToggle}
            allOptionsUsed={ activeToggles.length === 3 ? true : false }
            activeToggles={activeToggles}
        />
    </div>
  );
}

export default App;
