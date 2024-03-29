const bucharestButton = document.querySelector('.dropdown-menu li .bucharest');
const timisoaraButton = document.querySelector('.dropdown-menu li .timisoara');
const oradeaButton = document.querySelector('.dropdown-menu li .oradea');
const aradButton = document.querySelector('.dropdown-menu li .arad');
const sibiuButton = document.querySelector('.dropdown-menu li .sibiu');

// Declaram o functie care ne va schimba orasul si ne va face update la vreme

function updateCurrentCity(city) {
    const currentCityElem = document.querySelector('.current-city');
    currentCityElem.innerHTML = city;
}

function updateWeather(city) {
    // Actualizam orasul selectat din dropdown in localStorage
    localStorage.setItem("city", city)
    // Reafisam vremea curenta in functie de orasul selectat
    displayCurrentWeather(city);
    // Actualizam orasul afisat pe ecran
    updateCurrentCity(city);
    displayWeatherForecast(city);
};

// Adaugam event listeneri pentru fiecare element in parte - adica pe fiecare button din drop-down

bucharestButton.addEventListener("click", function (){
    // La click pe button Bucuresti ar trebui sa schimbe numele orasului
    // Si al 2 lea lucru sa faca update la vreme
    updateWeather("București");

});

oradeaButton.addEventListener("click", function (){
    updateWeather("Oradea");
});

timisoaraButton.addEventListener("click", function (){
    updateWeather("Timișoara");
    
});

aradButton.addEventListener("click", function (){
    updateWeather("Arad");
});

sibiuButton.addEventListener("click", function (){
    updateWeather("Sibiu");
});
