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

request.onload = function() { // Do not get lost

  let data = JSON.parse(request.responseText);
  console.log(data);
  let pull = pullText(data);
};
request.send();

function pullText(text) {
  for(var n = 0; n < text.length; n++) {
    var para = document.createElement("li");
    para.setAttribute('id', 'list' + n);
    para.innerHTML += text[n] + ' ';
    document.getElementById("gatsby").appendChild(para);
  }
  $('li').click(function () {
<<<<<<< HEAD
    alert($(this.id));
=======
    alert($(this).text());
>>>>>>> 95ee1f098138c08d09f0e5be70d8d76553c73239
});

}
