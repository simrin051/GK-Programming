var readlineSync = require('readline-sync');
const chalk=require("chalk");


var score=0;
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

console.log(chalk.bgRed("Welcome to Quiz"));
console.log(chalk.red("Choose options (between 1 and 3)"));
var question1=
{
  question: "Which of the following is a non metal that stays liquid at room temperature",
  answer: ["1. Bromine \n2. Chlorine \n3. Helium \n4. Pottasium\n" ],
  correctans:"1"

  };
var question2=
{
  question: "Ecology deals with",
  answer: ["1. Cell formation \n2. Birds \n3. Relation between organisms and their environment \n4. Animals\n" ],
  correctans:"3"

  };
var question3=
{
  question: "Who was the first Indian to win World Amateur Billards title",
  answer: ["1. Geet Sethi \n2. Wilson Jones \n3. Michael Ferri \n4. Manoj Kachai\n" ],
  correctans:"2"

  };

var question4=
{
  question: "When you pass an array to a method, the method receives",
  answer: ["1. Copy of the array \n2. Copy of the first element \n3. The reference of the array \n4. The length of the array\n" ],
  correctans:"3"

  };

var question5=
{
  question: "In java arrays are",
  answer: ["1. Objects \n2. Object references \n3. primitive data type \n4. None of the above\n" ],
  correctans:"1"

  };

var questions= [
      question1,question2,question3,question4,question5

];

var bestscores=
[{
  
  name: "Serene",
  score: 5
  }
];
 // console.log("Questions length "+questions.get(0));

  for(var i=0;i<questions.length;i++)
  {
  
    var answer  = readlineSync.question(questions[i].question+"\n"+questions[i].answer);

    if(answer.toUpperCase ()==(questions[i].correctans.toUpperCase ()))
   {
      console.log(chalk.green("CORRECT"));
      score=score+1;
   }
   else
   {
     console.log(chalk.red("WRONG"));
   }

  }
  console.log(chalk.bgCyan("Score is "+score));
  console.log("before best scores length "+bestscores.length);
for(var i=0;i<bestscores.length;i++)
{
if(score >= bestscores[i].score )
{
console.log("pushed ");
bestscores.push( {name:userName,score:score});
break;
}
}
console.log("after best scores length "+bestscores.length);

console.log(chalk.bgYellow("Highest Scores"));
for(var i=0;i<bestscores.length;i++)
{
  console.log((bestscores[i].name+" "+bestscores[i].score));
}