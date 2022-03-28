const sliderContainer = document.querySelector(".swiper-container")
const slideLeft = document.querySelector(".left-slide")
const slideRight = document.querySelector(".right-slide")
const upButton = document.querySelector(".btn--up")
const downButton = document.querySelector(".btn--dn")
const slidesLength = slideRight.querySelectorAll("div").length

let activSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`


upButton.addEventListener("click", () => changeSlide('up'))
downButton.addEventListener("click", () => changeSlide('down'))

const changeSlide =  (direction) => {
  const sliderHeight = sliderContainer.clientHeight
  if(direction === 'up'){
   activSlideIndex++
   if(activSlideIndex > slidesLength -1){
     activSlideIndex = 0
   }
  } else if(direction === 'down'){
    activSlideIndex--
    if(activSlideIndex < 0) {
      activSlideIndex = slidesLength -1
    }
  }

  slideRight.style.transform = `translateY(-${activSlideIndex * sliderHeight}px)`
  slideLeft.style.transform = `translateY(${activSlideIndex * sliderHeight}px)`
}