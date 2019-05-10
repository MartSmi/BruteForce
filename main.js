let stepsTotal = 4;
let currentStep = 0;

let prog = document.getElementById('progress');

let steps = document.getElementById('steps');

let btnNext = document.getElementById('next');

let btnBack = document.getElementById('back');

btn.onclick = function () {
  if (currentStep < 4) {
    currentStep++;
    steps.innerHTML = "Step: " + currentStep;
  }
}
