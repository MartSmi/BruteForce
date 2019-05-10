let stepsTotal = 4;
let currentStep = 0;

let prog = document.getElementById('progress');

let steps = document.getElementById('steps');

let btn = document.getElementById('generate');

btn.onclick = function () {
  if (currentStep < 4) {
    currentStep++;
    steps.innerHTML = "Step: " + currentStep;
  }
}
