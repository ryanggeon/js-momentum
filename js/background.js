const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// body의 배경 이미지로 설정
document.body.style.backgroundImage = `url('img/${chosenImage}')`;

// 배경 이미지에 크기 및 위치 설정 (옵션)
document.body.style.backgroundSize = "cover"; // 화면에 꽉 차도록
document.body.style.backgroundPosition = "center"; // 중앙 정렬
document.body.style.backgroundRepeat = "no-repeat"; // 반복되지 않도록 설정
