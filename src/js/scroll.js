const animateOnScroll = () => {
    var elements = document.querySelectorAll('.fade-in')
  
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('active')
      } else {
        element.classList.remove('active')
      }
    })
}
  
const isElementInViewport = (element) => {
    var rect = element.getBoundingClientRect()
    var windowHeight = window.innerHeight || document.documentElement.clientHeight
  
    return (
      rect.top <= windowHeight * 0.9
    )
}
  
window.addEventListener('scroll', animateOnScroll)
  
animateOnScroll()