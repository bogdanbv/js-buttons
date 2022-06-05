var image;

function upload() {
    var canvas = document.getElementById("can");
    var fileinput = document.getElementById("finput");
    image = new SimpleImage(fileinput);
    // image.drawTo(canvas);
}

function makeGrey() {

    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var canvas = document.getElementById("can");
    image.drawTo(canvas);
}