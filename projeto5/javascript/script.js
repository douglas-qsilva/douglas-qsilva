hamb = document.querySelector("#hamb")
navMenu = document.querySelector(".barraMenu")

hamb.addEventListener('click', function() {
   

    if(navMenu.style.display === "block"){
        navMenu.style.display = "none"
    }else{
        navMenu.style.display = "block"
    }
})
