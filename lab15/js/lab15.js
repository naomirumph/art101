/**
 * Author: Naomi Rumph <nrumph@ucsc.edu>
 * Created: 4 March 2021
 * (c) Public Domain
 **/

$("#activate").click(function(){
  $("output").empty();

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://jservice.io/api/random",
    // The data to send (will be converted to a query string)
    //data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            //id: 123,
            //api_key: "blahblahblah",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        var qText = data[0].question;
        var aText = data[0].answer;

        console.log("Q:", qText);
        console.log("A", aText);
        $("#output").append("<p>Question:" + qText + "</p>");
        $("#output").append("<p>Answer:" + aText + "</p>");
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
