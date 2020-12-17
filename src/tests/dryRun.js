const ghostData = require('../utils/data/ghostData.json');

function stateDetermining(positiveEvidence, negativeEvidence, ghostData){
    const uniqueGhostIDs = ghostData.ghosts.map((ghost) => {
        return ghost.id
    });

    let discoveredGhost = null;
    let possibleGhosts = [];
    let eliminatedGhosts = [];

    for(let i = 0; i < uniqueGhostIDs.length; i++){
        let currentGhostEvidence = ghostData.ghosts[i].evidence;
        let commonPositive = commonValueCounter(currentGhostEvidence, positiveEvidence);
        let commonNegative = commonValueCounter(currentGhostEvidence, negativeEvidence);

        if(commonPositive === 3){
            discoveredGhost = i;
            possibleGhosts = [];
            eliminatedGhosts = uniqueGhostIDs.filter((id) => id !== i);
        }

        if(commonNegative > 0){
            eliminatedGhosts.push(i);
        } else if(positiveEvidence.length === commonPositive){
            possibleGhosts.push(i);
        } else if(positiveEvidence.length > 0 & commonPositive < positiveEvidence.length){
            eliminatedGhosts.push(i);
        } else {
            eliminatedGhosts.push(i);
        }
    }

    if(possibleGhosts.length === 1){
        let foundGhost = possibleGhosts[0];

        discoveredGhost = foundGhost;
        possibleGhosts = [];
        eliminatedGhosts = uniqueGhostIDs.filter((id) => id !== foundGhost);
    }

    if(possibleGhosts.length === 0 & eliminatedGhosts.length === 0){
        possibleGhosts = [...uniqueGhostIDs]
    }

    const message = messageBuilder(eliminatedGhosts.length, discoveredGhost, ghostData.ghosts);

    const evidenceResult = {
        'positiveID': discoveredGhost,
        'possibleGhosts': possibleGhosts,
        'eliminatedGhosts': eliminatedGhosts,
        'message': message
    }

    console.log(evidenceResult)
}

function messageBuilder(eliminatedGhosts, discoveredGhost, ghosts){
    let message = "You're may be dealing with"

    if(eliminatedGhosts === 12){
        message = "No ghosts fit this evidence combination"
    }

    if(discoveredGhost){
        let ghostName = ghosts[discoveredGhost].type;

        if(ghostName === "Oni" || ghostName === "Yurei"){
            message = `You're dealing with an ${ghostName}`
        } else {
            message = `You're dealing with a ${ghostName}`
        }
    }

    return message
}

function commonValueCounter(ghostEvidence, currentEvidence){
    const commonValues = currentEvidence.filter(evidence => ghostEvidence.includes(evidence))
    return commonValues.length
}

const positiveEvidence = [];
const negativeEvidence = [];

stateDetermining(positiveEvidence, negativeEvidence, ghostData)

