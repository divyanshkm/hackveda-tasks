function bgchange() {
  if (document.getElementById("panther").checked == true) {
    document.getElementById("divimage").style.backgroundImage =
      "url(images/panther.jpeg)";
    document.getElementById("controlresult").innerHTML = "Panther KF51";
  } else if (document.getElementById("f22").checked == true) {
    document.getElementById("divimage").style.backgroundImage =
      "url(images/f22.jpg)";
    document.getElementById("controlresult").innerHTML = "F22 Raptor";
  } else if (document.getElementById("ac130").checked == true) {
    document.getElementById("divimage").style.backgroundImage =
      "url(images/ac130j.jpg)";
    document.getElementById("controlresult").innerHTML = "AC130J";
  }
}

function factorial() {
  let answer = 1;
  var n = document.getElementById("Factorial").value;
  if (n == 0 || n == 1) {
    document.getElementById("result").innerHTML = `Result: ${answer}`;
  } else if (n > 1) {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    document.getElementById("result").innerHTML = `Result: ${answer}`;
  } else {
    document.getElementById("result").innerHTML = "number has to be positive.";
  }
}
