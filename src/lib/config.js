/******
 * Crayola - Utilities
 * Omar Gonzalez Rocha - Copyright MIT license 2017
 */

//Scene Config 
window.CONFIG = function() {
    //Set Accordingily 
    let pixelSize = 10;
    let predefinedPixel = "L" //S,M,L //set to null if you want a fixed dimension
    let apectRatio = [16, 9];
    let percentual = null // [100, 70]; null or ser w % or h &

    if (predefinedPixel === "S") {
        pixelSize = window.innerWidth / 200;
    }
    if (predefinedPixel === "M") {
        pixelSize = window.innerWidth / 150;
    }
    if (predefinedPixel === "L") {
        pixelSize = window.innerWidth / 100;
    }

    var width;
    var height;

    if (percentual) {
        let verticalMargin = (100 - percentual[1]) / 2;
        document.getElementById('screen').style.marginTop = verticalMargin + "%";
        width = percentual[0] + "%";
        height = percentual[1] + "%"
    }

    if(apectRatio){
        width = window.innerWidth;
        height = parseFloat((width / apectRatio[0]) * apectRatio[1]);
        let verticalMargin = (window.innerHeight - height) / 2;
        document.getElementById('screen').style.marginTop = verticalMargin + "px";
        width = width + "px";
        height = height + "px";
    }

    return {
        'pixelSize': pixelSize,
        'screen': {
            'width': width,
            'height': height
        }
    }
}

window.addEventListener("resize", () => {
    window.CONFIG();
});