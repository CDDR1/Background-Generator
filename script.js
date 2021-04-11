const leftColor = document.getElementsByClassName("left-color")[0];
const rightColor = document.getElementsByClassName("right-color")[0];
const body = document.getElementsByTagName("body")[0];
const h3 = document.getElementsByTagName("h3")[0];

leftColor.value = "#2CC0f2";
rightColor.value = "#D71FEF";

const updateColor = function() {
    let leftColorValue = leftColor.value;
    let rightColorValue = rightColor.value;
    body.style.background = "linear-gradient(to right, " + leftColorValue +"," + rightColorValue +")";
    h3.innerText = body.style.background + ";";
}

leftColor.addEventListener("input", updateColor);
rightColor.addEventListener("input", updateColor);