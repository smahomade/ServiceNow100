
var classNames = ["Kavan","Mat","Josh",
                    "James", "Umar", "Haaris",
                    "Usun", "Farhed", "Arthur",
                    "Safee","Nish"];
var Odd = "Odd"
var Even = "Even"
var reverseNames= [];
var uppercaseNames = [];

function arrayString(array){

    //Iteraite through the Class Names
    for(var i = 0; i < array.length; i++){
        
        // Check Even, Push the reverse order of that even name to reverseNames
        if(array[i].length % 2 == 0){
            reverseNames.push(array[i].split("").reverse().join(""));
            //console.log(array[i] + " - " + Even)
        }

        // Check Odd, Push the string as uppercase letters
        else{
           uppercaseNames.push(array[i].toUpperCase())
           //console.log(array[i].toUpperCase() + " - " + Odd)
        }
    }

    return reverseNames,uppercaseNames,calculateTotalChars(reverseNames,uppercaseNames);
}

function calculateTotalChars(array,array2){
    var total = 0;
    var total2 = 0
    for(var i = 0; i < array.length; i++){
        total += array[i].length 
    }
    for(var i = 0; i < array2.length; i++){
        total2 += array2[i].length 
    }

    let result = (total > total2) 
    ? `${array} Array Input Has More Chars` 
    : `${array2} Input Has More Chars`;
    
    return result;
}

console.log(arrayString(classNames));

