$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
})
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
})

const headerBurger = document.querySelector('.header-burger')
const headerMenu = document.querySelector('.header-menu')
const welcomeHeading = document.querySelector('.welcome-heading')
const welcomeParagraph = document.querySelector('.welcome-paragraph')
const welcomeButton = document.querySelector('.welcome-button')

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active')
  headerMenu.classList.toggle('active')
  welcomeHeading.classList.toggle('active')
  welcomeParagraph.classList.toggle('active')
  welcomeButton.classList.toggle('active')
})
