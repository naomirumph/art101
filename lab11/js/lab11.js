/*
 * Author:  Naomi Rumph <nrumph@ucsc.edu>
 * Created:  17 February
 * License:  Public Domain
 */

//     Find the section you want to add the button to
//     Create the button
//     Give it a text label
//     Add it to the section
$("#challenge").append("<button id='c-button' >Button</button>");
$("#problem").append("<button id='p-button' >Button</button>");
$("#results").append("<button id='r-button' >Button</button>");

//    Use the JavaScript console to test all the parts of your program and see if anything went wrong
//    Experiment with new commands in the JavaScript console to see how they work
//    Add comments to your function to say what it does
//    Make it neat using lots of whitespace.
//    Style in programming matters, so use indentations and spaces where necessary.
//    Remember to put a semicolon at the end of every line.
$("#c-button").click(function(){
  //find the section, toggle a class
  // $(#challenge).toggleClass("special");
  $(this).parent().toggleClass("special");
  })
$("#p-button").click(function(){
  //find the section, toggle a class
  // $(#challenge).toggleClass("special");
  $(this).parent().toggleClass("special");
  })
$("#r-button").click(function(){
    //find the section, toggle a class
    // $(#challenge).toggleClass("special");
  $(this).parent().toggleClass("special");
  })
