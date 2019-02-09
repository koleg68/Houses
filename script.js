window.onload = function () {

	var images = document.querySelectorAll('img.slide');

	// console.log(images);

	var i = 0;

	document.querySelector('img#prev').onclick = function () {


		images[i].className = 'slide';

		console.log(i);
		i--;

		if (i < 0) {
			i = images.length - 1;
		}
		images[i].className = 'active';
	};


	document.querySelector('img#next').onclick = function () {

		images[i].className = 'slide';
		i++;

		if (i > images.length) {
			i = 0;
		}
		images[i].className = 'active';

	};

};

jQuery(document).ready(function () {
	jQuery("a.scrollto").click(function () {
		elementClick = jQuery(this).attr("href");
		destination = jQuery(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
		return false;
	});
});

//Плавная прокрутка страницы вверх
window.onload = function () {
	var scrolled;
	var timer;

	document.getElementById('btn_top').onclick = function () {
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
		var top = document.getElementById('btn_top');
		if (window.pageYOffset > 100) {
			top.style.display = 'block';
		} else {
			top.style.display = 'none';
		}
	};
};
