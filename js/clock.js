const clock =document.querySelector("h1#clock"); // html의 clock 선택

// clock 표현
function getClock(event) {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 초기 값을 보여주기 위해서 clock 함수를 1번 먼저 실행
setInterval(getClock, 1000); // 1000ms을 주기로 함수를 반복 실행