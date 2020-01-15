var $searchForm = $("#search-form");
var $searchInput = $("#search-input");
var $searchedCities = $("#searched-cities");
var $cityResults = $("#city-results");

var cities = [];

function printArr(weatherArr, cityName) {
    for (var i = 0; i < weatherArr.length; i++) {
        console.log(cityName);
        console.log(weatherArr);

        var $card = $('<div>').addClass('card bg-light text-dark mb-3');

        var $cardBody = $('<div>').addClass('card-body');
        $cardBody
            .append(`<p>Temperature (F): ${weatherArr[i].main.temp}</p>`)
            .append(`<p>Weather: ${weatherArr[i].weather[0].main}</p>`)
            .append(`<p>Wind: ${weatherArr[i].wind.speed}</p>`);

        $card.append($cardBody);

        $cityResults.append($card);
    }
    $(".city").html("<h1>" + cityName + "</h1>");
}

function handleFormSubmit(event) {
    event.preventDefault();

    var searchTerm = $searchInput.val();

    if (!searchTerm) {
        return false;
    }

    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=bb2771f5bb681a2a7b1c9f5f413832a1&units=imperial`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var fiveDayArr = response.list.filter(function (weatherObj) {
            if (weatherObj.dt_txt.includes('06:00:00')) {
                return true;
            }
            else {
                return false;
            };

        });

        printArr(fiveDayArr, response.city.name);
    });
}

$searchForm.on("submit", handleFormSubmit);