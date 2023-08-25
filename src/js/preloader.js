const preloader = document.querySelector("[data-preloader]")

window.addEventListener("DOMContentLoaded", () => {
  preloader.classList.add("loaded")
  document.body.classList.add("loaded")
})