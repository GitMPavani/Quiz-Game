const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: 0
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1
    },
    // Add more questions as needed
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let timer;
  
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const submitButton = document.getElementById("submit");
  const scoreValueElement = document.getElementById("score-value");
  const feedbackElement = document.getElementById("feedback");
  const timerValueElement = document.getElementById("timer-value");
  
  function displayQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    choicesElement.innerHTML = "";
  
    q.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", () => checkAnswer(index));
      choicesElement.appendChild(button);
    });
  }
  
  function checkAnswer(index) {
    clearInterval(timer); // Stop the timer on answering
  
    if (index === questions[currentQuestion].correctAnswer) {
      score++;
      scoreValueElement.textContent = score;
      feedbackElement.textContent = "Correct!";
    } else {
      feedbackElement.textContent = "Incorrect!";
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      setTimeout(startTimer, 1000); // Delay before showing the next question
      setTimeout(displayQuestion, 1500); // Delay before displaying the next question
    } else {
      endGame();
    }
  }
  
  function startTimer() {
    let time = 10; // Adjust the time limit here (in seconds)
    timer = setInterval(() => {
      time--;
      timerValueElement.textContent = time;
      if (time === 0) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);
  }
  
  function endGame() {
    clearInterval(timer);
    feedbackElement.textContent = "";
    alert(`Quiz finished! Your score: ${score}/${questions.length}`);
    // Additional logic to handle end of quiz
    // For example, resetting the quiz or displaying a message
  }
  
  submitButton.addEventListener("click", () => {
    startTimer();
    displayQuestion();
  });
  
  // Display the first question when the page loads
  displayQuestion();
  