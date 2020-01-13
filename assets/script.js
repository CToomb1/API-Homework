var $searchForm = $("#search-form");
var $searchInput = $("#search-input");

function handleFormSubmit(event) {
    event.preventDefault();

    var searchTerm = $searchInput.val();

    if (!searchTerm) {
        return false;
    }

    var queryUrl = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=58044ceb57e67f25a86502f8ce4be039&units=imperial`;

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        $(".city").html("<h1>" + response.name + "</h1>");
        $(".description").text(
            "Weather: " + response.weather[0].description
        );
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);
        $(".wind").text("Wind Speed: " + response.wind.speed);
    });

}

$searchForm.on("submit", handleFormSubmit);