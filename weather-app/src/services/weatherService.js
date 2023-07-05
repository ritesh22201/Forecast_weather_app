const API_KEY = '72f92dfc9ea322d61ceb817923a73cdf';
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
    const {timezone, daily, hourly} = data;
    console.log(data)
}

const getFormattedWeatherData = async(searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);

    const {lat, lon} = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData('onecall', {lat, lon, exclude : 'current, minutely, alerts', units : searchParams.units}).then(formatForecastWeather);
    // console.log(formattedForecastWeather)
    return formattedCurrentWeather || formattedForecastWeather;
}

export default getFormattedWeatherData;