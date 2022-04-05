//Var's for Today's Weather (per City)
var cityHeader = document.getElementById("selectedCity")
var weatherToday = document.getElementById("weater-date-today");
var tempToday = document.getElementById("temp");
var windToday = document.getElementById("wind");
var humidityToday = document.getElementById("humidity");
var uvToday = document.getElementById("uv-index");
var uvGraphic = document.getElementById("uv-graphic");

//Pull information for today's date


//Weather Data - Take user input and create new url for each city

var api = "https://api.openweathermap.org/data/2.5/weather?";
//Make city a dynamic variable - add directly to setup function
// var city = "Minneapolis";
var apiKey =  "&appid=2e29086a1bb8840c610e0d65481f5462";
var units = "&units=metric";

// searchURL = api + city + apiKey;
var weather;
var search;
var button = document.getElementById("submit");
button.addEventListener("click", setup);


function setup(e) {
    e.preventDefault();
    search = document.querySelector('input').value;
    console.log("setup called");
    console.log(search); 
    weatherCall()
};

function weatherCall() {
    var searchURL = api + search + apiKey + units;
    $.getJSON(searchURL, gotData);  //Grab information and display using ajax function
    console.log("weathercall triggered");
};

function gotData(data) {
    weather = data;
};

function draw() {
    if (weather) {
        var temp = weather.main.temp;
        var humidity = weather.main.humidity;
        var windSpeed = weather.wind.speed;
        var uvIndex
        cityHeader.innerText = temp;
    };
};

//Declare for Date-1's Weather
var date1 = document.getElementById("date-1")
var date1Emoji = document.getElementById("forecast-emoji-1")
var date1Temp  = document.getElementById("temp-1")
var date1Wind = document.getElementById("wind-1")
var date1Humid = document.getElementById("humidity-1")

//Declare for Date-2's Weather
var date2 = document.getElementById("date-2")
var date2Emoji = document.getElementById("forecast-emoji-2")
var date2Temp  = document.getElementById("temp-2")
var date2Wind = document.getElementById("wind-2")
var date2Humid = document.getElementById("humidity-2")

//Declare for Date-3's Weather
var date3 = document.getElementById("date-3")
var date3Emoji = document.getElementById("forecast-emoji-3")
var date3Temp  = document.getElementById("temp-3")
var date3Wind = document.getElementById("wind-3")
var date3Humid = document.getElementById("humidity-3")

// Declare for Date-4's Weather
var date4 = document.getElementById("date-4")
var date4Emoji = document.getElementById("forecast-emoji-4")
var date4Temp  = document.getElementById("temp-4")
var date4Wind = document.getElementById("wind-4")
var date4Humid = document.getElementById("humidity-4")

// Declare for Date-5's Weather
var date5 = document.getElementById("date-5")
var date5Emoji = document.getElementById("forecast-emoji-5")
var date5Temp  = document.getElementById("temp-5")
var date5Wind = document.getElementById("wind-5")
var date5Humid = document.getElementById("humidity-5")

// Pull Var for User Search


// Search Weather App for City


// Sift Selected City's Weather Data 


// Return City's Selected Data to Respective variables