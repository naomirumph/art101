/*
 * Author:  Naomi Rumph <nrumph@ucsc.edu>
 * Created:  22 February
 * License:  Public Domain
 */

  //function for sorting hat: return Gryffindor, Ravenclaw, Hufflepuff and Slytherin
  // depending on length mod 4
 function sortingHat (str) {
 var len = str.length;
   mod = len % 4;
   if (mod == 0) {
     return "Gryffindor";
   }
   else if (mod == 1) {
    return "Ravenclaw";
   }
   else if (mod == 2) {
    return "Hufflepuff";
   }
   else if (mod == 3) {
    return "Slytherin";
   }
 }
 //same function but for the house bios
function houseBio (str){
var length = str. length;
  mod = length % 4;
  if (mod == 0){
    return "Gryffindors may have become the shining stars in the eyes of the professors but don't be fooled, they definitely have a god/savior complex and think that the rules don't apply to them."
  }
  else if(mod == 1){
    return "If you're a Ravenclaw, you're probably incredibly book smart, but not always the sharpest tool in the shed regarding street smarts. You probably avoid confrontation with authority figures and have definitely sucked up for favors."
  }
  else if(mod == 2){
    return "Hufflepuffs are NOT morning people. You like to go with the flow and steer away from conflict. In turn, you get along with nearly everyone and usually fulfill a diplomatic role."
  }
  else if (mod == 3){
    return "Slytherin -- the house of the snake. You got the street smarts and come off as intimidating to others around you.  You DEFINITELY love to challenge authority and won't take anybody's shit. "
  }
 }
 var myButton = document.getElementById("button");
 button.addEventListener("click",function (){
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    var bio = houseBio(name);
    //for output
  var outputEl = document.getElementById("output");
      outputEl.innerHTML = "The sorting hat has sorted you into " + house
      outputEl.style.color = "Dark Green"
      outputEl.style.textAlign = "center"
      outputEl.fontSize = "xx-large"
      outputEl.style.border = "double"
      outputEl.style.height = "50px"
      outputEl.style.padding = "75px"
      outputEl.style.width = "500px"
  //printed bios for houses
  var bioEl = document.getElementById ("about")
      bioEl.innerHtml = bio
      bioEl.style.color = "Black"
      bioEl.textAlign = "center"
      bioEl.fontSize = "x-large"
      bioEl.style.height = "300px"
      bioEl.style.width = "800px"
      bioEl.style.padding = "100px"
  });
