const changeThemeBtn = document.querySelector("#change-theme");

function toggleLightMode(){
    document.body.classList.toggle("light");
};

function loadTheme(){
    const lightMode = localStorage.getItem("light")

    if(lightMode){
        toggleLightMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", function(){
    document.body.classList.toggle("light");

    localStorage.removeItem("light");

    if(document.body.classList.contains("light")){
        localStorage.setItem("light", 1);
    }

}
);