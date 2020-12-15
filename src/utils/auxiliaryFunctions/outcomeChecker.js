function fullOutput(positiveArray, negativeArray, mainData){
    let positiveIDValue, possibilities, negativeValue
    let uniqueIDs = mainData.map((ghost) => {
        return ghost.id
    })

    for(let i = 0; i < uniqueIDs; i++){
        let positiveCheck = commonValue(positiveArray, mainData.evidence)
        let negativeCheck = commonValue(negativearray, mainData.evidence)

        possibilities = [];
        negativeValue = [];

        if(positiveCheck > 0 & negativeCheck === 0){
            if(positiveCheck === 3){
                positiveIDValue = mainData.id
                possibilities = [];
                negativeValue = uniqueIDs.filter(ghostID => ghostID !== positiveIDValue)
            }

            possibilities.push(mainData.id)
        } else {
            negativeValue.push(mainData.id)
        }
    }

    if(possibilities.length === 1){
        positiveIDValue = possibilities[0];
        possibilities = [];
    }

    return {
        'positiveID': positiveIDValue,
        'possibilities': possibilities,
        'negativeValue': negativeValue
    }
}

function commonValue(mainArray, targetEvidence){
    let intersection = mainArray.filter(evidence => targetEvidence.includes(evidence));
    return intersection.length
}

module.exports = fullOutput
