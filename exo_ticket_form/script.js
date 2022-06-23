function multiplier(){
    num1 = document.getElementById("01").value;
    num2 = document.getElementById("02").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function ttc(){
    b = document.getElementById("b").value;
    p = document.getElementById("p").value;
    s = document.getElementById("s").value;
    document.getElementById("ttc").innerHTML = (b * 1.1) + (p * 1.1) + (s * 1.1);
}

function tva(){
    b = document.getElementById("b").value;
    p = document.getElementById("p").value;
    s = document.getElementById("s").value;
    document.getElementById("tva").innerHTML = (b * 1.1) + (p * 1.1) + (s * 1.1) - b - p - s;
}

function ht(){
    b = document.getElementById("b").value;
    p = document.getElementById("p").value;
    s = document.getElementById("s").value;
    document.getElementById("ht").innerHTML = parseFloat(b) + parseFloat(p) + parseFloat(s);
}