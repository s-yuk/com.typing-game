'use strict';

const RANDOM_SENTENCE = [
  "amugiriha kottigawa",
  "komudottoga toorukara mitiwoakero",
  "oseeyojidai",
  "Youtuber31ninn nomikai",
  "jimotonori",
  "no mask onigokko"
];

const type = document.getElementById("type");
const input = document.getElementById("input");
const timer = document.getElementById("timer");

input.addEventListener("input", () => {
  const array = type.querySelectorAll("span");
  const value = input.value.split("");
  
  // 正解フラグ
  let correct = true;
  array.forEach((charSpan, index) => {
    if (value[index] == null) {
      charSpan.classList.remove("correct");
      charSpan.classList.remove("incorrect");

      correct = false;
    } else if (charSpan.innerText === value[index]) {
      charSpan.classList.add("correct");
      charSpan.classList.remove("incorrect");
    } else {
      charSpan.classList.add("incorrect");
      charSpan.classList.remove("correct");
      
      correct = false;
    }
  });
  if (correct == true) {
    renderNextSentence();
  }
});

function getRandomSentence() {
  let randomIndex = Math.floor(Math.random() * (RANDOM_SENTENCE.length));
  return RANDOM_SENTENCE[randomIndex];
}

function renderNextSentence() {
  const sentence = getRandomSentence();
  type.innerText = "";
  let oneText = sentence.split("");
  oneText.forEach((char) => {
    const charSpan = document.createElement("span");
    charSpan.innerText = char;
    console.log(charSpan);
    type.appendChild(charSpan);
  });

  input.value = "";

  startTimer();
}

let startTime;
let ownTime = 15;

function startTimer() {
  timer.innerText = ownTime;
  startTime = new Date();
  setInterval(() => {
    timer.innerText = ownTime - getTimerTime();
    if (timer.innerText <= 0) TimeUp();
  }, 1000);
  console.log(timer.innerText);
}

function TimeUp() {
  renderNextSentence();
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}
renderNextSentence();