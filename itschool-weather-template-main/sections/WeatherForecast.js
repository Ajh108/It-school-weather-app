// Declar functia care imi va afisa vremea pe urmatoarele 5 zile, iar apelul functiei se va face din index.js

function displayWeatherForecast (city) {
    // Prima data ne generam link-ul API-ului catre care vom face request-ul
    const forecastWeatherEndpoint = getForecastWeatherEndpoint (city)

    // Imi selectez elementul cu clasa .weather-forecast deoarece aici am sa inereez html-ul generat in pasul cu fetch
    const weatherForecastContainer = document.querySelector('.weather-forecast');
    // Inainte de a face call-ul catre server (adica inainte de fetch) am sa golesc container-ul de weatherForecastContainer
    weatherForecastContainer.innerHTML = '';

    fetch(forecastWeatherEndpoint)
        .then((response)=> response.json())
        .then(data => {
            console.log(data);
            // Ne folosim de object destructuring pentru a extrage datele mai usor
            const { list } = data;

            // Ne declaram un obiect gol in care tinem predictiile pe zile (Luni, Marti, Miercuri, etc.)
            const daysMap = {}

            // Iteram prin cele 40 predictii primite de la server
            list.forEach((element)=> {
                // Extragem proprietarea dt din fiecare element
                const { dt } = element;
                const day = getDayOfTheWeek(dt);
                // Daca avem deja ziua saptamanii in obiectul daysMap, ii adaugam o noua predictie - adica ii adaugam element
                if (daysMap[day]) {
                    daysMap[day].push(element);
                

                // Daca nu avem ziua saptamanii in obiectul daysMap, o sa adaugam ziua respectiva impreuna cu elementul (sau predictia)
                } else {
                    daysMap[day] = [element];
                }
            })
            // Iteram prin obiectul daysMap care are deja datele grupate pe zile, folosind intructiunea for...in

            for(dayKey in daysMap) {
                // Inserez in HTML ziua din obiectul daysMap
                weatherForecastContainer.innerHTML += `<h3 class="text-primary">${dayKey}</h3>`;
                // Imi extrag elementul curent din obiectul daysMap
                // console.log(dayKey)
                let weatherByDays = daysMap[dayKey];
                weatherByDays.forEach((element)=> {
                    // Pentru fiecare element (predictie) pot sa ma apuc sa extrag datele de interes
                    const {dt, main, weather} = element;
                    // Procesez ora
                    const hour = getHours(dt);
                    // Rotunjim temperatura
                    const teperature = Math.round(main.temp);
                    const realFeel = Math.round(main.feels_like);
                    // Atentie la descriere - deoarece weather este un array cu un singur element -> accesam mereu elementul 0 
                    const description = weather[0].description
                    const weatherIcon = getWeatherIcon(weather[0].icon);

                    // Inseram datele
                    weatherForecastContainer.innerHTML += `
                        <div class="weather-forecast-box d-flex justify-content-between align-items-center w-100 border rounded mb-3 p-3">
                            <div>${hour}</div>
                            <div><img src="${weatherIcon}" /></div>
                            <div class="fs-3"><strong>${teperature}°C</strong></div>
                            <div>${description}</div>
                            <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>
                        </div>
                    `;
                })
            }
        })
}