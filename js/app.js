var fizzVal = 3;
var buzzVal = 5;

function isFizz(i) {
  return i % fizzVal == 0; // check if i has a remained when divided by the fizz value.
}

function isBuzz(i) {
  return i % buzzVal == 0; // check if i has a remained when divided by the buzz value.
}

var button = document.getElementById("go-button");
var outputLocation = document.getElementById("app-container")
var outputHTML = "";

button.onclick = function() {
  for (var i = 1; i <= 100; i += 1) {
    //document.write("<p>" + i + "</p>");
    if(isFizz(i) && isBuzz(i)) { // check if fizz and buzz check return true, if so, output FizzBuzz
      outputHTML += "<p class='fizzbuzz'>FizzBuzz</p>";
    } else if (isFizz(i)) {
      outputHTML += "<p class='fizz'>Fizz</p>"; // check if fizz check return true, if so, output Fizz
    } else if (isBuzz(i)) {
      outputHTML += "<p class='buzz'>Buzz</p>"; // check if Buzz check return true, if so, output Buzz
    } else {
      outputHTML += "<p>" + i + "</p>"; // if neither Fizz or Buzz or FizzBuzz, output number
    }
  }
  outputLocation.innerHTML = outputHTML
}
