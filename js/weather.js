import config from './APIs.js'; // api가 저장된 파일 import

const API_KEY = config.API_KEY1; // api 입력

// html 태그 연결
const city = document.querySelector("span#city");
const weather = document.querySelector("span#weather");
const weatherIcon = document.querySelector("img#weatherIcon");
const temp_max = document.querySelector("span#temp_max");
const temp_min = document.querySelector("span#temp_min");
const humidity = document.querySelector("span#humidity");
const noCoordinate = document.querySelector("span#noCoordinate");
const HIDDEN = "hidden";

// 현재 위치 정보 있을 경우, 날씨 정보 호출
function succes(position) {
    noCoordinate.classList.add(HIDDEN);
    // 위치 정보
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // api 호출을 위한 url

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        temp_max.innerText = data.main.temp_max;
        temp_min.innerText = data.main.temp_min;
        humidity.innerText = data.main.humidity;
    });
}

// 현재 위치 정보 모를 경우, error 메세지
function error(event) {
    city.classList.add(HIDDEN);
    weather.classList.add(HIDDEN);
    temp_max.classList.add(HIDDEN);
    temp_min.classList.add(HIDDEN);
    humidity.classList.add(HIDDEN);
    weatherIcon.classList.add(HIDDEN);
    noCoordinate.classList.remove(HIDDEN);
}

// 브라우저를 통한 현재 위치 정보를 읽음
navigator.geolocation.getCurrentPosition(succes, error);