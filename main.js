function getParagraph1() {
    var inputs = [];
    for(k = 1; k <= 6; k++) {
        inputs.push(document.getElementById("paral_input_box_" + k).value);
        
    } 
    inputs.join(". ");
    document.getElementById("showParagraph1").innerHTML = inputs.join(". ")
}

function getParagraph2() {
    var inputs = [];
    for(k = 1; k <= 6; k++) {
        inputs.push(document.getElementById("para2_input_box_" + k).value);
        
    } 
    inputs.join(". ");
    document.getElementById("showParagraph2").innerHTML = inputs.join(". ")
}