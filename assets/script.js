var $searchForm = $("#search-form");
var $searchInput = $("#search-input");
var $searchedCities = $("#searched-cities");

function handleFormSubmit(event) {
  event.preventDefault();
@@ -12,11 +13,11 @@ function handleFormSubmit(event) {
    return false;
  }

  var queryUrl = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=bb2771f5bb681a2a7b1c9f5f413832a1&units=imperial`;
  var queryURL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=bb2771f5bb681a2a7b1c9f5f413832a1&units=imperial`;

  // make our search with AJAX
  $.ajax({
    url: queryUrl,
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
@@ -26,10 +27,26 @@ function handleFormSubmit(event) {
      "Weather: " + response.weather[0].description
    );
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".temp").text("Temperature (F) " + response.main.temp);
    $(".temp").text("Temperature (F): " + response.main.temp);
    $(".wind").text("Wind Speed: " + response.wind.speed);
  });

}

function handleCitySearchedSubmit(event) {
  event.preventDefault();

  var cities = $searchInput.val();

  localStorage.setItem(cities, "cities");

  localStorage.getItem(cities);

  $searchedCities.append(cities);

  console.log(cities);

};

$searchForm.on("submit", handleFormSubmit);
$searchedCities.on("submit", handleCitySearchedSubmit);
