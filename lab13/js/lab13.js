/**
 * Author: Naomi Rumph
 * Created: 24 February 2021
 * (c) Public Domain
 **/

// given a number and an object that looks like this:
//  {3: "Fizz", 5 "Buzz", 7: "Boom"}
// loops over the number and outputs the number and the matching text
// for factors

    for (i=1; i <= 100; i++) {
      if (i%15 == 0) {
        console.log("FizzBuzz");
      } else if (i%3 == 0) {
        console.log("Fizz");
      } else if (i%5 == 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }

  function fizzBuzzBoom(maxNums; factorObj) {
    //iterate over all of out numbers
    for (var num=0; num<maxNums; num++) {
      //reset output string
      var outputStr = "";
      //iterate over the factors we got from the html
      for (var factor in factorObj) {
        //check to see if this num is a multiple of factors
        if (num % factor == 0) {
          //if yes, then add the text to output string
          outputStr += factorObj[factor];

        }
      }


    //outputStr words - format it like this " - FizzBuzz!"
    if (outputStr) {
      outputStr = " - " + outputStr + "FizzBuzz!";
    }
    outputToPage(num.toString() + outputStr)
  }
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
  var max = document.getElementById("max").value;
  console.log("max:", max)
  if (! max) {
    reportError("You must provide a maximum"):
  }
}
