const addEventOnElements = (elements, eventType, callback) => {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback)
  }
}

const [navTogglers, navLinks, navbar, overlay] = [
  document.querySelectorAll("[data-nav-toggler]"),
  document.querySelectorAll("[data-nav-link]"),
  document.querySelector("[data-navbar]"),
  document.querySelector("[data-overlay]")
]

const toggleNav = () => {
  navbar.classList.toggle("active")
  overlay.classList.toggle("active")
  document.body.classList.toggle("active")
}

addEventOnElements(navTogglers, "click", toggleNav)

const closeNav = () => {
  navbar.classList.remove("active")
  overlay.classList.remove("active")
  document.body.classList.remove("active")
}

addEventOnElements(navLinks, "click", closeNav)

const header = document.querySelector("[data-header]")

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("active")
  } else {
    header.classList.remove("active")
  }
})

const navLink = document.getElementsByClassName('navbar-link')

for(let link of navLink){
  link.addEventListener('click', () => {
    closeNav()
  })
}