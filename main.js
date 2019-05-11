let stepsTotal = 4;
let currentStep = 1;
var keywords = [];
let keywordsCount = 0;
var favNumber;

let btnGen = document.getElementById('generate');

let btnNext = document.getElementById('next');

let btnBack = document.getElementById('back');

let progress = document.getElementById('progressthin');

getJson();
$(btnBack).hide();
$(btnNext).hide();
$("#step1").hide();
$("#step2").hide();
$("#step3").hide();
$("#step4").hide();
$("#imgBackround2").hide();

btnGen.onclick = function () {
  $(btnBack).show();
  $(btnNext).show();
  $("#imgBackround1").hide();
  $("#imgBackround2").show();
  $("#step0").hide();
  $("#step1").show();
}

btnNext.onclick = function () {
  currentStep++;
  switch (currentStep) {
    case 2:
      $("#step1").hide();
      $("#step2").show();
      progress.style.width = '33%';
    break;

    case 3:
      $("#step2").hide();
      $("#step3").show();
      progress.style.width = '66%';

    break;

    case 4:
      $("#step3").hide();
      $("#step4").show();
      $(btnBack).hide();
      $(btnNext).hide();
      progress.style.width = '99%';
      createPassword(keywords, favNumber, output);
    break;
  }
}

btnBack.onclick = function () {
  currentStep--;
  switch (currentStep) {
    case 0:
      $(btnBack).hide();
      $(btnNext).hide();
      $("#step1").hide();
      $("#step0").show();
      $("#imgBackround1").show();
      $("#imgBackround2").hide();
      currentStep++;
    break;

    case 1:
      $("#step2").hide();
      $("#step1").show();
      progress.style.width = '0';

    break;

    case 2:
      $("#step3").hide();
      $("#step2").show();
      progress.style.width = '33%';
    break;

    case 3:
      $("#step4").hide();
      $("#step3").show();
      progress.style.width = '66%';

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
  favNumber = document.getElementById('sliderBar').value;
  if (favNumber > 0) {
    document.getElementById('favnumb').innerHTML = favNumber;
  }
}
var output = '';

function getEmojiId(emoji) {
  console.log(emoji);
  switch (emoji) {
    case 'emoji1':
      output = ':)';
    break;

    case 'emoji2':
      output = ':*';
    break;

    case 'emoji3':
      output = '>:‑)';
    break;

    case 'emoji4':
      output = ':(';
    break;

    case 'emoji5':
      output = ':D';
    break;

    case 'emoji6':
      output = ';)';
    break;

    case 'emoji7':
      output = '<3';
    break;

    case 'emoji8':
      output = ":'(";
    break;

    case 'emoji9':
      output = ':O';
    break;

    case 'emoji10':
      output = ':|';
    break;

    case 'emoji11':
      output = 'XD';
    break;

    case 'emoji12':
      output = ':(0';
    break;
  }
  console.log(output);
}

function createPassword(words, num, emote) {
  var thePassword = '';
  console.log(num);
  for (var i = 0; i < words.length; i++) {
    console.log(words[i].slice(0, 2));
    thePassword += words[i].slice(0, 2);
  }
  thePassword += num * words.length;
  console.log(emote);
  thePassword += emote;
  document.getElementById('pass').innerHTML = thePassword;
  document.getElementById('passtext3').innerHTML = words + '<br>' + num + ' * ' + words.length + '<br>' + emote;
}
