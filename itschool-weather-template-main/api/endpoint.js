// API KEY-urile in general nu ar fi bine sa le stocam in format text in codul nostru pentru ca oricine ar putea sa le vada si sa le foloseasca. E bine ca ele sa stea pe server dar in cazul nostru fiind un API gratuit, o sa le stocam aici.

const API_KEY = '5e44d4d9362246f2bf2c1181381e484a'

// Construim link-urile (endpoint-urile) catre care noi o sa facem request-uri cu JS

function getCurrentWeatherEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

// Declaram a 2-a functie pe care o vom folosi pentru a lua URL-ul catre API-ul ce ne returneaza datre despre vremea pe 5 zile
function getForecastWeatherEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`
}