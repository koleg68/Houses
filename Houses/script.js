window.onload = function () {

	var images = document.querySelectorAll('img.slide');

	console.log(images);

	var i = 0;

	document.querySelector('img#prev').onclick = function () {
		

		images[i].className = 'slide';

		console.log(i);
	 	i--;

		if (i < 0) {
			i = images.length -1;
		}
		images.className = 'active';
	}
	

	document.querySelector('img#next').onclick = function () {

		images[i].className = 'slide';
		i++;

		if (i >= images.length) {
			i = 0;
		}
		images.className = 'active';
	}

 }
