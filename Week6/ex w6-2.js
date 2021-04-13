function qs(selector){
    return document.querySelector(selector);
}

function verifypass(){
    pass = qs('#password').value;
    //check if password contain at least 1 digit
    digit='0123456789';
    with_digit = false;
    for (let c of pass){
        if (digit.indexOf(c) >= 0){
            with_digit = true;
            break;
        }
    }
    if (with_digit){
        alert("At least 1 digit");
    }
    else 
    {alert("No digit");}
}