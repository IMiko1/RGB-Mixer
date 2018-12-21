function colorChange() {
    'use strict'
    var redColr = document.getElementById('redSlider').value;
    var greenColr = document.getElementById('greenSlider').value;
    var blueColr = document.getElementById('blueSlider').value;
    console.log(redColr);
    console.log(greenColr);
    console.log(blueColr);
    document.getElementById('showColor').style.backgroundColor = "rgb(" + redColr + ", " + greenColr + ", " + blueColr + ")";
    document.getElementById('rgbTxt').innerHTML = "rgb(" + redColr + ", " + greenColr + ", " + blueColr + ")";
}