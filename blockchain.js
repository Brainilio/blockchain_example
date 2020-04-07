const _ = require('underscore');
const hash = require('sha256');

function stringtoASCII(string) {

// strip spaces
let stringArray = string.replace(/\s+/g, '')

// create new array
let lijst = []  

// loop through all letters and push them into new array as ASCII code
for (let i = 0; i < stringArray.length; i++) { 
    for (let index of stringArray[i]) { 
        if(isNaN(index)) { 
            index = index.charCodeAt(0);
            lijst.push(index);
        } else { 
            lijst.push(index)
        }
    }    
}

//make a new list
newLijst = [];

//for each character in string, push them into newList separated
lijst.forEach((value) => {  
    Array.from(value.toString()).forEach((char) => { 
        newLijst.push(parseInt(char))
        
    })
  
});

return newLijst

} 



function chunkArray(newLijst) {
//split list in parts of 10
let splitLijst = _.chunk(newLijst, 10);


return splitLijst

}

function fillArray(splitLijst) { 

//number to fill an array with
let number = 0 

//for item of array
for(let chunkedLijst of splitLijst) 
    
    //while array.length is not 10, fill number to 10
    while(chunkedLijst.length !== 10) { 
            let newNumber = number.toString();
            chunkedLijst.splice(chunkedLijst.length, 0, parseInt(newNumber));
            number++;
    }

    return splitLijst;

}



function sumArray(filledArray) { 

    //when array's length is already 1 return array
    if(filledArray.length == 1) { 
        return filledArray
    }
 
    //else, grab first 2 indexes
    else { 
    let A = filledArray[0];                 
    let B = filledArray[1];
    newArray = [] 
    
    //for each index, get all digits, parse them and add them up and %10 modulus
    for(let i = 0; i < A.length; i++) { 
        let sum = parseInt(A[i]) + parseInt(B[i]);
        sum = (sum % 10) 
        newArray.push(sum);
    }

    //get rid of both first indexes and push in the summed up arrays
    filledArray.splice(0, 2);
    filledArray.push(newArray);

    //recursion for all probable arrays in the future, you want to sum up all arrays
    //until they're all summed up (1 + 2, 1 + 3, 1 + 4 etc..) 
    return sumArray(filledArray)
}
}


function hashArray(sumArray) 
{ 

    // get rid of all spaces
    let hashIt = sumArray.toString(); 
    hashIt = hashIt.replace(/,/g, '');

    // hash it
    let hashedString = hash(hashIt);
    return hashedString;
}


//function to just call all functions in one function
function algorithm (string){
    let block = stringtoASCII(string);
    block = chunkArray(block);
    block = fillArray(block);
    block = sumArray(block);
    block = hashArray(block);

    return block;
    };



//export all modules
module.exports = { 
   stringtoASCII,
   chunkArray, 
   fillArray,
   sumArray,
   hashArray,
   algorithm
}





