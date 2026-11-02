
"use strict";

// Quiz question bank
const questionBank = [
  // HTML - Easy
  {
    category: "HTML", difficulty: "easy",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Makeup Language",
      "Home Tool Markup Language"
    ],
    answer: 0,
    explanation: "HTML stands for Hyper Text Markup Language."
  },
  {
    category: "HTML", difficulty: "easy",
    question: "Which tag creates the largest heading?",
    options: ["<head>", "<h6>", "<h1>", "<heading>"],
    answer: 2,
    explanation: "The h1 tag represents the highest-level heading."
  },
  {
    category: "HTML", difficulty: "easy",
    question: "Which tag inserts an image?",
    options: ["<picture-src>", "<img>", "<image>", "<src>"],
    answer: 1,
    explanation: "The img tag embeds an image in an HTML page."
  },

  // HTML - Medium
  {
    category: "HTML", difficulty: "medium",
    question: "Which attribute provides alternative text for an image?",
    options: ["title", "src", "href", "alt"],
    answer: 3,
    explanation: "The alt attribute provides alternative text for an image."
  },
  {
    category: "HTML", difficulty: "medium",
    question: "Which tag creates an ordered list?",
    options: ["<ul>", "<ol>", "<li>", "<dl>"],
    answer: 1,
    explanation: "The ol tag creates a numbered or ordered list."
  },
  {
    category: "HTML", difficulty: "medium",
    question: "Which attribute connects a label to a form input's ID?",
    options: ["name", "value", "for", "class"],
    answer: 2,
    explanation: "The label's for attribute matches the input's id."
  },

  // HTML - Hard
  {
    category: "HTML", difficulty: "hard",
    question: "Which element represents a page's main content?",
    options: ["<main>", "<footer>", "<aside>", "<small>"],
    answer: 0,
    explanation: "The main element represents the dominant page content."
  },
  {
    category: "HTML", difficulty: "hard",
    question: "Which attribute allows a form field to be left unfilled?",
    options: ["required", "disabled", "readonly", "None of these attributes alone"],
    answer: 3,
    explanation: "The required attribute enforces a value; without it, a field can generally be empty."
  },
  {
    category: "HTML", difficulty: "hard",
    question: "Which attribute specifies where a form submits its data?",
    options: ["method", "action", "target", "enctype"],
    answer: 1,
    explanation: "The action attribute specifies the form submission destination."
  },

  // CSS - Easy
  {
    category: "CSS", difficulty: "easy",
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Styling System",
      "Cascading Style Sheets",
      "Colorful Style Syntax"
    ],
    answer: 2,
    explanation: "CSS stands for Cascading Style Sheets."
  },
  {
    category: "CSS", difficulty: "easy",
    question: "Which property changes text color?",
    options: ["font-size", "color", "background", "margin"],
    answer: 1,
    explanation: "The color property sets the foreground color of text."
  },
  {
    category: "CSS", difficulty: "easy",
    question: "Which selector targets an element by its ID?",
    options: [".", "#", "*", "&"],
    answer: 1,
    explanation: "The # symbol is used for ID selectors in CSS."
  },

  // CSS - Medium
  {
    category: "CSS", difficulty: "medium",
    question: "Which property adds space inside an element's border?",
    options: ["margin", "gap", "padding", "outline"],
    answer: 2,
    explanation: "Padding creates space between content and its border."
  },
  {
    category: "CSS", difficulty: "medium",
    question: "Which declaration creates a flex container?",
    options: [
      "position: flex;",
      "display: flex;",
      "flex: display;",
      "layout: flex;"
    ],
    answer: 1,
    explanation: "display: flex establishes a flex formatting context."
  },
  {
    category: "CSS", difficulty: "medium",
    question: "Which CSS unit is relative to the root element's font size?",
    options: ["px", "em", "vh", "rem"],
    answer: 3,
    explanation: "rem is relative to the root element's font size."
  },

  // CSS - Hard
  {
    category: "CSS", difficulty: "hard",
    question: "Which selector has the highest specificity?",
    options: [
      "A class selector",
      "An ID selector",
      "An element selector",
      "A universal selector"
    ],
    answer: 1,
    explanation: "An ID selector has higher specificity than a class or element selector."
  },
  {
    category: "CSS", difficulty: "hard",
    question: "Which declaration includes padding and border within the declared width?",
    options: [
      "box-sizing: content-box;",
      "display: block;",
      "box-sizing: border-box;",
      "overflow: hidden;"
    ],
    answer: 2,
    explanation: "border-box includes padding and border in the specified dimensions."
  },
  {
    category: "CSS", difficulty: "hard",
    question: "Which at-rule defines responsive CSS conditions?",
    options: ["@font-face", "@keyframes", "@supports", "@media"],
    answer: 3,
    explanation: "@media applies styles when specified media conditions match."
  },

  // JavaScript - Easy
  {
    category: "JavaScript", difficulty: "easy",
    question: "Which keyword declares a block-scoped variable?",
    options: ["let", "print", "define", "include"],
    answer: 0,
    explanation: "let declares a variable with block scope."
  },
  {
    category: "JavaScript", difficulty: "easy",
    question: "Which symbol starts a single-line comment?",
    options: ["<!--", "##", "//", "**"],
    answer: 2,
    explanation: "JavaScript uses // for single-line comments."
  },
  {
    category: "JavaScript", difficulty: "easy",
    question: "Which method writes a message to the browser console?",
    options: [
      "console.log()",
      "console.writeLine()",
      "print.console()",
      "browser.log()"
    ],
    answer: 0,
    explanation: "console.log() writes a message to the console."
  },

  // JavaScript - Medium
  {
    category: "JavaScript", difficulty: "medium",
    question: "Which operator checks strict equality?",
    options: ["=", "==", "===", "!="],
    answer: 2,
    explanation: "=== compares values without converting their types."
  },
  {
    category: "JavaScript", difficulty: "medium",
    question: "Which array method adds an element to the end?",
    options: ["shift()", "push()", "pop()", "unshift()"],
    answer: 1,
    explanation: "push() adds one or more elements to the array's end."
  },
  {
    category: "JavaScript", difficulty: "medium",
    question: "Which method selects an element using its ID?",
    options: [
      "document.getElementById()",
      "document.getByClass()",
      "window.selectId()",
      "document.findId()"
    ],
    answer: 0,
    explanation: "getElementById() selects the element with the specified ID."
  },

  // JavaScript - Hard
  {
    category: "JavaScript", difficulty: "hard",
    question: "Which array method returns a new array by transforming each element?",
    options: ["forEach()", "filter()", "map()", "reduce()"],
    answer: 2,
    explanation: "map() creates a new array from callback return values."
  },
  {
    category: "JavaScript", difficulty: "hard",
    question: "What does JSON.parse() do?",
    options: [
      "Converts an object to a JSON string",
      "Converts a JSON string into a JavaScript value",
      "Sorts an array",
      "Creates an HTML element"
    ],
    answer: 1,
    explanation: "JSON.parse() parses a JSON string into a JavaScript value."
  },
  {
    category: "JavaScript", difficulty: "hard",
    question: "Which keyword pauses an async function until a Promise settles?",
    options: ["defer", "pause", "yield", "await"],
    answer: 3,
    explanation: "await pauses the async function until the Promise settles."
  }
];

