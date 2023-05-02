let about = document.getElementById("about");
var aboutBox = document.getElementById("about-box");

about.onclick = function() {
    aboutBox.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == aboutBox) {
        aboutBox.style.display = "none";
    }
}