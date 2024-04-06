let user = [
  {
    id: "1",
    name: "Bobby Fisher",
    image: "http",
    sotials: "img",
    feedback: "grossmeister",
  },

  {
    id: "2",
    name: "Elvis Presly",
    image: "http",
    sotials: "img",
    feedback: "singer",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const initialDescription = descriptions[0];
  const descriptionElement = document.querySelector(".client-description p");
  if (descriptionElement) {
    descriptionElement.textContent = initialDescription;
  }
});

const slider = document.querySelector(".client");
const clientBoxes = document.querySelectorAll(".client-box");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const description = document.querySelector(".client-description p");
const markers = document.querySelectorAll(".markers .marker");

const descriptions = [
  "номер 1. lorem libero dolor vero harumenim rem iure magnam, molestiae nisi nesciunt quis ad cumvoluptates, animi optio consequatur laboriosam sapiente evenietut aperiam omnis? Ab voluptate, assumenda sunt accusantiumdeserunt.",
  "номер 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique explicabo minima in obcaecati odit delectus distinctio! Perferendis neque ea ipsa libero dolor vero harum enim rem iure magnam, molestiae nisi nesciunt quis ad cum voluptates, animi optio consequatur laboriosam sapiente eveniet ut aperiam omnis? Ab voluptate, assumenda sunt accusantium deserunt.",
  "номер 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel tenetur culpa doloremque illum suscipit, laborum quaerat animi, dolorem molestiae maiores, blanditiis magni aperiam similique. Natus nobis soluta, ducimus voluptate amet aspernatur facilis obcaecati molestias illum magnam earum iure, voluptates illo ut ipsam aut ratione quae! Ea quis nam porro odit!",
];

let currentIndex = 0;

function updateSlider() {
  clientBoxes.forEach((box) => box.classList.remove("active"));
  clientBoxes[currentIndex].classList.add("active");
  description.textContent = descriptions[currentIndex];
}

leftButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = clientBoxes.length - 1;
  }
  updateSlider();
  // moveSliderToLeft();
  updateActiveMarker();
});

rightButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= clientBoxes.length) {
    currentIndex = 0;
  }
  updateSlider();
  // moveSliderToRight();
  updateActiveMarker();
});

function updateActiveMarker() {
  markers.forEach(marker => {
      marker.classList.remove('active');
  });

  const activeSlide = document.querySelector('.client-box.active');

  const activeIndex = Array.from(activeSlide.parentNode.children).indexOf(activeSlide);

  // Устанавливаем активный класс для соответствующего маркера
  markers[activeIndex].classList.add('active');
}

// function moveSliderToLeft() {
//   const activeSlide = document.querySelector('.client-box.active');
//   const prevSlide = activeSlide.previousElementSibling;

//   if (prevSlide) {
//       activeSlide.classList.remove('active');
//       prevSlide.classList.add('active');
//   }
// }

// function moveSliderToRight() {
//   const activeSlide = document.querySelector('.client-box.active');
//   const nextSlide = activeSlide.nextElementSibling;

//   if (nextSlide) {
//       activeSlide.classList.remove('active');
//       nextSlide.classList.add('active');
//   }
// }
