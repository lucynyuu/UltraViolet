let about = document.getElementById("about");
let aboutBox = document.getElementById("about-box");
let closeh = document.getElementById("closeh");
let newh = document.getElementById("newh");
let centerBox = document.getElementById("center-box");
let addressBox = document.getElementById("address-box");
let hexBox = document.getElementById("hex-box");
let dumpBox = document.getElementById("dump-box");

about.onclick = function() {
    aboutBox.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == aboutBox) {
        aboutBox.style.display = "none";
    }
}

closeh.onclick = function() {
    files = [];
    clear();
}

newh.onclick = function() {
    
}

var files = [];
var lines;

document.getElementById('file').onchange = function() {
    var file = this.files[0];
  
    var reader = new FileReader();
    reader.onload = function(progressEvent) {
        const text = this.result;
        files = [];
        for(let i=0;i<text.length;i++) {
            files.push(text.charCodeAt(i).toString(16));
        }
        display();
    };
    reader.readAsText(file);
};

function clear() {
    $(addressBox).empty();
    $(hexBox).empty();
    $(dumpBox).empty(); 
}

function display() {
    clear();
    preLoad();
    for(let j=0;j<files.length/16;j++) {
        let address = document.createElement("div");
        $(address).attr("class", "values");
        $(address).attr("id", "address");
        $(address).html(String((j*16).toString(16)).padStart(8, '0'));
        $(addressBox).append(address);
        let hexHolder = document.createElement("div");
        $(hexHolder).attr("id", "hex-holder");
        $(hexBox).append(hexHolder);

        let dbox = document.createElement("div");
        //$(dbox).attr("id", "address");

        for(let i=j*16;i<j*16+16 && i<files.length;i++) {
            let nDiv = document.createElement("div");
            $(nDiv).attr("class", "values");
            //$(nDiv).attr("id", "address");
            $(nDiv).html(('0' + files[i]).slice(-2));
            $(hexHolder).append(nDiv);
            let char = parseInt(files[i], 16);
            if(char>31 && char<127)
                $(dbox).append(String.fromCharCode(char));
            else
                $(dbox).append('.');
        }
        $(dumpBox).append(dbox);
    }
}

function preLoad() {
    let address = document.createElement("div");
    $(address).attr("class", "values");
    $(address).attr("id", "address");
    $(address).html("Address");
    $(address).css("border-right-style", "solid");
    $(address).css("border-width", "1px");
    $(address).css("border-color", "#ffffff1a");
    $(addressBox).append(address);


    let hexHolder = document.createElement("div");
    $(hexHolder).attr("id", "hex-holder");
    $(hexBox).append(hexHolder);

    let dbox = document.createElement("div");
    //$(dbox).attr("id", "address");

    for(let i=0;i<16;i++) {
        let nDiv = document.createElement("div");
        $(nDiv).attr("class", "values");
        //$(nDiv).attr("id", "address");
        $(nDiv).css("border-right-style", "solid");
        $(nDiv).css("border-width", "1px");
        $(nDiv).css("border-color", "#ffffff1a");
        $(nDiv).html(i.toString(16));
        $(hexHolder).append(nDiv);
    }
    $(dbox).html("dump");
    $(dumpBox).append(dbox);
}