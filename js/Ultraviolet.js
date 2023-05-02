let about = document.getElementById("about");
let aboutBox = document.getElementById("about-box");
let newh = document.getElementById("newh");
let centerBox = document.getElementById("center-box");

about.onclick = function() {
    aboutBox.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == aboutBox) {
        aboutBox.style.display = "none";
    }
}

newh.onclick = function() {
    let address = document.createElement("div");
    let dump = document.createElement("div");
    $(address).attr("class", "values");
    $(address).attr("id", "address");
    $(address).html("Address");
    $(dump).attr("class", "values");
    $(dump).attr("id", "dump");
    $(dump).html("Dump");
    $(centerBox).append(address);
    for(let i=0;i<16;i++) {
        let nDiv = document.createElement("div");
        $(nDiv).attr("class", "values");
        $(nDiv).attr("id", i.toString(16));
        $(nDiv).html(i.toString(16));
        $(centerBox).append(nDiv);
    }
    $(centerBox).append(dump);
}