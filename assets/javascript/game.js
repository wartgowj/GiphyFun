$(document).ready(function() {
 var cars = ["mustang", "nova", "camaro"];

 	function makeButtons() {
        $("#buttons").empty();
        for (var i = 0; i < cars.length; i++) {
          var a = $("<button>");
          a.addClass("car");
          a.attr("data-name", cars[i]);
          a.text(cars[i]);
          $("#buttons").append(a);
        }
      }

 	$("#add-car").on("click", function(event) {
        event.preventDefault();
        var car = $("#car-input").val().trim();
        cars.push(car);
        makeButtons();
      });

 	$(document).on("click", 'button', function() {
 		var key = "qoYe6bIlypjHsPJ4agvIy5k39cmIYpn8";
      	var car = $(this).attr("data-name");
      	var queryURL = "https://api.giphy.com/v1/gifs/search?q=car + " +
        car + "&api_key=" + key + "&limit=10";
        console.log(car);
        console.log(queryURL);
    
    	$.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
        var carDiv = $("<div>");
        var p = $('<p>');
        p.text("Rating:" + results[i].rating);
        var carImage = $('<img>');
        carImage.attr("src", results[i].images.fixed_height_still.url);
        carDiv.append(p);
        carDiv.append(carImage);
        $("#images").prepend(carDiv);
    
	  	}
	  });
	});

 makeButtons();

});