function fullOutput(positiveArray, negativeArray, mainData){
    let positiveIDValue, possibilities, negativeValue
    let uniqueIDs = mainData.map((ghost) => {
        return ghost.id
    })

    if(positiveArray.length === 3){
        possibilities = []
        positiveIDValue = positiveId(positiveArray, mainData);
        negativeValue = uniqueIDs.filter((ghostID) => {
            return ghostID !== positiveIDValue
        });
    } else {
        negativeValue = [];
        possibilities = [];

        for(let i = 0; i < uniqueIDs.length; i++){
            let checkNegative = commonValue(negativeArray, mainData[i].evidence)
            let checkPositive = commonValue(positiveArray, mainData[i].evidence)

            if(checkNegative > 0){
                negativeValue.push(mainData[i].id)
            }

            if(checkPositive > 0){
                possibilities.push(mainData[i].id)
            }
        }
    }

    possibilities = possibilities.filter(ghostID => !negativeValue.includes(ghostID))

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
