var input = "";
function nextPage () {
    input = document.getElementById("input").value;
    if (input == "") {
        input = "Nothing";
    }
    console.log(input);
    window.location = "index.html";
}