$( function() {
    let jsonData = `[{
        "genus": "Malus",
        "name": "Apple",
        "id": 6,
        "family": "Rosaceae",
        "order": "Rosales"  
    }, {
        "genus": "Prunus",
        "name": "Apricot",
        "id": 35,
        "family": "Rosaceae",
        "order": "Rosales"
    }, {
        "genus": "Persea",
        "name": "Avocado",
        "id": 84,
        "family": "Lauraceae",
        "order": "Laurales"
    }]`

    let parsedJSON = JSON.parse(jsonData);
    let htmlContent = "";
    for (let obj of parsedJSON) {
        htmlContent += '<h3>' + obj.name + '</h3>';
        htmlContent += '<div>';
        htmlContent += '<ul>';
        for (let [key, value] of Object.entries(obj)) {
            htmlContent += '<li><span>'+ key + '</span>: ' + value + '</li>';
        }
        htmlContent += '</ul>'
        htmlContent += '</div>'
    }
    $('#accordion').html(htmlContent);
} );

$( function() {
    $( "#accordion" ).accordion();
} );