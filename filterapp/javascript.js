var originImage = null;
var originImage2 = null;
var originImage3 = null;
var originImage4 = null;

function loadImage() {
    var canvas = document.getElementById("can");
    var fileinput = document.getElementById("finput");
    originImage = new SimpleImage(fileinput);
    originImage.drawTo(canvas);
    originImage2 = new SimpleImage(fileinput);
    originImage3 = new SimpleImage(fileinput);
    originImage4 = new SimpleImage(fileinput);
}

function getGreyscale() {
    var gsImage = originImage;
    for (var pixel of gsImage.values()) {
        avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var canvas1 = document.getElementById("can");
    gsImage.drawTo(canvas1);   
}

function getRed() {
    var redImage = originImage2;
    for (var pixel of redImage.values()) {
        pixel.setRed(255);
    }
    var canvas2 = document.getElementById("can");
    redImage.drawTo(canvas2);   
}

function getRainbow() {
    var rainbowImage = originImage3;
    var height = rainbowImage.getHeight();
    for (var pixel of rainbowImage.values()) {
        var y = pixel.getY();
        if (y < height/7) {
            // красный 255 0 0
            pixel.setRed(getmore(pixel.getRed()));
        }
        if (y >= height/7 && y<(height/7)*2) {
            // оранжевый 255 127 0
            pixel.setRed(getmore(pixel.getRed()));
            pixel.setGreen(127);
        }
        if (y >= (height/7)*2 && y<(height/7)*3) {
            // желтый 255 255 0
            pixel.setRed(getmore(pixel.getRed()));
            pixel.setGreen(getmore(pixel.getGreen()));
        }
        if (y >= (height/7)*3 && y<(height/7)*4) {
            // green 0 255 0
            pixel.setGreen(getmore(pixel.getGreen()));

        }
        if (y >= (height/7)*4 && y<(height/7)*5) {
            // blue 0 0 255
            pixel.setBlue(getmore(pixel.getBlue()));
        }
        if (y >= (height/7)*5 && y<(height/7)*6) {
           // sin 75 0 130
            pixel.setRed(75);
            pixel.setBlue(130);
        }
        if (y >= (height/7)*6 && y<(height/7)*7) {
            // fiolet 143 0 255
            pixel.setRed(143);
            pixel.setBlue(getmore(pixel.getBlue()));
        }
    }
    var canvas3 = document.getElementById("can");
    rainbowImage.drawTo(canvas3);  
}

function getmore(num) {
    var z = num*6;
    var k = 200
    var n = 255;
    if (z > 255) {
        return n;
    }
    if (z > 160) {
        return z;
    }
    else {
        return k;
    }
}

function clearImage() {
    var clImage = originImage4;
    var canvas1 = document.getElementById("can");
    clImage.drawTo(canvas1);
}