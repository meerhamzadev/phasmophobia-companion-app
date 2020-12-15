function fullOutput(positiveArray, negativeArray, mainData){
    let positiveIDValue, possibilities, negativeValue
    let uniqueIDs = mainData.ghosts.map((ghost) => {
        return ghost.id
    })

    if(positiveArray.length === 3){
        possibilities = []
        positiveIDValue = positiveId(positiveArray, mainData.ghosts);
        negativeValue = uniqueIDs.filter((ghostID) => {
            return ghostID !== positiveIDValue
        });
    } else {
        negativeValue = [];

        for(let i = 0; i < uniqueIDs.length; i++){
            let check = commonValue(negativeArray, mainData.ghosts[i].evidence)

            if(check > 0){
                negativeValue.push(mainData.ghosts[i].id)
            }
        }

        possibilities = uniqueIDs.filter(id => !negativeValue.includes(id))
    }

    const result = {
        'positiveID': positiveIDValue,
        'possibilities': possibilities,
        'negativeValue': negativeValue
    }

    return result
}

function commonValue(mainArray, targetEvidence){
    let intersection = mainArray.filter(evidence => targetEvidence.includes(evidence));
    return intersection.length
}

function positiveId(positiveArray, ghostData){
    for(let i = 0; i < ghostData.length; i++){
        let intersectionValue = commonValue(positiveArray, ghostData[i].evidence);

        if(intersectionValue === 3){
            return ghostData[i].id
        }
    }
}

module.exports = fullOutput