// DOM elements
const welcomeScreen = document.getElementById("welcome");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const categorySelect = document.getElementById("category");
const difficultySelect = document.getElementById("difficulty");
const startBtn = document.getElementById("start-btn");

const questionCount = document.getElementById("question-count");
const scoreDisplay = document.getElementById("score-display");
const progressTrack = document.getElementById("progress-track");
const progressBar = document.getElementById("progress-bar");
const categoryLabel = document.getElementById("category-label");
const timerDisplay = document.getElementById("timer");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const feedback = document.getElementById("feedback");
const answeredCount = document.getElementById("answered-count");
const nextBtn = document.getElementById("next-btn");

const finalScore = document.getElementById("final-score");
const finalPercentage = document.getElementById("final-percentage");
const correctCount = document.getElementById("correct-count");
const wrongCount = document.getElementById("wrong-count");
const bestScore = document.getElementById("best-score");
const resultHeading = document.getElementById("result-heading");
const resultMessage = document.getElementById("result-message");

const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history-btn");

// Quiz state
let questions = [];
let currentIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let answered = false;
let timeLeft = 20;
let timerId = null;
let answerHistory = [];

// Storage helpers
function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

// Shuffle an array without changing the original
function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

// Start a quiz
function startQuiz() {
  stopTimer();

  const category = categorySelect.value;
  const difficulty = difficultySelect.value;

  const filtered = questionBank.filter(q => {
    const categoryMatches =
      category === "all" || q.category === category;

    return categoryMatches && q.difficulty === difficulty;
  });

  if (filtered.length === 0) {
    alert("No questions available for this selection.");
    return;
  }

  questions = shuffle(filtered).slice(0, 10);
  currentIndex = 0;
  score = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  answered = false;
  answerHistory = [];

  welcomeScreen.hidden = true;
  resultScreen.hidden = true;
  quizScreen.hidden = false;

  renderQuestion();
}

