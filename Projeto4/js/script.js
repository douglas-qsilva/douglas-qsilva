hamburger = document.querySelector(".hamb")
navlist = document.querySelector(".nav-list")
links = document.querySelector(".nav-list li")

hamburger.addEventListener("click", function(){
    this.classList.toggle("click")
    navlist.classList.toggle("open")
    
})
