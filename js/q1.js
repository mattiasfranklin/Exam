//Question 1

//Ask User input start and end numbers
var num1 = prompt("Enter a starting number: ");
var num2 = prompt("Enter an ending number: ");

//define the function
function findRoots(start, end){
    
    //Creates object and initializes indexes
    const vals = {
        sum : 0,
        perfectSquares : [],
    };

    //Loop to check if number is a perfect square
    for (let i=start; i<=end; i++) {
        if (Number.isInteger(Math.sqrt(i))){
            vals.sum += i;
            vals.perfectSquares.push(i);
        }
    };

    //Return Message
    return `Results for the starting number = "${start}" and ending number = "${end}"\nPerfect squares are: ${vals.perfectSquares}\nSum of the perfect squares is: ${vals.sum}`;
}

//Validate the Input
if (!isNaN(Number(num1)) && Number.isInteger(Number(num1)) 
    && !isNaN(Number(num2)) && Number.isInteger(Number(num2))
    && (num1 >0) && (num2 > num1)){

    //converts inputs to numbers if valid
    num1 = Number(num1);
    num2 = Number(num2);
    
    //Run function and get return message if input is valid    
    console.log(findRoots(num1, num2));
} else {

    //Print error message if inputs are not valid
    console.log(`Input Error! You must enter positive integers with the starting number less than the ending number.
    \nYou entered "${num1}" and "${num2}". Click refresh to restart.`);
};

