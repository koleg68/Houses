var images = document.querySelectorAll(".picture img.slide");
var i = 0;

document.querySelector("img#prev").onclick = function () {
  images[i].className = "slide";

  i--;

  if (i < 0) {
    i = images.length - 1;
  }
  images[i].className = "active";
};

document.querySelector("img#next").onclick = function () {
  images[i].className = "slide";
  i++;

  if (i > images.length - 1) {
    i = 0;
  }
  images[i].className = "active";
};

//Плавная прокрутка страницы вверх
window.onload = function () {
  var scrolled;
  var timer;

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
    var top = document.getElementById("btn_top");
    if (window.pageYOffset > 400) {
      top.style.display = "block";
    } else {
      top.style.display = "none";
    }
  };
};

document.querySelector(".menu-btn-mobile").onclick = function (e) {
  e.preventDefault;
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
