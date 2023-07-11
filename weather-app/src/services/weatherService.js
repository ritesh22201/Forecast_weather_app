import { DateTime } from "luxon";
const API_KEY = '3749a9a9c673d7eb0aabcf384b47aae1';
const BASE_URL = `https://api.openweathermap.org/data/2.5`;

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid : API_KEY})

    return fetch(url)
    .then(res => res.json());
}

const formatCurrentWeather = (data) => {
    const {
            coord : {lat, lon},
            main  : {temp, feels_like, temp_min, temp_max, humidity},
            dt, 
            sys : {country, sunrise, sunset},
            weather, 
            wind : {speed}

         } = data;

         const {main : details, icon}  = weather[0];

         return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, dt, country, sunrise, sunset, weather, speed, details, icon}
}

const formatForecastWeather = (data) => {
    let {timezone, daily, hourly} = data;
   
    daily = daily.slice(1, 6).map(d => {
        return {
            title : formatToLocalTime(d.dt, timezone, 'ccc'),
            temp : d.temp.day,
            icons : d.weather[0].icon
        }
    })

    hourly = hourly.slice(1, 6).map(d => {
        return {
            title : formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp : d.temp.day,
            icons : d.weather[0].icon
        }
    })
    console.log(data)
    return {timezone, daily, hourly};
}

const getFormattedWeatherData = async(searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);

    const {lat, lon} = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData('onecall', {lat, lon, exclude : 'current, minutely, alerts', units : searchParams.units}).then(formatForecastWeather);

    return {...formattedCurrentWeather, ...formattedForecastWeather};
}

const formatToLocalTime = (secs, zone, format="cccc, dd LLL yyyy' | Local time: 'hh:mm a") => {
   return DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
}



export default getFormattedWeatherData;