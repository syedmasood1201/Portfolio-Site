window.addEventListener('scroll',function(){
    if(window.scrollY > 100) {
        document.getElementById("nav-bar").style.backgroundColor="black"
    } else if (window.scrollY < 50) {
        document.getElementById("nav-bar").style.background="transparent"
    }
})