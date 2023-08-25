const changeThemeBtn = document.querySelector("#change-theme")

const toggleLightMode = () => {
    document.body.classList.toggle("light")
}

const loadTheme = () => {
    const lightMode = localStorage.getItem("light")

    if(lightMode){
        toggleLightMode()
    }
}

loadTheme()

changeThemeBtn.addEventListener("change", () => {
    document.body.classList.toggle("light")

    localStorage.removeItem("light")

    if(document.body.classList.contains("light")){
        localStorage.setItem("light", 1)
    }
})