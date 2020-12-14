function fullOutput(positiveArray, negativeArray, mainData){
    let positiveIDValue, possibilities, negativeValue
    let uniqueIDs = mainData.ghosts.map((ghost) => {
        return ghost.id
    })

    if(positiveArray.length === 3){
        possibilities = []
        positiveIDValue = positiveID(positiveArray, mainData, uniqueIDs);
        negativeValue = mainData.ghosts.filter((ghost) => {
            return ghost.id !== positiveIDValue
        });
    } else {
        negativeValue = negativeOutputs(negativeArray, mainData, uniqueIDs);
        possibilities = uniqueIDs.filter(id => !negativeValue.includes(id))
    }

    fullOutput = {
        'positiveID': positiveIDValue,
        'possibilities': possibilities,
        'negativeValue': negativeValue
    }

    return fullOutput
}

function positiveId(positiveArray, mainData){

}

function negativeOutputs(negativeArray, mainData){

}

module.exports = fullOutput
