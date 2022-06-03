function changecolor() {
    var divEelement1 = document.getElementById("div1");
    var divEelement2 = document.getElementById("div2");
    divEelement1.className = "blueback";
    divEelement2.className = "orangeback";
}

function doRed() {
    var divEelement1 = document.getElementById("div1");
    divEelement1.style.backgroundColor = "Red";
    ctx = divEelement1.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fillRect(10,10,60,60);
    ctx.fillRect(80,10,60,60);
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Hello", 15, 45);
    ctx.fillText("Hello", 85, 45);
}

function doBlue() {
    var divEelement2 = document.getElementById("div2");
    divEelement2.style.backgroundColor = "Blue";
    var divEelement1 = document.getElementById("div2");
    divEelement1.style.backgroundColor = "Red";
    ctx = divEelement1.getContext("2d");
    ctx.clearRect(0,0,divEelement1.clientWidth,divEelement1,height);
    ctx.style.backgroundColor = "orange";
}



function dolime() {
    var dd1 = document.getElementById("d1");
    dd1.style.backgroundColor = "lime";
}
function doyellow() {
    var dd1 = document.getElementById("d1");
    dd1.style.backgroundColor = "white";
    var ctx = dd1.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fillRect(10,10,40,40);
    ctx.fillRect(60,10,40,40);

    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText("Hello",10,80);
}