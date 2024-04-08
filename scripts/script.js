const slides = document.querySelectorAll(".slide");
const thumbnails = document.querySelectorAll(".slider img");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function showThumbnail(index) {
  thumbnails.forEach((thumbnail, i) => {
    if (i === index) {
      thumbnail.classList.add("active");
    } else {
      thumbnail.classList.remove("active");
    }
  });
}

function prevSlide() {
  currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
  showThumbnail(currentIndex);
}

function nextSlide() {
  currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  showSlide(currentIndex);
  showThumbnail(currentIndex);
}

document.getElementById("prev").addEventListener("click", prevSlide);
document.getElementById("next").addEventListener("click", nextSlide);

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
    showThumbnail(currentIndex);
  });
});

showSlide(currentIndex);
showThumbnail(currentIndex);


document.querySelector(".menu-btn-mobile").onclick = function (e) {
  e.preventDefault();
  this.classList.toggle("menu-btn-mobile_active");
  toggleMenu();
};

function toggleMenu() {
  const menu = document.querySelectorAll("li.menu");
  for (let i of menu) {
    if (i.classList.contains("transparent")) {
      i.classList.remove("transparent");
      i.style.opacity = 0;
    } else {
      i.classList.add("transparent");
      i.style.opacity = 1;
    }
  }
}

window.addEventListener("load", () => {
  const links = document.querySelectorAll("li.menu a");
  for (let i of links) {
    i.addEventListener("click", linkclicked);
  }

  // ==== плавная прокрутка к якорям =====
  function linkclicked(e) {
    e.preventDefault();

    let target = document.querySelector(this.hash);

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  }

  let scrolled;
  let timer;

  document.getElementById("btn_top").onclick = function () {
    scrolled = window.pageYOffset;
    scrollToTop();
  };

  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 500; //100 скорость прокрутки
      timer = setTimeout(scrollToTop, 100);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }

  window.onscroll = function () {
    let top = document.getElementById("btn_top");
    if (window.scrollY > 400) {
      top.style.display = "block";
    } else {
      top.style.display = "none";
    }
  };
});


// ================== FORM ======================

let phoneMask = IMask(
  document.getElementById('phone'), {
      mask: '+7(000) 000-0000'
  }
);


window.onload = function() {
  document.querySelector("form").reset();
};