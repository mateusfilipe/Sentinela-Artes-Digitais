var modal = document.getElementById("myModal");
modal.style.width = "80%";

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");


var mdimg = document.getElementById("img00");

img1.onclick = function() {
    modal.style.display = "block";
    mdimg.src = this.src;
}

img2.onclick = function() {
    modal.style.display = "block";
    mdimg.src = this.src;
}

img3.onclick = function() {
    modal.style.display = "block";
    mdimg.src = this.src;
}

modal.onclick = function() {
    modal.style.display = "none";
}