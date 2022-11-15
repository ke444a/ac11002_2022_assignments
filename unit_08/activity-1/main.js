let billAmount = 0.0;

function setNewBill() {
    $("#billAmount").html("£" + billAmount.toFixed(2));
}

$(function() {
    $( "#selectable" ).selectable({
        selecting: function(event, ui) {
            billAmount+=Number(ui.selecting.innerHTML.replace('£',''));
            setNewBill();
        },
        unselecting: function(event, ui) {
            billAmount-=Number(ui.unselecting.innerHTML.replace('£',''));
            setNewBill();
        }
    });
});

function setTip(tipVal) {
    let tipResult = $("#tipResult");

    if (tipVal <= 5) {
        tipResult.removeClass("value-2 value-3 value-4");
        tipResult.addClass("value-1");
    } else if (tipVal > 5 && tipVal <= 15) {
        tipResult.removeClass("value-1 value-3 value-4");
        tipResult.addClass("value-2");
    } else if (tipVal > 15 && tipVal <= 25) {
        tipResult.removeClass("value-1 value-2 value-4");
        tipResult.addClass("value-3");
    } else {
        tipResult.removeClass("value-1 value-2 value-3");
        tipResult.addClass("value-4");
    }
    tipResult.html("£" + tipVal.toFixed(2));
}

function calculateTip(elementId) {
    let tipValue;

    if (elementId == "fivePercentBtn") {
        tipValue = 0.05*billAmount;
    } else if (elementId == "tenPercentBtn") {
        tipValue = 0.10*billAmount;
    } else if (elementId == "twentyFivePercentBtn") {
        tipValue = 0.25*billAmount;
    } else if (elementId == "largestPercentBtn") {
        let option1 = billAmount * 0.25;
        let option2 = billAmount * 0.10 + 2;
        if (option1 > option2) {
            tipValue = option1;
        } else {
            tipValue = option2;
        }
    }
    setTip(tipValue);
}

$("form button").each(function(btn) {
    $( this ).on("click", function() {calculateTip($(this).attr('id'))});
})