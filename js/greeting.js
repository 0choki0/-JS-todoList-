const greetingForm = document.querySelector("#greeting"); // html의 form을 가져옴
const greeting = document.querySelector("#greeting input:first-child"); // 위 form의 input 태그를 가져옴

// logIn 기능
function logIn(event) {
    event.preventDefault();
    const username = greeting.value;
    showUser(username);
    saveUserName(username);
}

// logIn이 되었음을 표시하는 기능
function showUser(user) {
        const username = document.querySelector("h1#username");
        username.classList.remove("hidden");
        username.innerText = user;
        greetingForm.classList.add("hidden");
}

// 입력 사항을 localStorage에 저장
function saveUserName(name) {
    localStorage.setItem("username", name);
}

// 제출이 발생했을 경우
const checkUser = localStorage.getItem("username")
if (checkUser) {
    showUser(checkUser)
} else {
    greetingForm.addEventListener("submit", logIn);
}
