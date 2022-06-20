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
})

let partnersSlider = new Swiper(".partners-slider", {
  loop: true,
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
})

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
      spaceBetween: 60,
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
})

let howitworksSlide = new Swiper(".how-it-works__slider", {
  loop: false,
  pagination: {
    el: ".how-it-works__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".how-it-works-next",
    prevEl: ".how-it-works-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      direction: "horizontal",
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
      direction: "vertical",
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
})

let ratesSlide = new Swiper(".rates__slider", {
  loop: false,
  pagination: {
    el: ".rates__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".rates-next",
    prevEl: ".rates-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      direction: "horizontal",
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      direction: "vertical",
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 3,
      direction: "horizontal",
      spaceBetween: 0,
    },
  },
})

document.addEventListener("DOMContentLoaded", function () {
  MicroModal.init({
    disableScroll: true,
    disableFocus: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
  })
})

// read more

new Readmore(".reviews__text", {
  speed: 75,
  collapsedHeight: 144,
  lessLink: '<a class="readless" href="#">Скрыть</a>',
  moreLink: '<a class="readmore" href="#">Развернуть</a>',
})

// burger

const burger = document.querySelector("#burger")
const popup = document.querySelector("#popup")
const logo = document.querySelector("#logo")
const body = document.body

// Клонируем меню, чтобы задать свои стили для мобильной версии
const navbox = document.querySelector("#navbox").cloneNode(1)

// При клике на иконку burger вызываем ф-ию burgerHandler
burger.addEventListener("click", burgerHandler)

// Выполняем действия при клике ..
function burgerHandler(e) {
  e.preventDefault()
  // Переключаем стили элементов при клике
  popup.classList.toggle("open")
  burger.classList.toggle("active")
  body.classList.toggle("noscroll")
  logo.classList.toggle("close")
  renderPopup()
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(navbox)
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(navbox.children)

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick)
  console.log(link)
})

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open")
  burger.classList.remove("active")
  body.classList.remove("noscroll")
  logo.classList.remove("close")
}

// scroll

$(".nav__list-link--about").on("click", function (e) {
  $("html,body")
    .stop()
    .animate({ scrollTop: $("#about").offset().top }, 1000)
  e.preventDefault()
})

$(".nav__list-link--advantages").on("click", function (e) {
  $("html,body")
    .stop()
    .animate({ scrollTop: $("#advantages").offset().top }, 1000)
  e.preventDefault()
})

$(".nav__list-link--rates").on("click", function (e) {
  $("html,body")
    .stop()
    .animate({ scrollTop: $("#rates").offset().top }, 1000)
  e.preventDefault()
})

$(".nav__list-link--reviews").on("click", function (e) {
  $("html,body")
    .stop()
    .animate({ scrollTop: $("#reviews").offset().top }, 1000)
  e.preventDefault()
})

// inputmask

Inputmask().mask(document.querySelectorAll(".inputtel"))
