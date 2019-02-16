window.addEventListener("DOMContentLoaded", function() {
  "use strict";

  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

 	function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }

  info.addEventListener("click", (event) => {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // timer

  let deadline = "2019-02-28";

  let getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60));
    //  hours = Math.floor( (t/1000/60/60) % 24);	если нужно счетчик на 24 часа
    //  days = Math.floor( (t/1000/60/60*24) );	если нужны дни для счетчика

    return {
      total: t,
      seconds: seconds,
      minutes: minutes,
      hours: hours
    };
  }

  function setClock(id, endtime)  {
    let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds"),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      hours.innerHTML = ("0" + t.hours).slice(-2);
      minutes.innerHTML = ("0" + t.minutes).slice(-2);
      seconds.innerHTML = ("0" + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock("timer", deadline);

  // popup

  let moreBtn = document.querySelectorAll(".description-btn"),
			more = document.querySelector(".more"),
			close = document.querySelector(".popup-close"),
			overlay = document.querySelector(".overlay");

  for (let i = 0; i < moreBtn.length; i++) {
    moreBtn[i].addEventListener("click", () => {
      overlay.style.display = "block";
      this.classList.add("more-splash");
      document.body.style.overflow = "hidden";
    });
  }

  more.addEventListener("click", () => {
    overlay.style.display = "block";
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  });

  close.addEventListener("click", () => {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    document.body.style.overflow = "";
	});

	// slider 

let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');

		showSlides(slideIndex);

		function showSlides(n) {

			if(n > slides.length) {
				slideIndex = 1;
			}
			if(n < 1) {
				slideIndex = slides.length;
			}

			slides.forEach( (item) => item.style.display = 'none');
			dots.forEach( (item) => item.classList.remove('dot-active'));

			slides[slideIndex - 1].style.display = 'block';
			dots[slideIndex - 1].classList.add('dot-active');

		}

		function plusSlide(n) {
			showSlides(slideIndex += n);
		}

		function currentSlide(n) {
			showSlides(slideIndex = n);
		}

		prev.addEventListener('click', function() {
			plusSlide(-1)
		});

		next.addEventListener('click', function() {
			plusSlide(1);
		});

		dotsWrap.addEventListener('click', function(event) {
			
			for(let i = 0; i < dots.length + 1; i++) {
				if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
					currentSlide(i);
				}
			}
		});
		
		//calculator

		let person = document.querySelectorAll('.counter-block-input')[0],
				restDays = document.querySelectorAll('.counter-block-input')[1],
				place = document.getElementById('select'),
				totalValue = document.getElementById('total'),
				personsSum = 0,
				daysSum = 0,
				total = 0;

				totalValue.innerHTML = 0;

				person.addEventListener('change', function(){
					personsSum = +this.value;
					total = (personsSum + daysSum)*4000;

					if (restDays.value == '') {
						totalValue.innerHTML = 0;
					} else {
						totalValue.innerHTML = total;
					}
				});

				restDays.addEventListener('change', function(){
					personsSum = +this.value;
					total = (personsSum + daysSum)*4000;
	
					if (person.value == '') {
						totalValue.innerHTML = 0;
					} else {
						totalValue.innerHTML = total;
					}		
				});

				place.addEventListener('change', function(){
					if(restDays.value == '' || person.value == '') {
						totalValue.innerHTML = 0;
					} else {
						let a = total;
						totalValue.innerHTML = a * this.options[this.selectedIndex].value;
					}
				});
});

