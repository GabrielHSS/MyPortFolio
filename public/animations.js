function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.querySelector('html').scrollTop = window.scrollY;
    }
    
function enableScroll() {
document.body.style.overflow = null;
}
function abreMenu(){
    state = document.getElementById("links").style.display;
    if(state == "none"){
        document.getElementById("links").style.display = "flex";
        document.getElementById("overlay").style.display = "block";
        disableScroll()

    } else {
        document.getElementById("links").style.display = "none";
        document.getElementById("overlay").style.display = "none";
        enableScroll()
    }
    
}