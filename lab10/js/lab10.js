/*
 * Author:  Naomi Rumph <nrumph@ucsc.edu>
 * Created:  15 February
 * License:  Public Domain
 */

 var button =document.getElementById('my-button');
 function sayMyName() {
    var h2 =document.querySelector('h2');
    h2.innerText ="Hello "+ name;
  }
    button.addEventListener('click', sayMyName);

  // sortUserName - a function that takes user input and sorts the letters
  // of their name
  function sortUserName() {
     var userName =
     console.log("userName =", userName);

     var nameArray = userName.split('');
     console.log("nameArray =", nameArray);

     var nameArraySort = nameArray.sort();
     console.log("nameArraySort =", nameArraySort);

     var nameSorted = nameArraySort.join('');
     console.log("nameSorted =", nameSorted);

     return nameSorted;
 }

 // Output
 document.writeln("Why hello there, I've fixed your name: ",
   sortUserName(), "</br>");
