/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    const messages = {
        fullMessage: 'FizzBuzz',
        firstMessage: 'Fizz',
        lastMessage: 'Buzz'
    }
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(messages.fullMessage)
        } else if (i % 3 === 0 && !(i % 5 === 0)) {
            console.log(messages.firstMessage) 
        } else if (!(i % 3 === 0) && i % 5 === 0) {
            console.log(messages.lastMessage)
        } else {
            console.log(i)
        }    
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}

