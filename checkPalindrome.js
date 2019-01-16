// Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
    if(inputString.length > 1){
        let result = false;
        for(let i = 0; i < inputString.length-1; i++){
            if(inputString.charAt(i) == inputString.charAt((inputString.length)-(i+1))){
                result = true;
            }else{
                result = false;
                break;
            }
        }
        return result;
    }else{
        return true;
    }
}