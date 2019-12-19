// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function checkRepeatNumber(list){
    return list.filter((item, index) => list.indexOf(item) != index);
}

function adjacentElementsProduct(inputArray) {
   let reoorder = inputArray.sort();
   let maxNumber = Math.max(...reoorder);
   let mostFrequency = checkRepeatNumber(reoorder);
    

    return maxNumber * mostFrequency[0];
        
}