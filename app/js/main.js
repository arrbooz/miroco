let mainSLider = new Swiper(".main-slider", {
	loop: true,
	spaceBetween: 1000,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	speed: 700,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

let partnersSlider = new Swiper(".partners-slider", {
	loop: true,
	mousewheel: {
		invert: true,
	  },
	pagination: {
		el: ".partners__pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".partners-next",
		prevEl: ".partners-prev",
	},
	breakpoints: {
		1200: {
			slidesPerView: 4,
			spaceBetween: 80,
		},
		960: {
			slidesPerView: 3,
			spaceBetween: 90,
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 90,
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 80,
		},
	},
});

let reviewsSlide = new Swiper(".reviews__slider", {
	loop: true,
	pagination: {
		el: ".reviews__pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".reviews__next",
		prevEl: ".reviews__prev",
	},
	breakpoints: {
		960: {
			spaceBetween: 40,
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 40,
		},
	},
});

let howitworksSlide = new Swiper(".how-it-works__slider", {
	pagination: {
		el: ".how-it-works__pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".how-it-works__next",
		prevEl: ".how-it-works__prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			direction: "horizontal",
			spaceBetween: 15,
			loop: true,
		},
		480: {
			slidesPerView: 3,
			spaceBetween: 20,
			direction: "vertical",
			loop: false,
		},
		960: {
			direction: "horizontal",
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1200: {
			direction: "horizontal",
			slidesPerView: 3,
			spaceBetween: 60,
		},
	},
});

let ratesSlide = new Swiper(".rates__slider", {
	pagination: {
		el: ".rates__pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".rates__next",
		prevEl: ".rates__prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			direction: "horizontal",
			spaceBetween: 20,
			loop: true,
		},
		640: {
			slidesPerView: 3,
			direction: "vertical",
			spaceBetween: 12,
			loop: false,
		},
		960: {
			slidesPerView: 3,
			direction: "horizontal",
			spaceBetween: 0,
		},
	},
});

document.addEventListener("DOMContentLoaded", function () {
	MicroModal.init({
		disableScroll: true,
		disableFocus: true,
		awaitOpenAnimation: true,
		awaitCloseAnimation: true,
	});
});

// read more

new Readmore(".reviews__text", {
	speed: 75,
	collapsedHeight: 144,
	lessLink: '<a class="readless" href="#">Скрыть</a>',
	moreLink: '<a class="readmore" href="#">Развернуть</a>',
});

// Scroll

$(".nav__list-link--about").on("click", function (e) {
	$("html,body")
		.stop()
		.animate({ scrollTop: $("#about").offset().top }, 1000);
	e.preventDefault();
});

$(".nav__list-link--advantages").on("click", function (e) {
	$("html,body")
		.stop()
		.animate({ scrollTop: $("#advantages").offset().top }, 1000);
	e.preventDefault();
});

$(".nav__list-link--rates").on("click", function (e) {
	$("html,body")
		.stop()
		.animate({ scrollTop: $("#rates").offset().top }, 1000);
	e.preventDefault();
});

$(".nav__list-link--reviews").on("click", function (e) {
	$("html,body")
		.stop()
		.animate({ scrollTop: $("#reviews").offset().top }, 1000);
	e.preventDefault();
});

// inputmask

Inputmask().mask(document.querySelectorAll(".inputtel"));

// burger

const burger = document.querySelector("#burger");
const links = document.querySelectorAll(".nav__list-link");
const nav = document.querySelector(".navbox");

links.forEach((item) => {
	item.addEventListener("click", () => {
		burger.classList.remove("active");
		nav.classList.remove("active");
		document.body.style.overflow = "";
	});
});

burger.addEventListener("click", () => {
	if (burger.classList.contains("active")) {
		burger.classList.remove("active");
		nav.classList.remove("active");
		document.body.style.overflow = "";
	} else {
		burger.classList.add("active");
		nav.classList.add("active");
		document.body.style.overflow = "hidden";
	}
});

// rates switcher

const switcher = document.querySelector("#switcher");
const forbuyer = document.querySelector("#forbuyer");
const forseller = document.querySelector("#forseller");

switcher.addEventListener("click", function(){
	forbuyer.classList.toggle("show");
	forseller.classList.toggle("show");
})
