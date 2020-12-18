function fullOutput(positiveEvidence, negativeEvidence, ghostData){
    const uniqueGhostIDs = ghostData.map((ghost) => {
        return ghost.id
    });

    let discoveredGhost = null;
    let possibleGhosts = [];
    let eliminatedGhosts = [];

    for(let i = 0; i < uniqueGhostIDs.length; i++){
        let ghostId = i + 1;
        let currentGhostEvidence = ghostData[i].evidence;
        let commonPositive = commonValueCounter(currentGhostEvidence, positiveEvidence);
        let commonNegative = commonValueCounter(currentGhostEvidence, negativeEvidence);

        if(commonPositive === 3){
            discoveredGhost = ghostId;
            possibleGhosts = [];
            eliminatedGhosts = uniqueGhostIDs.filter((id) => id !== ghostId);
        }

        if(commonNegative > 0){
            eliminatedGhosts.push(ghostId);
        } else if(positiveEvidence.length === commonPositive){
            possibleGhosts.push(ghostId);
        } else if(positiveEvidence.length > 0 & commonPositive < positiveEvidence.length){
            eliminatedGhosts.push(ghostId);
        } else {
            eliminatedGhosts.push(ghostId);
        }
    }

    if(possibleGhosts.length === 1){
        let foundGhost = possibleGhosts[0];

        discoveredGhost = foundGhost;
        possibleGhosts = [];
        eliminatedGhosts = uniqueGhostIDs.filter((id) => id !== foundGhost);
    }

    const message = messageBuilder(eliminatedGhosts.length, discoveredGhost, ghostData);

    const evidenceResult = {
        'positiveID': discoveredGhost,
        'possibleGhosts': possibleGhosts,
        'eliminatedGhosts': eliminatedGhosts,
        'message': message
    }

    return(evidenceResult)
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

module.exports = fullOutput

//fullOutput([0,3], [2, 5, 1], ghostData.ghosts)
