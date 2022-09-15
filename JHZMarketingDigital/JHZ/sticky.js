let header = document.querySelector("#header")
let sticky = header.offsetTop;

window.onscroll = function() {headerRoll()};

function headerRoll() {
    if(window.scrollY) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}