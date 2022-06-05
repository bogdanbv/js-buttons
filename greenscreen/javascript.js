var fgimage = null;
var bgimage = null;
var greenThreshold = 240;

function loadForegroundImage() {
    var canvas = document.getElementById("canleft");
    var fileinput = document.getElementById("fimage");
    fgimage = new SimpleImage(fileinput);
    fgimage.drawTo(canvas);
    alert("Foregraung image loading");

}

function loadBackgroundImage() {
    var canvas = document.getElementById("canright");
    var fileinput = document.getElementById("bimage");
    bgimage = new SimpleImage(fileinput);
    bgimage.drawTo(canvas);
    alert("Background image loading")
}

function doGreenScreen() {
    if (fgimage == null || ! fgimage.complete()) {
        alert("No foreground image or still loading");
    }
    if (bgimage == null || ! bgimage.complete()) {
        alert("No background image or still loading");
    }
    clearCanvas();
        var finalimage = CreateComposite();
        var canvas = document.getElementById("canleft");
        finalimage.drawTo(canvas);
        alert("Magic Done")
}



function clearCanvas() {
    var canleft = document.getElementById("canleft");
    var contextleft = canleft.getContext("2d");
    contextleft.clearRect(0, 0, canleft.width, canleft.height);
    var canright = document.getElementById("canright");
    var contextright = canright.getContext("2d");
    contextright.clearRect(0, 0, canright.width, canright.height);
    alert("Clearing");
}

function CreateComposite() {
    var output = new SimpleImage(fgimage.getWidth(),fgimage.getHeight());
    for (var pixel of fgimage.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if (pixel.getGreen() > 250) {
            var bgpixel = bgimage.getPixel(x,y);
            output.setPixel(x,y,bgpixel);
        }
        else {
            output.setPixel(x,y,pixel);
        }
    }
    return output;
}