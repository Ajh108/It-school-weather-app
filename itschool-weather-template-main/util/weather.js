// Definesc o functie care sa imi returneze icontina de la open weather pe baza codului primit de la API
function getWeatherIcon (iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
}

// Primim viteza vantului in metri/secunda si noi ii convertim in km/h
function windToKmPerHour(meterPerSec){
    return (meterPerSec * 3600) / 1000
}