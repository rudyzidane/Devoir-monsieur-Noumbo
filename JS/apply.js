
let currentQuestion = 0;
let answeredCorrect = 0;

function loadQuestion() {
    return `<div> <fieldset>
        <legend class="question">${myQuestions[currentQuestion].question}</legend>
        <input type="radio" name="exercise-question" class="exercise-question" id="answer1-1" tabindex="0" value="a">
        <label for="answer1-1">${myQuestions[currentQuestion].answers.a}</label>
        <br>
        <input type="radio" name="exercise-question" class="exercise-question" id="answer1-2" tabindex="1" value="b">
        <label for="answer1-2">${myQuestions[currentQuestion].answers.b}</label>
        <br>
        <input type="radio" name="exercise-question" class="exercise-question" id="answer1-3" tabindex="2" value="c">
        <label for="answer1-3">${myQuestions[currentQuestion].answers.c}</label><br>
        <input type="radio" name="exercise-question" class="exercise-question" id="answer1-4" tabindex="3" value="d">
        <label for="answer1-4">${myQuestions[currentQuestion].answers.d}</label>
        <button class = "submitAnswer" type="submit">Submit Answer</button><br>
        <p>Question ${currentQuestion + 1} of ${myQuestions.length}</p>
        <p>${answeredCorrect} of ${myQuestions.length} correct</p>
      </fieldset>
      </div>` ;
}

function startQuiz() {
    $('.signup-form').on('click', '.submitStart', function (event) {
        event.preventDefault();

        $(".signup-form").html(loadQuestion);
    });
}

function loadCorrectFeedback() {
    return `<p>That is correct! Way to go!</p>
  <button class = "submitNext" type="submit"> Next </button>
    
  <p>Question ${currentQuestion + 1} of ${myQuestions.length}</p>
        <p>${answeredCorrect} of ${myQuestions.length} correct</p>`;
};

function loadIncorrectFeedback() {
    return `<p>I'm sorry that is incorrect. But keep trying!</p>
    <p> Correct answer is,  ${ myQuestions[currentQuestion].correctAnswerResult} </p>
   <button class = "submitNext" type="submit"> Next </button>
   
   <p>Question ${currentQuestion + 1} of ${myQuestions.length}</p>
        <p>${answeredCorrect} of ${myQuestions.length} correct</p>`;
};
function loadInput() {
    return `<p>Please select an option. You can't escape a question. </p>
   <button class = "submitNext" type="submit"> Next </button>
   
   <p>Question ${currentQuestion + 1} of ${myQuestions.length}</p>
        <p>${answeredCorrect} of ${myQuestions.length} correct</p>`;
};


function submitAnswer() {
    $('.signup-form').on('click', '.submitAnswer', function (event) {
        event.preventDefault();
        let selectedAnswer = $(".exercise-question:checked").val();

       $("#error").html("");
       
        if (selectedAnswer === undefined) {
            $(".signup-form").html(loadInput);
        } else {
            if (selectedAnswer === myQuestions[currentQuestion].correctAnswer) {
                answeredCorrect++;
                $(".signup-form").html(loadCorrectFeedback);

            } else {
                $(".signup-form").html(loadIncorrectFeedback);
            }

            currentQuestion++;
        }
    })
};

function loadExitPage() {
    return `<p>You scored ${answeredCorrect} out of ${myQuestions.length}.</p><br><p>You can use your answers to create a study guide or click the Restart button below if you'd like to try again. Best of luck and remember you are a Rock Star!</p><br>
  <button class = "restartQuiz" type="submit">Restart</button>`;
};

function restartQuiz() {
    $('.signup-form').on('click', '.restartQuiz', function (event) {
        event.preventDefault();
        currentQuestion = 0;
        answeredCorrect = 0;

        $(".signup-form").html(loadQuestion);
    });
}

function submitNext() {
    $(".signup-form").on('click', '.submitNext', function (event) {
        event.preventDefault();
       
        if (currentQuestion == 13) {
            return $(".signup-form").html(loadExitPage);
        } else {
            $(".signup-form").html(loadQuestion);
        }
    });

}

function init() {
    startQuiz();
    submitAnswer();
    submitNext();
    restartQuiz();
}

$(init)
