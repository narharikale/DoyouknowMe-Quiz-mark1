var readlineSync = require ('readline-sync');
const chalk = require('chalk');
var score   = 0 ;
var userName = readlineSync.question("May i know your name please  :- ");
console.log(chalk.bgMagenta(" hello! "+ userName+"  :)"));
console.log(chalk.green("welcome to my game "));


// function making

function play(question , answer){
    var userAnswer = readlineSync.question(question);

    if (userAnswer === answer){
        console.log(chalk.bold.greenBright("RIGHT ANSWER!"));
        score++ ;
    }
    else{
        console.log(chalk.bold.red("WRONG ANSWER"));
    }
    console.log(chalk.bold.cyan("your score is  "+ score));
    console.log("<---------------------------------------->");
}

var data = [
    questionOne= {
        question: chalk.yellow("questio 1 --->> ") + ("what is my last name :- "),
        answer: "kale"
    },
    questionTwo= {
        question: chalk.yellow("questio 2 --->> ") + "what is my college name:- ",
        answer: "atss"
    },
    question3= {
        question: chalk.yellow("questio 3 --->> ") + " where do i live:- ",
        answer: "25/4"
    }

]

for (var i=0 ;i<data.length ;i++ ){
    
    play(data[i].question,data[i].answer);
}

console.log(chalk.bgWhiteBright.blackBright("your final score is  "+ score +"  "));