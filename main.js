var currentStep = 0;
var keywords = [];
var keywordsCount = 3;
var favNumber = 2;
var emoji = ":D";

let btnGen = document.getElementById('generate');

let btnNext = document.getElementById('next');

let btnBack = document.getElementById('back');

let progress = document.getElementById('progressthin');


window.onload = function() {
  getJson();
  $(".circle").css("margin-top", ($("#progresscontainer").height() - $(".bigcircle").height()) / 2);
}

function move(){
  $("#progressthin").css("width", 33.4 * (currentStep - 1) + "%");
  $("#mainSlider").css("transform","translateX("+ currentStep * -$(window).width() +"px)");
}


function next() {
  // console.log("next()")
  switch (currentStep) {
    case 0:
      currentStep++;
      move();
      $("#imgBackround1").delay(1200).fadeOut(400);
      $("#imgBackround2").delay(1200).fadeIn(400);
      $("#progresscontainer").delay(1200).fadeIn(400);
      $(btnBack).delay(1400).fadeIn(400);
      $(btnNext).delay(1400).fadeIn(400);
      break;
    case 1:
      if(keywordsCount >= 3)
      {
        currentStep++;
        move();
      }
      else {
        alert("First choose atleast 3 keywords");
      }
      break;
    case 2:
      if(favNumber != undefined)
      {
        currentStep++;
        move();
      }
      else {
        alert("First choose your favourite number");
      }
      break;
    case 3:
      if(keywordsCount >= 3)
      {
        currentStep++;
        move();
        $(btnBack).delay(400).fadeOut(400);
        $(btnNext).delay(400).fadeOut(400);

      }
      else {
        alert("First choose your favourite emoji")
      }
      break;
    default:
      alert("error");
  }
}

function back() {
  // console.log("next()")
  switch (currentStep) {
    case 1:
      currentStep--;
      move();
      $("#imgBackround2").delay(1200).fadeOut(400);
      $("#imgBackround1").delay(1200).fadeIn(400);
      $("#progresscontainer").delay(1200).fadeOut(400);
      $(btnBack).fadeOut(400);
      $(btnNext).fadeOut(400);
      break;
    case 2:
      if(keywordsCount >= 3)
      {
        currentStep--;
        move();
      }
      else {
        alert("First choose atleast 3 keywords");
      }
      break;
    case 3:
      if(favNumber != undefined)
      {
        currentStep--;
        move();
      }
      else {
        alert("First choose your favourite number");
      }
      break;
    case 4:
      if(keywordsCount >= 3)
      {
        currentStep--;
        move();
      }
      else {
        alert("First choose your favourite emoji")
      }
      break;
    default:
      alert("error");
  }
}

document.onkeydown = function(event) {
    switch (event.keyCode) {
       case 37:
            back();
          break;
       case 39:
            next();
          break;
    }
};

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
    if (this.getAttribute("style") != "color:#69abf0") {
      this.setAttribute('style', 'color:#69abf0');
      // this.setAttribute('style', 'font-weight:1200');
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

function getemoId(emo) {
  console.log(emo);
  switch (emo) {
    case 'emoji1':
      emoji = ':)';
      emo.setAttribute('style', 'font-size: 100px');
    break;

    case 'emoji2':
      emoji = ':*';
    break;

    case 'emoji3':
      emoji = '>:‑)';
    break;

    case 'emoji4':
      emoji = ':(';
    break;

    case 'emoji5':
      emoji = ':D';
    break;

    case 'emoji6':
      emoji = ';)';
    break;

    case 'emoji7':
      emoji = '<3';
    break;

    case 'emoji8':
      emoji = ":'(";
    break;

    case 'emoji9':
      emoji = ':O';
    break;

    case 'emoji10':
      emoji = ':|';
    break;

    case 'emoji11':
      emoji = 'XD';
    break;

    case 'emoji12':
      emoji = ':(0';
    break;
  }
  console.log(emoji);
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
  document.getElementById('passtext3').innerHTML = words + '<br>' + '<br>' + '<br>' + num + ' * ' + words.length + ' = ' + favNumber * words.length+ '<br>' + '<br>' + '<br>'+ '<br>' + emote;
}
