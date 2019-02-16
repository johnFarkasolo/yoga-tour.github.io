let slideItems = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');
	
		function showSlides(n) {

			if(n > slides.length) {
				slideItems = 1;
			}
			if(n < 1) {
				slides = slides.length;
			}

			slides.forEach( (item) => item.style.display = 'block');
			console.log(slides);

			dots.forEach( (item) => item.classList.remove('dot-active'));

		}