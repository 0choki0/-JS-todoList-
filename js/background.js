const backgroundImg = ["randomImage1.jpg", "randomImage2.jpg", "randomImage3.jpg", "randomImage4.jpg", "randomImage5.jpg",]; // 폴더 내 이미지 리스트
const randomImage = backgroundImg[Math.floor(Math.random()*backgroundImg.length)]; // 리스트에서 랜덤으로 선택된 요소

const bgImage = document.querySelector("img#bgImage") // html의 backgroundImg 선택

bgImage.src = `img/${randomImage}`; // img태그의 src요소값
bgImage.alt = "이미지가 없습니다."