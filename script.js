
function change_trick() {
    number = Math.floor(Math.random() * 5) + 1;
    var image_src = "images/monster" + number + ".png";
    document.getElementById("image").src = image_src;
    document.getElementById("image").style.visibility = "visible";
}

function change_treat() {
    number = Math.floor(Math.random() * 4) + 1;
    var image_src = "images/candy" + number + ".png";
    document.getElementById("image").src = image_src;
    document.getElementById("image").style.visibility = "visible";
}
