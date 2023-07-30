function setup () {
    canvas = createCanvas(400, 400);
    canvas.position(575, 225);
    //video = createCapture(VIDEO);
    //video.size(500, 500);
    //video.position(30, 200);
}
var input = "";
function nextPage () {
    input = document.getElementById("input").value;
    if (input == "") {
        input = "Nothing";
    }
    console.log(input);
}
