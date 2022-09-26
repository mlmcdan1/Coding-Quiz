var homeDiv = document.querySelector(".quiz-info");
var startBtn = document.querySelector(".button-76");
var quizDiv = document.querySelector(".quiz-container");
var questionTitle = document.querySelector(".question-title");
var answerOne = document.querySelector("#answerOne");
var answerTwo = document.querySelector("#answerTwo");
var answerThree = document.querySelector("#answerThree");
var answerFour = document.querySelector("#answerFour");
var timerSpan = document.querySelector(".timer");
var answerSpan = document.querySelector(".answer-span");
var endContainer = document.querySelector(".end-container");
var endPara = document.querySelector(".end-para");
var highScoreBtn = document.querySelector(".high-score-button");
var scoreDiv = document.querySelector(".scores");
var scoreContainer = document.querySelector(".score-container");
var initialsAnswer = document.querySelector("#initials");
var initialsBtn = document.querySelector("#initial-submit");
var goBackBtn = document.querySelector(".go-back-btn");
var clearBtn = document.querySelector(".clear-btn");
var header = document.querySelector("header");

var timer = 75;
var timeStart = false;
var timeRemain = true;
var i = 0;

var scoreList = [];

getScore();

var score = 0;


var questionsArr = [
    {
      question: "Commonly used data types do NOT include:",
      answerChoices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
      correctAnswer: 2,
    },
    {
      question: "The condition in an if/else statement is enclosed with _______",
      answerChoices: [
        "1. Quotes",
        "2. Curly Brackets",
        "3. Parenthesis",
        "4. Square Brackets",
      ],
      correctAnswer: 2,
    },
    {
      question: "Arrays in JavaScript can be used to store ______.",
      answerChoices: [
        "1. Numbers and strings",
        "2. Other Arrays",
        "3. Booleans",
        "4. All of the above",
      ],
      correctAnswer: 3,
    },
    {
      question:
        "Strings values must be enclosed within _______ when being assigned to variables.",
      answerChoices: [
        "1. Commas",
        "2. Curly Brackets",
        "3. Quotations",
        "4. Parenthesis",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      answerChoices: [
        "1. JavaScript",
        "2. terminal/bash",
        "3. for loop",
        "4. console.log",
      ],
      correctAnswer: 3,
    },
  ];

var countdownTimer = setInterval(countdownStart, 1000);

function countdownStart() {
  if (timeStart) timer--;
  if (timer <= 0) {
    endQuiz();
    timer = 0;
  }
  timerSpan.innerHTML = timer;
}

startBtn.addEventListener("click", function(){
    homeDiv.style.display = "none";
    quizDiv.style.display = "flex";
    countdownStart();
    showQuizQuestions();
    timeStart = true;
});

highScoreBtn.addEventListener("click", function(){
  homeDiv.style.display = "none";
  quizDiv.style.display = "none";
  viewScore();
});

function showQuizQuestions() {
    questionTitle.textContent = questionsArr[i].question;
    answerOne.textContent = questionsArr[i].answerChoices[0];
    answerTwo.textContent = questionsArr[i].answerChoices[1];
    answerThree.textContent = questionsArr[i].answerChoices[2];
    answerFour.textContent = questionsArr[i].answerChoices[3];
}

answerOne.addEventListener("click", function (e) {
    var correctAnswer = questionsArr[i].correctAnswer;
  
    if (correctAnswer === 0) {
      answerSpan.hidden = false;
      answerSpan.textContent = "Correct";
  
      // Timer to hide span
      setTimeout(function () {
        answerSpan.hidden = true;
      }, 1000);
    } else {
      timer -= 15;
      answerSpan.hidden = false;
      answerSpan.textContent = "Wrong";
      setTimeout(function () {
        answerSpan.hidden = true;
      }, 1000);
    }
  
    score = timer;
  
    // If/Else conditional that calls endQuiz if array length is over or increments to next question if not over
    if (i >= questionsArr.length - 1) {
      endQuiz();
    } else {
      i++;
      showQuizQuestions();
    }
  });
  
  answerTwo.addEventListener("click", function (e) {
    var correctAnswer = questionsArr[i].correctAnswer;
  
    if (correctAnswer === 1) {
      answerSpan.hidden = false;
      answerSpan.textContent = "Correct";
      setTimeout(function () {
        answerSpan.hidden = true;
      }, 1000);
    } else {
      timer -= 15;
      answerSpan.hidden = false;
      answerSpan.textContent = "Wrong";
      setTimeout(function () {
        answerSpan.hidden = true;
      }, 1000);
    }
  
    score = timer;
  
    if (i >= questionsArr.length - 1) {
      endQuiz();
    } else {
      i++;
      showQuizQuestions();
    }
  });
  
  answerThree.addEventListener("click", function (e) {
    var correctAnswer = questionsArr[i].correctAnswer;
  
    if (correctAnswer === 2) {
      answerSpan.hidden = false;
      answerSpan.textContent = "Correct";
      setTimeout(function () {
        answerSpan.hidden = true;
      }, 1000);
    } else {
      timer -= 15;
      answerSpan.hidden = false;
      answerSpan.textContent = "Wrong";
      setTimeout(function () {
        answerSpan.hidden = true;
      }, 1000);
    }
  
    score = timer;
  
    if (i >= questionsArr.length - 1) {
      endQuiz();
    } else {
      i++;
      showQuizQuestions();
    }
  });
  
  answerFour.addEventListener("click", function (e) {
    var correctAnswer = questionsArr[i].correctAnswer;
  
    if (correctAnswer === 3) {
      answerSpan.hidden = false;
      answerSpan.textContent = "Correct";
      setTimeout(function () {
        answerSpan.hidden = true;
      }, 1000);
    } else {
      timer -= 15;
      answerSpan.hidden = false;
      answerSpan.textContent = "Wrong";
      setTimeout(function () {
        answerSpan.hidden = true;
      }, 1000);
    }
  
    score = timer;
  
    if (i >= questionsArr.length - 1) {
      endQuiz();
    } else {
      i++;
      showQuizQuestions();
    }
  });
  
  // End quiz function
  
  function endQuiz() {
    clearInterval(countdownTimer);
    timerSpan.innerText = score;
    quizDiv.style.display = "none";
    startBtn.style.display = "none";
    endContainer.style.display = "flex";
    endPara.innerText = "Your final score is: " + score;
  
    initialsBtn.addEventListener("click", function () {
      var playerInitials = initialsAnswer.value.trim();
      var newScore = {
        player: playerInitials,
        score: score,
      };
  
      scoreList.push(newScore);
      saveScore();
      viewScore();
    });

  }
    

    function checkAnswer(event) {
        event.preventDefault();
      
        var answer = event.currentTarget.innerHTML;
        var correctAnswer = null;
      
        if (questions[questionIndex].correct === answer) {
          correctAnswer = answer;
        }
      
        if (answer === correctAnswer) {
          answerResponseEl.textContent = "Correct!";
        } else {
          answerResponseEl.textContent = "Wrong!";
          secondsLeft -= 10;
          if (secondsLeft < 0) {
            secondsLeft = 0;
          }
        }
      
        if (questions.length === questionIndex + 1) {
          showFinalScore();
          return;
        }
      
        questionIndex++;
        showQuiz();
      }

      
      function saveScore() {
        localStorage.setItem("highScore", JSON.stringify(scoreList));
      }

      function viewScore(){
        header.style.display = "none";
        endContainer.style.display = "none";
        scoreContainer.style.display = "flex";

        scoreList.sort((a,b) => {
          return b.score - a.score;
        });

        topTen = scoreList.slice(0, 10);

        for (var i =0; i < topTen.length; i++) {
          var player = topTen[i].player;
          var score = topTen[i].score;

          scorePara = document.createElement("p");
          scoreDiv.appendChild(scorePara);
          scorePara.textContent = player + ": " + score;
        }
      }

      goBackBtn.addEventListener("click", function (e) {
        resetVar();
        location.reload();
      });
      
      // Clear Button eventlistener
      clearBtn.addEventListener("click", function (e) {
        scoreList = [];
        localStorage.setItem("highScore", JSON.stringify(scoreList));
        // Function to remove all children
        function removeAllChild(parent) {
          while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
          }
        }
        removeAllChild(scoreDiv);
        saveScore();
      });
      
      // Reset variables
      function resetVar() {
        time = 75;
        timeRemain = true;
        timeStart = false;
        i = 0;
        score = 0;
      }

      function getScore() {
        var storedScore = JSON.parse(localStorage.getItem("highScore"));
        if (storedScore !== null) {
          scoreList = storedScore;
        }
      
      }
