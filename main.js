let stepsTotal = 4;
let currentStep = 0;

let prog = document.getElementById('progress');

let steps = document.getElementById('steps');


btn.onclick = function () {
  if (currentStep < 4) {
    currentStep++;
    steps.innerHTML = "Step: " + currentStep;
  }
}
/*
$("").click(function(){
  $("p").hide();
});
$(".btn2").click(function(){
  $("p").show();
});*/
