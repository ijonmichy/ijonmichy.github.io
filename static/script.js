
function scrollTOC() {
    var toc = document.getElementById("table-of-contents");
    if(window.scrollY > 250) {
        toc.style.top = 0;
    }
    else {
        pos = 250 - window.scrollY; //330
        toc.style.top = pos + 'px';
    }
}