window.onload = function () {

	var images = document.querySelectorAll('img.slider');

	console.log(images);

	var i = 0;

	document.querySelectorAll('img.prev').onclick = function () {
		

		images[i].className = 'slider';
		i--;

		if (i < 0) {
			i = images.length -1;
		}
		images.className = 'active';
	}
	

	document.querySelectorAll('img.next').onclick = function () {

		images[i].className = 'slider';
		i++;

		if (i >= images.length) {
			i = 0;
		}
		images.className = 'active';
	}

}
