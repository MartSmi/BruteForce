let stepsTotal = 4;
let currentStep = 1;

let prog = document.getElementById('progress');

let steps = document.getElementById('steps');

let btnNext = document.getElementById('next');

let btnBack = document.getElementById('back');

$(btnBack).hide();
$("#step2").hide();
$("#step3").hide();
$("#step4").hide();
steps.innerHTML = "Step: " + currentStep;

btnNext.onclick = function () {

  if (currentStep < 4) {
    currentStep++;
    steps.innerHTML = "Step: " + currentStep;
  }

  $(".steps").hide();


  switch (currentStep) {
    case 2:
      $(btnBack).show();
      $("#step2").show();
    break;

    case 3:
      $("#step3").show();
    break;

    case 4:
      $("#step4").show();
    break;
  }
}

btnBack.onclick = function () {
  switch (currentStep) {
    case 2:
      $("#step1").show();
    break;

    case 3:
      $("#step2").show();
    break;

    case 4:
      $("#step3").show();
    break;
  }
}

var request = new XMLHttpRequest();
request.open('GET', './gatsby.json');

request.onload = function() {
  let data = JSON.parse(request.responseText);
  console.log(data);
  for(var n = 0; n < data.length; n++) {
    var para = document.createElement("li");
    para.innerHTML += data[n];
    document.getElementById("gatsby").appendChild(para);
  }

};
request.send();
