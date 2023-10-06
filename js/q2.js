//Question 2

// Array to store result of each roll
const rolls = [];

//Create a Random Number of Rolls (1200, 2400, or 3600)
const numRolls = (1200 * (Math.trunc((3 * Math.random())) + 1));

//Populate the Array with dice roles using loop
for (let i = 0; i <=numRolls; i++) {
    rolls.push(Math.trunc((6 * Math.random())) + 1);
};

//Define function to count & return times an inputnum was rolled
function checkRolls(inputnum){

    //initialize variable to hold number of rolls for the input
    let rolled = 0;
    
    //Loop to count times inputnum was rolled
    rolls.forEach(result => {
        if (result === inputnum) {
            rolled += 1;
        };
    });

    return rolled;
};

// Display the results to the console
console.log(`Mattias' Rolling Die Simulation Statistics - ${numRolls} Rolls`);

// Loop to display the statistics for each possible outcome
for(let i=1; i<7; i++) {
    console.log(`Count of ${i}'s - Actual: ${checkRolls(i)} Expected: ${numRolls/6}. Relative Frequency - Actual: ${(checkRolls(i)/numRolls).toFixed(3)} Expected: ${(1/6).toFixed(3)} `);
};