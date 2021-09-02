const ghostData = require('../data/ghostData.json');

function evidenceProbabilityCalculator(evidenceIds, confirmedEvidence, dismissedEvidence, possibleGhosts){
    const filteredGhosts = ghostData.ghosts.filter((ghost) => {
        return possibleGhosts.includes(ghost.id);
    });

    let evidenceProbabilities = {}

    for(let i = 0; i < evidenceIds.length; i++){
        let evidence = evidenceIds[i]
        let confirmed = confirmedEvidence ? confirmedEvidence.includes(evidence) : null;
        let eliminated = dismissedEvidence ? dismissedEvidence.includes(evidence) : null;

        if(confirmed || eliminated) {
                evidenceProbabilities[evidence] = confirmed ? 1 : 0;
        } else {
            let evidenceCounter = 0;

            for(let j = 0; j < filteredGhosts.length; j++){
                evidenceCounter = filteredGhosts[j].evidence.includes(evidence) ? evidenceCounter += 1 : evidenceCounter;
            }

            evidenceProbabilities[evidence] = evidenceCounter === 0 ? 0 : evidenceCounter / filteredGhosts.length;
        }
    }

    return evidenceProbabilities
}

module.exports = evidenceProbabilityCalculator
