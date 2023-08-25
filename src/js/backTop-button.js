const backTopBtn = document.querySelector("[data-back-top-btn]")

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("active")
    backTopBtn.classList.add("active")
  } else {
    header.classList.remove("active")
    backTopBtn.classList.remove("active")
  }
})