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

let currIndex = 0;

function updateSlider() {
  clientBoxes.forEach((box) => box.classList.remove("active"));
  clientBoxes[currIndex].classList.add("active");
  description.textContent = descriptions[currIndex];
}

leftButton.addEventListener("click", () => {
  currIndex--;
  if (currIndex < 0) {
    currIndex = clientBoxes.length - 1;
  }
  updateSlider();
  updateActiveMarker();
});

rightButton.addEventListener("click", () => {
  currIndex++;
  if (currIndex >= clientBoxes.length) {
    currIndex = 0;
  }
  updateSlider();
  updateActiveMarker();
});

function updateActiveMarker() {
  markers.forEach((marker) => {
    marker.classList.remove("active");
  });

  const activeSlide = document.querySelector(".client-box.active");

  const activeIndex = Array.from(activeSlide.parentNode.children).indexOf(
    activeSlide
  );

  markers[activeIndex].classList.add("active");
}
