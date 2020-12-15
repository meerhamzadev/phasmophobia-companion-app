function fullOutput(positiveArray, negativeArray, mainData){
    let positiveIDValue, possibilities, negativeValue
    let uniqueIDs = mainData.map((ghost) => {
        return ghost.id
    })

    possibilities = [];
    negativeValue = [];

    for(let i = 0; i < uniqueIDs.length; i++){
        let positiveCheck = commonValue(positiveArray, mainData[i].evidence)
        let negativeCheck = commonValue(negativeArray, mainData[i].evidence)

        if(positiveCheck > 0 || negativeCheck === 0){
            if(positiveCheck === 3){
                positiveIDValue = mainData[i].id
                possibilities = [];
                negativeValue = uniqueIDs.filter(ghostID => ghostID !== positiveIDValue)
            }

            possibilities.push(mainData[i].id)
        } else {
            negativeValue.push(mainData[i].id)
        }
    }

    if(positiveIDValue){
        possibilities = [];
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
