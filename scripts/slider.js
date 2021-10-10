const prev = document.getElementById('btn-prev'),
  next = document.getElementById('btn-next'),
  slides = document.querySelectorAll('.slide'),
  dots = document.querySelectorAll('.dot')
let index = 0
const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove('active')
  }
  slides[n].classList.add('active')
}
const activeDot = n => {
  for (dot of dots) {
    dot.classList.remove('active')
  }
  dots[n].classList.add('active')
}
const prepareCurrentSlide = ind => {
  activeSlide(ind)
  activeDot(ind)
  currentText(ind)
}
const currentText = index =>
  (document.querySelector('.current-slide').textContent = `0${index + 1} | 0${
    dots.length
  }`)
currentText(0)
const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0
    prepareCurrentSlide(index)
  } else {
    index++
    prepareCurrentSlide(index)
  }
  currentText(index)
}
const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1
    prepareCurrentSlide(index)
  } else {
    index--
    prepareCurrentSlide(index)
  }
  currentText(index)
}
dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot
    prepareCurrentSlide(index)
  })
})
next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)
