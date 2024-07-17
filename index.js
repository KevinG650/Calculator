let calcValue = document.getElementById('calc-header')
let action;
let prevNumber;



function calculate() {
    if (action === "-") {
        calcValue.innerText = Number(prevNumber) - Number(calcValue.innerText)
    }

    if (action === "+") {
        calcValue.innerText = Number(prevNumber) + Number(calcValue.innerText)
    }

    if (action === "*") {
        calcValue.innerText = Number(prevNumber) * Number(calcValue.innerText)
    }

    if (action === "/") {
        calcValue.innerText = Number(prevNumber) / Number(calcValue.innerText)
    }
}

function onclickB1() {
    if (calcValue.innerText === '0') {
        calcValue.innerText = "1" 
    } 
    else {
        calcValue.innerText =  calcValue.innerText + "1"
    }
   
}
function onclickB2() {
    calcValue.innerText = "2"
}
function onclickB3() {
    calcValue.innerText = "3"
}
function onclickB4() {
    calcValue.innerText = "4"
}
function onclickB5() {
    calcValue.innerText = "5"
} function onclickB6() {
    calcValue.innerText = "6"
}
function onclickB7() {
    calcValue.innerText = "7"
}
function onclickB8() {
    calcValue.innerText = "8"
}
function onclickB9() {
    calcValue.innerText = "9"
}
function onclickB0() {
    if (calcValue.innerText === '1') {
        calcValue.innerText = "0" 
    } 
    else {
        calcValue.innerText =  calcValue.innerText + "0"
    }
}
function onclickBAdd() {
    prevNumber = calcValue.innerText;
    action = "+"
}
function onclickBmin() {
    prevNumber = calcValue.innerText;
    action = "-"
}
function onclickBtimes() {
    prevNumber = calcValue.innerText;
    action = "*"
}
function onclickBdiv() {
    prevNumber = calcValue.innerText;
    action = "/"
}
