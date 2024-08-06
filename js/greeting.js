const logInForm = document.querySelector("#logIn"); // logIn form을 가져옴
const logInInput = document.querySelector("#logIn input:first-child"); // 위 form의 input 태그를 가져옴
const logOutForm = document.querySelector("#logOut"); // logOut form을 가져옴

const username = document.querySelector("h1#username"); // 로그인 된 유저를 표시할 h1태그
const USER_NAME = "username"
const HIDDEN = "hidden"

// logIn 기능
function logIn(event) {
    event.preventDefault();
    const username = logInInput.value;
    showUser(username);
    saveUserName(username);
}

// logOut 기능
function logOut(event) {
    event.preventDefault();
    localStorage.removeItem(USER_NAME);
    username.classList.add(HIDDEN);
    logInForm.classList.remove(HIDDEN);
    logOutForm.classList.add(HIDDEN);
}

// logIn이 되었음을 표시하는 기능
function showUser(user) {
        username.classList.remove(HIDDEN);
        username.innerText = user;
        logInForm.classList.add(HIDDEN);
        logOutForm.classList.remove(HIDDEN);
}

// 입력 사항을 localStorage에 저장
function saveUserName(name) {
    localStorage.setItem(USER_NAME, name);
}

// 로그인이 발생했을 경우
const checkUser = localStorage.getItem(USER_NAME);
if (checkUser) {
    showUser(checkUser)
} else {
    logInForm.addEventListener("submit", logIn);
}

// 로그아웃이 발생했을 경우
logOutForm.addEventListener("submit", logOut);