// Display current question
function renderQuestion() {
  stopTimer();

  answered = false;
  const q = questions[currentIndex];

  questionCount.textContent =
    `Question ${currentIndex + 1} of ${questions.length}`;

  scoreDisplay.textContent = `Score: ${score}`;
  categoryLabel.textContent =
    `${q.category} · ${capitalize(q.difficulty)}`;

  questionText.textContent = q.question;
  optionsContainer.replaceChildren();

  feedback.textContent = "";
  feedback.className = "";
  nextBtn.disabled = true;

  nextBtn.textContent =
    currentIndex === questions.length - 1
      ? "View Results →"
      : "Next Question →";

  answeredCount.textContent =
    `${answerHistory.length} answered`;

  updateProgress();
  startTimer();

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = String.fromCharCode(65 + index);

    const text = document.createElement("span");
    text.textContent = option;

    button.append(letter, text);
    button.addEventListener("click", () => selectAnswer(index));

    optionsContainer.appendChild(button);
  });
}

// Answer selection
function selectAnswer(selectedIndex) {
  if (answered) return;

  answered = true;
  stopTimer();

  const q = questions[currentIndex];
  const buttons = optionsContainer.querySelectorAll(".option");
  const isCorrect = selectedIndex === q.answer;

  if (isCorrect) {
    score++;
    correctAnswers++;
    feedback.textContent = "Correct! " + q.explanation;
    feedback.className = "good";
  } else {
    wrongAnswers++;
    feedback.textContent =
      `Not quite. Correct answer: ${q.options[q.answer]}. ` +
      q.explanation;
    feedback.className = "bad";
    buttons[selectedIndex].classList.add("wrong");
  }

  answerHistory.push({
    question: q.question,
    selected: selectedIndex,
    correct: q.answer,
    isCorrect
  });

  buttons[q.answer].classList.add("correct");
  buttons.forEach(button => {
    button.disabled = true;
  });

  scoreDisplay.textContent = `Score: ${score}`;
  answeredCount.textContent =
    `${answerHistory.length} answered`;

  nextBtn.disabled = false;
  updateProgress();
}

// Timer
function startTimer() {
  timeLeft = 20;
  updateTimerDisplay();

  timerId = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      stopTimer();

      if (!answered) {
        handleTimeout();
      }
    }
  }, 1000);
}

function stopTimer() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
}

function updateTimerDisplay() {
  timerDisplay.textContent = `${timeLeft}s`;
  timerDisplay.classList.toggle("urgent", timeLeft <= 5);
}

function handleTimeout() {
  if (answered) return;

  answered = true;
  wrongAnswers++;

  const q = questions[currentIndex];
  const buttons = optionsContainer.querySelectorAll(".option");

  buttons.forEach(button => {
    button.disabled = true;
  });

  buttons[q.answer].classList.add("correct");

  answerHistory.push({
    question: q.question,
    selected: null,
    correct: q.answer,
    isCorrect: false
  });

  feedback.textContent =
    `Time is up! Correct answer: ${q.options[q.answer]}. ` +
    q.explanation;

  feedback.className = "bad";
  answeredCount.textContent =
    `${answerHistory.length} answered`;

  nextBtn.disabled = false;
  updateProgress();
}

