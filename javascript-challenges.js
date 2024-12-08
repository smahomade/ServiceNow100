function theFizzBuzz(){
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}


function ThePalindromeChecker(input){
    return input == input.split("").reverse().join("");
}


function randomNumberGame(){
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    result = Math.floor(Math.random() * 10) + 1;

    rl.question("Guess the number i am thinking off? ", (num) => {
        if (num == result){
            console.log(`CORRECT!`);
        }
        else{
            console.log(`Unlucky my number is: ${result}`)
        }
        rl.close(); 
    });

}


const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    display: function(){
        return `this car is a ${this.year} ${this.make} ${this.model};`
    }
}

console.log(car.display());
// console.log(theFizzBuzz());
// console.log(ThePalindromeChecker("string"));