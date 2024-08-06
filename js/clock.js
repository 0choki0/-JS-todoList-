const clock =document.createElement('h1'); // h1 태그로 clock 생성
clock.id = "clock"
document.body.prepend(clock) // body태그 내부 가장 상단에 clock 위치시킴

// clock 표현
function getClock(event) {
    const date = new Date();
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    const seconds = String(date.getSeconds());
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 초기 값을 보여주기 위해서 clock 함수를 1번 먼저 실행
setInterval(getClock, 1000); // 1000ms을 주기로 함수를 반복 실행