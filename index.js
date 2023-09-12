// Code your solution in this file!
function distanceFromHqInBlocks(numBlocks){
    return Math.abs(42 - numBlocks)
}

function distanceFromHqInFeet(numBlocks){
    return distanceFromHqInBlocks(numBlocks) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}