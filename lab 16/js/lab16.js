/*
 * Author:  Naomi Rumph <nrumph@ucsc.edu>
 * Created:  8 March
 * License:  Public Domain
 */

// Using the core $.ajax() method

var urlOrig = "https://xkcd.com/614/info.0.json";
var urlStart = "https://xkcd.com/";
var urlEnd = "/info.0.json";

var "thisComicNum";
function getComic (url){

$.ajax({
    // The URL for the request (from the api docs)
    url: url,
    // The data to send (will be converted to a query string)
    data: {},
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);

        $("#title").html(data.title);
        $("#image").attr("src", data.img);
          var altText = data.alt;

          thisComicNum = data.num;
          $("#image").attr("title", altText);
          $("#image").attr("alt", altText);

    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
});
}

getComic(urlOrig);

$("prev").click(function(){
  getComic(urlStart + (thisComicNum - 1) + urlEnd);
});
