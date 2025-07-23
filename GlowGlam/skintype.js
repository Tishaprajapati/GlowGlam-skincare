function startquiz() {
  document.getElementById("start").style.display = "none";
  document.getElementById("card1").style.display = "block";
  document.getElementById("body").style.height = "auto";
  console.log("start quiz");
}
var o = 0;
var d = 0;
var c = 0;
var n = 0;
var s = 0;
var cnt = 0;
function oily() {
  console.log("oily");
  console.log(cnt);
  o++;
  if (cnt == 0) {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "block";
    cnt++;
  } else if (cnt == 1) {
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "block";
    cnt++;
  } else if (cnt == 2) {
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "block";
    cnt++;
  } else if (cnt == 3) {
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "block";
    cnt++;
  } else {
    document.getElementById("card5").style.display = "none";
    document.getElementById("body").style.height = "548px";
    document.getElementById("skinr").style.display = "flex";
  }
}
function dry() {
  console.log("dry");
  d++;
  if (cnt == 0) {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "block";
    cnt++;
  } else if (cnt == 1) {
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "block";
    cnt++;
  } else if (cnt == 2) {
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "block";
    cnt++;
  } else if (cnt == 3) {
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "block";
    cnt++;
  } else {
    document.getElementById("card5").style.display = "none";
    document.getElementById("body").style.height = "548px";
    document.getElementById("skinr").style.display ="flex";
  }
}
function combination() {
  console.log("combination");
  c++;
  if (cnt == 0) {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "block";
    cnt++;
  } else if (cnt == 1) {
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "block";
    cnt++;
  } else if (cnt == 2) {
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "block";
    cnt++;
  } else if (cnt == 3) {
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "block";
    cnt++;
  } else {
    document.getElementById("card5").style.display = "none";
    document.getElementById("body").style.height = "548px";
    document.getElementById("skinr").style.display = "flex";
  }
}
function normal() {
  console.log("normal");
  n++;
  if (cnt == 0) {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "block";
    cnt++;
  } else if (cnt == 1) {
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "block";
    cnt++;
  } else if (cnt == 2) {
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "block";
    cnt++;
  } else if (cnt == 3) {
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "block";
    cnt++;
  } else {
    document.getElementById("card5").style.display = "none";
    document.getElementById("body").style.height = "548px";
    document.getElementById("skinr").style.display = "flex";
  }
}
function sensitive() {
  console.log("sensitive");
  s++;
  if (cnt == 0) {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "block";
    cnt++;
  } else if (cnt == 1) {
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "block";
    cnt++;
  } else if (cnt == 2) {
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "block";
    cnt++;
  } else if (cnt == 3) {
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "block";
    cnt++;
  } else {
    document.getElementById("body").style.height = "548px";
    document.getElementById("card5").style.display = "none";
    document.getElementById("skinr").style.display = "flex";
  }
}
var btncnt = 0;
function btn() {
  if (btncnt == 0) {
    btncnt = 1;
  } else if (btncnt == 1) {
    btncnt = 0;
  }
  if (btncnt == 1) {
    document.getElementById("btn").innerHTML = "Re-take Quiz";
    document.getElementById("skin").style.display = "flex";
    if (n >= d && n >= c && n >= s && n >= o) {
      document.getElementById("skin").innerHTML = "Normal Skin";
    } else if (c >= d && c >= o && c >= s && c >= n) {
      document.getElementById("skin").innerHTML = "Combination Skin";
    } else if (o >= d && o >= c && o >= s && o >= n) {
      document.getElementById("skin").innerHTML = "Oily Skin";
    } else if (d >= o && d >= c && d >= s && d >= n) {
      document.getElementById("skin").innerHTML = "Dry Skin";
    } else {
      document.getElementById("skin").innerHTML = "Sensitive Skin";
    }
    o = 0;
    d = 0;
    c = 0;
    s = 0;
    n = 0;
  }
  if (btncnt == 0) {
    document.getElementById("skinr").style.display = "none";
    document.getElementById("start").style.display = "flex";
  }
}
function menufun(){
    document.getElementById("menucard").style.display="block";

}