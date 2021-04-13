function qs(selector){
    return document.querySelector(selector);
}

function plus() {
    n1 = qs("#number1").value;
    n2 = qs("#number2").value;
    qs("#result").value = parseFloat(n1) + parseFloat(n2);
}

function minus(){
    n1 = qs("#number1").value;
    n2 = qs("#number2").value;
    qs("#result").value = parseFloat(n1) - parseFloat(n2);
}

function multi(){
    n1 = qs("#number1").value;
    n2 = qs("#number2").value;
    qs("#result").value = parseFloat(n1) * parseFloat(n2);
}

function divide(){
    n1 = qs("#number1").value;
    n2 = qs("#number2").value;
    qs("#result").value = parseFloat(n1) / parseFloat(n2);
}