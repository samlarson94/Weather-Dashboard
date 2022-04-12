//Var's for Today's Weather (per City)
const timeEl = document.getElementById("current-time")
const dateEl = document.getElementById("current-date")
const weatherEl = document.getElementById("weather-icon")

const weatherForecastEl = document.getElementById("weather-forecast")

var cityHeader = document.getElementById("selectedCity")
var weatherToday = document.getElementById("weater-date-today");
var tempToday = document.getElementById("temp");
var windToday = document.getElementById("wind");
var humidityToday = document.getElementById("humidity");
var uvToday = document.getElementById("uv-index");
var uvGraphic = document.getElementById("uv-graphic");
var windDirect = document.getElementById("wind-direct");
var weatherEmoji = document.getElementById("weather-icon");

var lat;
var long;

// === Current Date/Time Interval ===
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
setInterval(() => {
    const time = new Date();
    const month = time.getMonth()
    const date = time.getDate();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursIn12HrFormat = hours >= 13 ? hours %12: hours; //truncated if conditional
    const minute = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM'; //truncated if conditional

    timeEl.innerHTML = hoursIn12HrFormat + ':' + minute + " " + ampm;
    dateEl.innerHTML = days[day] + ", " + months[month] + " "+ date;
}, 1000)

// Reference = https://www.youtube.com/watch?v=6trGQWzg2AI&ab_channel=AsishGeorgeTech

//Weather Data - Take user input and create new url for each city

var api = "https://api.openweathermap.org/data/2.5/weather?q=";
//Make city a dynamic variable - add directly to setup function
// var city = "Minneapolis"; --> Moved inside setup function (input value)
var apiKey =  "&appid=2e29086a1bb8840c610e0d65481f5462";
var units = "&units=imperial";

// searchURL = api + city + apiKey;
var weather;
var search;
var button = document.getElementById("submit");
button.addEventListener("click", setup);

//solved event default issue
function setup(e) {
    e.preventDefault();
    search = document.querySelector('input').value;
    console.log("setup called");
    console.log(search); 
    weatherCall();
    
};

function weatherCall() {
    var searchURL = api + search + apiKey + units;
    // $.getJSON(searchURL, gotData);  
    //Grab information and display using ajax/fetch function
fetch(searchURL)
.then(response => response.json())
.then(data => gotData(data))

    .catch(err => alert("Wrong or Misspelled City Name")) 
};

function gotData(data) {
    weather = data;
    console.log(weather);
    draw();
};

function draw() {
    if (weather) {
        console.log("draw function called");
        var cityName = weather.name;
        cityHeader.innerText = cityName;
        var weatherIcon = weather.weather[0].icon;
        console.log(weatherIcon);
        weatherEmoji.setAttribute("src", "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png" );
        var temp = weather.main.temp;
        tempToday.innerText = "Temp: " + temp + " F";
        var humidity = weather.main.humidity;
        humidityToday.innerText = "Humidity: " + humidity + "%";
        var windSpeed = weather.wind.speed;
        windToday.innerText = "Wind: " + windSpeed + " knot";
        var windDirection = weather.wind.deg;
        windDirect.innerText = "Wind Direction: " + windDirection + " deg";
        
        lat = weather.coord.lat;
        long = weather.coord.lon;
    };
};

//City data to push into One Call API for additional information

if (lat !== undefined && long !== undefined) {
    var oneCallAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat +"&lon=" + long + apiKey + units;
    oneCall();
}



function oneCall() {
    var oneCallURL = oneCallAPI;
  
fetch(oneCallURL)
.then(response => response.json())
.then(data => gotDataOneCall(data))

    .catch(err => alert("Wrong or Misspelled City Name")) //alert not currently displaying on UI, only console. 
};

function gotDataOneCall(data) {
    weatherOne = data;
    console.log(weather);
    drawOneCall();
};

function drawOneCall() {
    if (weatherOne) {
        console.log("drawOne function called");

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