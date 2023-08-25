const sliders = document.querySelectorAll("[data-slider]")

const initSlider = (currentSlider) => {
  const sliderContainer = currentSlider.querySelector("[data-slider-container]")
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]")
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]")

  let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"))
  let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems

  let currentSlidePos = 0

  const moveSliderItem = () => {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`
  }

  const slideNext = () => {
    const slideEnd = currentSlidePos >= totalSlidableItems

    if (slideEnd) {
      currentSlidePos = 0
    } else {
      currentSlidePos++
    }

    moveSliderItem()
  }

  sliderNextBtn.addEventListener("click", slideNext)

  const slidePrev = () => {
    if (currentSlidePos <= 0) {
      currentSlidePos = totalSlidableItems
    } else {
      currentSlidePos--
    }

    moveSliderItem()
  }

  sliderPrevBtn.addEventListener("click", slidePrev)

  const dontHaveExtraItem = totalSlidableItems <= 0
  
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = 'none'
    sliderPrevBtn.style.display = 'none'
  }

  currentSlider.addEventListener("wheel", (event) => {
    if (event.shiftKey && event.deltaY > 0) slideNext()
    if (event.shiftKey && event.deltaY < 0) slidePrev()
  })

  window.addEventListener("resize", () => {
    totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"))
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems

    moveSliderItem()
  })
}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]) }