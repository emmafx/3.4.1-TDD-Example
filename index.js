
function additionCalculator(firstNumber, secondNumber) {

const sum = firstNumber + secondNumber; 

return sum; 
}

// Testing if additionCalculator is a function 

if (typeof additionCalculator === "function") {
    console.log("Test Passed!");
} else {
    console.log("additionCalculator() is not a function"); 
}

// Testing the addition functionality 


// Setup Phase
const firstNumber = 10; 
const secondNumber = 12; 

const expected = 22; 

// Run Phase
const actual = additionCalculator(firstNumber,secondNumber); 

// Check Phase
if (expected === actual) { 
    console.log("Addition Check Passed!");
} else {
    console.log("Tests Failed"); 
}




