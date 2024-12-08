// console.log("hello world")

// let lies = ["JavaScript","is", "Fun"];
// lies.push("!");
// let lastLie = lies.pop();
// lies[1] = "really";
// let firstLie = lies.shift();
// lies.unshift("Coding");
// lies.splice(2,1, "is");
// lies.push("awesome")


// console.log(lies);
// console.log(firstLie);
// console.log(lastLie);


// let myString = "  Javascript Fundamentals  ";
// myString = myString.trimEnd();
// console.log(myString); 
// myString = myString.trimStart();
// console.log(myString);

// let upperCase = myString.toUpperCase();
// console.log(upperCase);

// let replaceFundamentals = myString.replace("Fundamentals", "Basics")
// console.log(replaceFundamentals);

// let position = myString.indexOf("Javascript");
// console.log(position);


// let a = 5;
// let b = 5;

// let prefixResult = ++a;
// let postfixResult = b++;

// console.log(a)
// console.log(b)
// console.log(prefixResult)
// console.log(postfixResult)

// let j = 5, k = 3, m = 4;
// console.log(m)
// console.log(j)
// console.log(k)

// console.log(m+= +j++ + ++k)



// let arr = [1,5,2,6,3,7,4,8];
// let sum = 0;
// for (let i= 0; i< arr.length; i++){
//     if (arr[i] % 2 == 0){
//         sum = sum + arr[i]
//     }
// }
// // add code which adds up all the even numbers in the array and store it in the variable sum
// console.log(sum); // Output: 20


// function safee(num){
//     if(num % 3 == 0 || num % 4 == 0){
//         return console.log(true);
//     }
//     else{
//         return console.log(false);
//     }
// }

// function safee2(num){
//     if(num % 3 == 0 ){
//         return console.log(true);
//     }
//     else if(num % 4 == 0){
//         return console.log(`extra ${true}`);
//     }
//     else{
//         return console.log(false);
//     }
// }

// function safee3(num){
//     return (num % 3 == 0 || num % 4 == 0)
// }

// console.log(safee3(9))

// function grade(mark){
//     let result = (mark < 0 || mark > 100) ? "Invalid argument" : mark >= 70 ? "Distincation Pass" : (mark >= 40 ? "pass" : "fail");
//     return result;
// }
// console.log(grade(0)); // Fail
// console.log(grade(39)); // Fail
// console.log(grade(40)); // Pass
// console.log(grade(69)); // Pass
// console.log(grade(70)); // Pass with distinctions
// console.log(grade(100)); // Pass with distinctions
// console.log(grade(101)); // Invalid argument
// console.log(grade(-1)); // Invalid argument


function difficulty(input) {
    switch (input) {
        case 1:
            return "Easy";
        case 2:
            return "Medium";
        case 3:
            return "Hard";
        default:
            return "Error";
    }
}


let nums = [ 10, 6, 22, -7, 3];
 
console.log("Highest for loop: " + highestForOfLoop(nums));
console.log("Highest for-of loop: " + highestForLoop(nums));
console.log("Highest while loop: " + highestWhileLoop(nums));
console.log("Highest do-while loop: " + highestDoWhileLoop(nums));
 
function highestForOfLoop(nums) {
    let highest = nums[0];

    for(let num of nums){
        if(num > highest){
            highest = num
        }
    }
    return highest;
 
}
 
function highestForLoop(nums){
    let highest = nums[0];

    for (let i= 0; i< nums.length; i++){
        if (nums[i] > highest){
            highest = nums[i];
        }
    }
    
    return highest
 
}
 
function highestWhileLoop(nums){
    let highest = nums[0];
    i = 0

    while(i < nums.length){
        if (nums[i] > highest){
            highest = nums[i];
        }
        i++;
    }

    return highest
}
 
function highestDoWhileLoop(nums){
    let highest = nums[0];
    i = 0

    do {
        if (nums[i] > highest){
            highest = nums[i];
        }
        i++;
    }

    while(i < nums.length);

    return highest
 
}