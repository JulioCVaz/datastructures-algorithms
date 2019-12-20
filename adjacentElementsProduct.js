// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
    let biggestProduct = 0;
    inputArray.forEach((value, key) => {
        let product = value * inputArray[key + 1];
        
        if(key === 0){
            biggestProduct = product
        }
        
        if (product > biggestProduct){
            biggestProduct = product
        }
    });
    return biggestProduct;
}