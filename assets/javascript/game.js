//Create variables
var bandNames = ["nirvana","weezer","soundgarden","radiohead","metallica","oasis","nsync","sublime","everclear"];
var numberLetters = [];
var numberSpaces = 0;
var spacesLetters = [];
var totalGuesses = 10
var wrong = [];
var guesses = "";
var wins = 0;
var losses = 0;
var wordGenerator = ""; 
var letterExists //need to figure this out still

function beginGame(){
    totalGuesses = 10;
    //randomly choose a band from array
    wordGenerator = bandNames[Math.floor(math.random()* bandNames.length)];
        //split the word into letters for later
        numberLetters=wordGenerator.split("");
        //count number of letters for the blanks on screen
        numberSpaces=numberLetters.length;
        
        console.log(wordGenerator);
        //reset all of the counters
        wrong = [];
        spacesLetters = [];
    //create correct number of blanks on screen for guessing
    for (var i=0; i < numberSpaces; i++){
        spacesLetters.push("_");
    }
        
        console.log(spacesLetters);

    //show number of blanks for guessing
    //show amount of letters left to guess
    //clear screen


    //need to create functions for checking guessed letters against the array of letters in each word (variables listed in variable list at top of page)
    
    //if letter exists in word, fill in the blank 
    //if letter doesn't exist in word, add letter to wrong list and delete one guess from letters left counter
    //if the user guesses all the letters in the word, add one to win list and tell them they won
    //restart game
    //if user runs out of allowed letters before guessing word, add one to losses, tell them they lost
    //restart game
}