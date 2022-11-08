var form = document.getElementsByTagName("form");
var buttonArray = document.getElementsByTagName("button");

for ( var btn of buttonArray ) {
    btn.addEventListener("click", function() {calculateTip(this)});
}


function calculateTip(element) {
    let billAmount = document.getElementById("billAmount").value;
    let tipResult = document.getElementById("tipResult");
    let calculationResult;


    if (element.id == "fivePercentBtn") {
        calculationResult = 0.05*billAmount;
    } else if (element.id == "tenPercentBtn") {
        calculationResult = 0.10*billAmount;
    } else if (element.id == "twentyFivePercentBtn") {
        calculationResult = 0.25*billAmount;
    } else if (element.id == "largestPercentBtn") {
        let option1 = billAmount * 0.25;
        let option2 = billAmount * 0.10 + 2;
        if (option1 > option2) {
            calculationResult = option1;
        } else {
            calculationResult = option2;
        }
    }

    tipResult.innerHTML = "£" + calculationResult.toFixed(2);
}