const logo = document.querySelector(".logo");

logo.addEventListener("mouseover", () => {
  logo.style.cursor = "pointer";
});

logo.addEventListener("mouseout", () => {
  logo.style.cursor = "default";
});
const highlightsBtn = document.getElementById("high");

highlightsBtn.addEventListener("click", () => {
  window.location.href = "highlights.html";
});

const interviewBtn = document.getElementById("inter");

interviewBtn.addEventListener("click", () => {
  window.location.href = "interviews.html";
});

const analysisBtn = document.getElementById("analysis");

analysisBtn.addEventListener("click", () => {
  window.location.href = "analysis.html";
});

const hubBtn = document.getElementById("videoHub");

hubBtn.addEventListener("click", () => {
  window.location.href = "index (1).html";
});
