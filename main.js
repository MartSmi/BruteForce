let stepsTotal = 4;
let currentStep = 1;
var keywords = [];
let keywordsCount = 0;

let btnGen = document.getElementById('generate');

let btnNext = document.getElementById('next');

let btnBack = document.getElementById('back');

getJson();
$(btnBack).hide();
$(btnNext).hide();
$("#step2").hide();
$("#step3").hide();
$("#step4").hide();
$("#imgBackround2").hide();
$("#step4").hide();
$("#step4").hide();

btnGen.onclick = function () {
  $(btnBack).show();
  $(btnNext).show();
  $("#imgBackround1").hide();
  $("#imgBackround2").show();
  $("#step1").hide();
  $("#step2").show();
  currentStep++;

}

btnNext.onclick = function () {
  currentStep++;
  switch (currentStep) {
    case 3:
      $("#step2").hide();
      $("#step3").show();
    break;

    case 4:
      $("#step3").hide();
      $("#step4").show();
    break;
  }
}

btnBack.onclick = function () {
  currentStep--;
  switch (currentStep) {
    case 1:
      $(btnBack).hide();
      $(btnNext).hide();
      $("#step2").hide();
      $("#step1").show();
      $("#imgBackround1").show();
      $("#imgBackround2").hide();
    break;

    case 2:
      $("#step3").hide();
      $("#step2").show();
    break;

    case 3:
      $("#step4").hide();
      $("#step3").show();
    break;
  }
}

// Getting JSON
function getJson() {
  var request = new XMLHttpRequest();
  request.open('GET', './keywords.json');

  request.onload = function() { // Do not get lost

    let data = JSON.parse(request.responseText);
    let pull = pullText(data);
  };
  request.send();
}

//Pulling the text words from JSON
function pullText(text) {
  let line = Math.floor(Math.random()*(text.length));
  for(var l = line; l <= line + 5; l++)
  {
    for(var n = 0; n < text[l].length; n++) {
      var para = document.createElement("li");
      para.setAttribute('id', 'list' + n);
      para.innerHTML += text[l][n] + ' ';
      document.getElementById("keytext").appendChild(para);
    }
  }
  // Text functionality
  $('li').click(function () {
    if (this.getAttribute("style") != "color:green") {
      this.setAttribute('style', 'color:green');
      keywords[keywordsCount++] = $(this).text();
    }
  });
}


document.getElementById('sliderBar').oninput = function () {
  let favNumber = document.getElementById('sliderBar').value;
  if (favNumber > 0) {
    document.getElementById('favnumb').innerHTML = favNumber;
  }
}
