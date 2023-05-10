const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');
const mapItems = document.getElementById('map-items')


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY ='14ccf478e4f28fd533a07ca06bb234e4';

// const API_KEY ='fe55eda2af23292a08e7a7514f1b332c';

setInterval(() => {const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');            
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);

getWeatherData()
getDailyWeatherForecastData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude } = success.coords;
        let myArray = document.getElementById("select-province").value.split("|");
        latitude = myArray[1];
        longitude = myArray[2];
        console.log(myArray)
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
        console.log(data)
        showWeatherData(data);
        })

    })
}

function showWeatherData (data){
    // let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;
    let humidity = data.main.humidity
    let pressure = data.main.pressure
    let sunrise = data.sys.sunrise
    let sunset = data.sys.sunset
    let speed = data.wind.speed

    timezone.innerHTML = ''//data.timezone;
    countryEl.innerHTML = ''//data.sys.country//data.lat + 'N ' + data.lon+'E'

    currentWeatherItemsEl.innerHTML = 
    `<div class="weather-item">
        <div>Humidity</div>
        <div>${humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${pressure}</div>
    </div>
    <div class="weather-item">
    <div>Wind Speed</div>
    <div>${speed}</div>
</div>

    <div class="weather-item">
        <div>Sunrise</div>
        <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    </div>
    
    
    `;

}
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'
   
    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);


function getDailyWeatherForecastData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude } = success.coords;
        let myArray = document.getElementById("select-province").value.split("|");
        latitude = myArray[1];
        longitude = myArray[2];
        console.log(myArray)
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        showDailyWeatherForecastData(data);
        })

    })
}

function showDailyWeatherForecastData (data){

    let otherDayForcast = ''
    data.list.forEach((day, idx) => {
        let myArrayDateTime = day.dt_txt.split(" ");
        let myArrayHour = myArrayDateTime[1].split(":");
        let myArrayDay = myArrayDateTime[0].split("-");
        if(idx == 0){
            currentTempEl.innerHTML = `
                    <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
                    <div class="other">
                        <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
                        <div class="temp">${myArrayHour[0]}:${myArrayHour[1]}</div>
                        <div class="temp">Temperature</div>
                        <div class="temp">Min - ${day.main.temp_min}&#176;C</div>
                        <div class="temp">Max - ${day.main.temp_max}&#176;C</div>
                        <div class="temp-hour">${myArrayDay[2]}-${myArrayDay[1]}-${myArrayDay[0]}</div>
                    </div>
                
                `
        }
        if(myArrayHour[0] == '06'){
            otherDayForcast += `
                <div class="weather-forecast-item">
                    <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                    <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                    <div class="temp-hour">${myArrayHour[0]}:${myArrayHour[1]}</div>
                    <div class="temp">Min - ${day.main.temp_min}&#176;C</div>
                    <div class="temp">Max - ${day.main.temp_max}&#176;C</div>
                    <div class="temp-hour">${myArrayDay[2]}-${myArrayDay[1]}-${myArrayDay[0]}</div>
                </div>
                `
            // if(isFirstWeatherForecast){
            //     currentTempEl.innerHTML = `
            //         <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            //         <div class="other">
            //             <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
            //             <div class="temp">${myArrayHour[0]}:${myArrayHour[1]}</div>
            //             <div class="temp">Temperature</div>
            //             <div class="temp">Min - ${day.main.temp_min}&#176;C</div>
            //             <div class="temp">Max - ${day.main.temp_max}&#176;C</div>
            //         </div>
                
            //     `
            // }else{
            //     otherDayForcast += `
            //     <div class="weather-forecast-item">
            //         <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
            //         <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
            //         <div class="temp-hour">${myArrayHour[0]}:${myArrayHour[1]}</div>
            //         <div class="temp">Min - ${day.main.temp_min}&#176;C</div>
            //         <div class="temp">Max - ${day.main.temp_max}&#176;C</div>
            //     </div>
            //     `
                
            // }
        }
    }
    )


    weatherForecastEl.innerHTML = otherDayForcast;
}

getMapIframeData()
function getMapIframeData(){
    let myArray = document.getElementById("select-province").value.split("|");
    var province = myArray[0];
    fetch(`https://siphoria-api-production.up.railway.app/api/map/test/${province}`).then(res => res.json()).then(data => {

        console.log(data)
        showMapIframeData(data);
        getWeatherData();
        getDailyWeatherForecastData();
    })
}

function showMapIframeData(data) {
    let mapData = data.data.data;
    mapItems.innerHTML = mapData
}
getWeatherData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude } = success.coords;
        let myArray = document.getElementById("select-province").value.split("|");
        latitude = myArray[1];
        longitude = myArray[2];
        console.log(myArray)
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        console.log(data)
        showWeatherData(data);
        })

    })




    weatherForecastEl.innerHTML = otherDayForcast;
}