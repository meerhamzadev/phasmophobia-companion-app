const mainData = require('../data/ghostData.json');

function fullOutput(positiveArray, negativeArray, mainData){
    let positiveIDValue, possibilities, negativeValue
    let uniqueIDs = mainData.ghosts.map((ghost) => {
        return ghost.id
    })

    if(positiveArray.length === 3){
        possibilities = []
        positiveIDValue = positiveId(positiveArray, mainData);
        negativeValue = mainData.ghosts.filter((ghost) => {
            return ghost.id !== positiveIDValue
        });
    } else {
        negativeValue = negativeOutputs(negativeArray, mainData);
        possibilities = uniqueIDs.filter(id => !negativeValue.includes(id))
    }

    fullOutput = {
        'positiveID': positiveIDValue,
        'possibilities': possibilities,
        'negativeValue': negativeValue
    }

    console.log(fullOutput)
}

function commonValue(mainArray, targetEvidence){
    let intersection = mainArray.filter(evidence => targetEvidence.includes(evidence));
    return intersection.length
}

function positiveId(positiveArray, mainData){

}

function negativeOutputs(negativeArray, mainData){

}

const posOne = [1, 2, 5];
const negOne = [];

const posTwo = [2];
const negTwo = [5];

fullOutput(posOne, negOne, mainData);
fullOutput(posTwo, negTwo, mainData);
//module.exports = fullOutput
