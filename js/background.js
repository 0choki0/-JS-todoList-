const backgroundImg = ["randomImage1.jpg", "randomImage2.jpg", "randomImage3.jpg", "randomImage4.jpg", "randomImage5.jpg",]; // 폴더 내 이미지 리스트
const randomImage = backgroundImg[Math.floor(Math.random()*backgroundImg.length)]; // 리스트에서 랜덤으로 선택된 요소

const bgImage = document.createElement("img"); // img태그 생성
document.body.prepend(bgImage); // img태그의 생성 위치

bgImage.src = `img/${randomImage}`; // img태그의 src요소값
