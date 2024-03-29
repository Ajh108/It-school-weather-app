// Luam valoarea city din localStorage
let currentCityFromLS = localStorage.getItem("city");

// Pasul urmator e sa actualizam orasul afisat pe ecran daca avem cheia city in LocalStorage
const currentCityTag = document.querySelector(".current-city");
if (currentCityFromLS) {
    currentCityTag.innerHTML = currentCityFromLS;
}

// Daca nu avem cheia city in local storage, atunci setam ca valoare default Bucuresti - atat pt localStorage cat si pt variabila currentCityFromLS
if (!currentCityFromLS) {
    localStorage.setItem("city", "București");
    currentCityFromLS = "București";
}

// Afisam vremea curenta folosind o functie din alt fisier
displayCurrentWeather(currentCityFromLS);
// Afisam vremea pe urmatoarele 5 zile
displayWeatherForecast(currentCityFromLS);