// Progress bar
function updateProgress() {
  const completed = answerHistory.length;
  const percentage = (completed / questions.length) * 100;

  progressBar.style.width = `${percentage}%`;
  progressTrack.setAttribute("aria-valuenow", percentage);
}

// Move to the next question or show results
function goToNextQuestion() {
  if (!answered) return;

  stopTimer();

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showResults();
  }
}

// Final results
function showResults() {
  stopTimer();

  quizScreen.hidden = true;
  resultScreen.hidden = false;

  const total = questions.length;
  const percentage = Math.round((score / total) * 100);

  const history = getHistory();
  const previousBest = history.reduce(
    (best, item) => Math.max(best, item.percentage),
    0
  );

  const attempt = {
    category: categorySelect.value === "all"
      ? "Mixed Web Development"
      : categorySelect.value,
    difficulty: difficultySelect.value,
    score,
    total,
    percentage,
    date: new Date().toLocaleString()
  };

  history.unshift(attempt);

  const saved = writeStorage("quizMasterHistory", history.slice(0, 10));

  finalScore.textContent = `${score}/${total}`;
  finalPercentage.textContent = `${percentage}%`;
  correctCount.textContent = correctAnswers;
  wrongCount.textContent = wrongAnswers;
  bestScore.textContent = `${Math.max(previousBest, percentage)}%`;

  if (percentage === 100) {
    resultHeading.textContent = "Perfect Score!";
    resultMessage.textContent = "Excellent work! You answered every question correctly.";
  } else if (percentage >= 70) {
    resultHeading.textContent = "Great Work!";
    resultMessage.textContent = "You have a strong understanding. Keep practising!";
  } else if (percentage >= 40) {
    resultHeading.textContent = "Good Effort!";
    resultMessage.textContent = "Review your answers and try again to improve.";
  } else {
    resultHeading.textContent = "Keep Learning!";
    resultMessage.textContent = "Practice makes progress. Give the quiz another try.";
  }

  if (!saved) {
    resultMessage.textContent +=
      " Your browser could not save the result permanently.";
  }

  renderHistory();
}

// History
function getHistory() {
  const history = readStorage("quizMasterHistory", []);

  return Array.isArray(history)
    ? history.filter(item =>
        item &&
        typeof item.percentage === "number" &&
        typeof item.score === "number"
      )
    : [];
}

function renderHistory() {
  const history = getHistory();
  historyList.replaceChildren();

  if (history.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-history";
    empty.textContent =
      "Complete a quiz to see your results here.";
    historyList.appendChild(empty);
    return;
  }

  history.forEach(item => {
    const row = document.createElement("div");
    row.className = "history-item";

    const details = document.createElement("div");

    const title = document.createElement("strong");
    title.textContent =
      `${item.category} · ${capitalize(item.difficulty)}`;

    const date = document.createElement("small");
    date.textContent = `${item.date} · ${item.score}/${item.total}`;

    details.append(title, date);

    const percentage = document.createElement("span");
    percentage.className = "history-percent";
    percentage.textContent = `${item.percentage}%`;

    row.append(details, percentage);
    historyList.appendChild(row);
  });
}

// Utility
function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

// Restart and navigation
function restartQuiz() {
  resultScreen.hidden = true;
  quizScreen.hidden = false;

  score = 0;
  currentIndex = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  answered = false;
  answerHistory = [];

  questions = shuffle(questions);
  renderQuestion();
}

function goHome() {
  stopTimer();
  quizScreen.hidden = true;
  resultScreen.hidden = true;
  welcomeScreen.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Event listeners
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", goToNextQuestion);

document.getElementById("restart-btn")
  .addEventListener("click", restartQuiz);

document.getElementById("home-btn")
  .addEventListener("click", goHome);

clearHistoryBtn.addEventListener("click", () => {
  const confirmed = confirm(
    "Are you sure you want to clear your saved quiz history?"
  );

  if (confirmed) {
    try {
      localStorage.removeItem("quizMasterHistory");
    } catch (error) {
      alert("Could not clear browser storage.");
    }

    renderHistory();
  }
});

// Initialize the website
renderHistory();
    
