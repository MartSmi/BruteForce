var currentStep = 0;
var keywords = ["hello", "bonjour", "labas"];
var number;
var emoji;

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
      if(keywords.length >= 3)
      {
        currentStep++;
        move();
      }
      else {
        alert("First choose atleast 3 keywords");
      }
      break;
    case 2:
      if(number != undefined)
      {
        currentStep++;
        move();
      }
      else {
        alert("First choose your favourite number");
      }
      break;
    case 3:
      if(emoji != undefined)
      {
        createPassword();
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
      if(keywords.length >= 3)
      {
        currentStep--;
        move();
      }
      else {
        alert("First choose atleast 3 keywords");
      }
      break;
    case 3:
      if(number != undefined)
      {
        currentStep--;
        move();
      }
      else {
        alert("First choose your favourite number");
      }
      break;
    case 4:
      if(keywords.length >= 3)
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
      keywords[keywords.length] = $(this).text();
    }
  });
}


document.getElementById('sliderBar').oninput = function () {
  number = document.getElementById('sliderBar').value;
  if (number > 0) {
    document.getElementById('favnumb').innerHTML = number;
  }
}

function getEmojiId(emo) {
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

function createPassword() {
  var thePassword = '';
  for (var i = 0; i < keywords.length; i++) {
    thePassword += keywords[i].slice(0, 2);
  }
  thePassword += number * keywords.length;
  thePassword += emoji;
  document.getElementById('pass').innerHTML = thePassword;
  document.getElementById('passtext3').innerHTML = keywords + '<br>' + '<br>' + '<br>' + number + ' * ' + keywords.length + ' = ' + number * keywords.length+ '<br>' + '<br>' + '<br>'+ '<br>' + emoji;
}
