var inputs = document.getElementsByClassName("inputs")
var continuebutton = document.getElementById("submit_button")
var circle_dec = document.getElementById("circle_dec");
///////////////////////////////////////////////////////
function calculateAverage() {
    var sum = 0;
    for (var i = 0; i < inputs.length; i++) {
        var value = parseFloat(inputs[i].value) || 0;
        sum += value;
    }
    return sum / inputs.length;

}
function handlesubmit() {
    var average = calculateAverage();
    circle_dec.innerText = average;
    if (average >60) {
        comments.style.display="flex"

    } else {
        comments.style.display="none"
    }

}
continuebutton.onclick = handlesubmit