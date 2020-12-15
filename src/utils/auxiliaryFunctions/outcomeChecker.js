const ghostData = require('../data/ghostData.json')

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

        if(positiveCheck >= 0 & negativeCheck === 0){
            if(positiveCheck === 3){
                positiveIDValue = mainData[i].id
                possibilities = [];
                negativeValue = uniqueIDs.filter(ghostID => ghostID !== positiveIDValue)
            }
            possibilities.push(mainData[i].id)
        } else if(negativeCheck > 0){
            negativeValue.push(mainData[i].id)
        } else if(positiveArray.length > 0 & positiveCheck === 0){
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

    let message = ''
    let negativeCheck = negativeValue.length === 12
    let positiveCheck = positiveArray.length === 3 & !positiveIDValue

    console.log(negativeCheck)
    console.log(positiveCheck)

    if(negativeCheck || positiveCheck){
        message = "This combination does not lead to any ghosts. Make sure" +
            " you double check your evidence."
    }

    if(positiveIDValue){
        message = "You're dealing with a"
    }

    console.log({
        'positiveID': positiveIDValue,
        'possibilities': possibilities,
        'negativeValue': negativeValue,
        'message': message
    })
}

function commonValue(mainArray, targetEvidence){
    let intersection = mainArray.filter(evidence => targetEvidence.includes(evidence));
    return intersection.length
}

module.exports = fullOutput

fullOutput([0,3], [2, 5, 1], ghostData.ghosts)
