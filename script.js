const num = document.querySelectorAll(".number");
const Inputtext = document.querySelector(".input");
const clear = document.querySelector(".clear-button");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");


var firstInput;
var operatorInput = [];
var secondInput;

function addnumber(index) {

    var temp = Inputtext.value;
    Inputtext.value = `${temp}${index}`;

}
function operating() {
    if (!firstInput) {
        firstInput = Inputtext.value;
        if (firstInput.substr(firstInput.length - 1) == ".") {
            firstInput = `${firstInput}0`
        }
        Inputtext.value = `${firstInput}${operatorInput[0]}`
    } else {
        secondInput = Inputtext.value.split(operatorInput[0]).pop();
        console.log(secondInput + "    seconinput");
        if (secondInput.substr(secondInput.length - 1) == ".") {
            secondInput = `${secondInput}0`
        }
        switch (operatorInput[0]) {
            case "+":
                firstInput = Number(firstInput) + Number(secondInput);
                Inputtext.value = `${firstInput}${operatorInput[1]}`;
                operatorInput[0] = operatorInput[1]
                delete operatorInput[1];
                break;
            case "-":
                firstInput = Number(firstInput) - Number(secondInput);
                Inputtext.value = `${firstInput}${operatorInput[1]}`;
                operatorInput[0] = operatorInput[1]
                delete operatorInput[1];
                break;
            case "*":
                firstInput = Number(firstInput) * Number(secondInput);
                Inputtext.value = `${firstInput}${operatorInput[1]}`;
                operatorInput[0] = operatorInput[1]
                delete operatorInput[1];
                break;
            case "/":
                firstInput = Number(firstInput) / Number(secondInput);
                Inputtext.value = `${firstInput}${operatorInput[1]}`;
                operatorInput[0] = operatorInput[1]
                delete operatorInput[1];
                break;

            default:
                break;
        }

    }
}

function sum() {



    if (firstInput) {
        secondInput = Inputtext.value.split(operatorInput[0]).pop();
        if (secondInput.substr(secondInput.length - 1) == ".") {
            secondInput = `${secondInput}0`
        }
        switch (operatorInput[0]) {
            case "+":
                Inputtext.value = Number(firstInput) + Number(secondInput);
                firstInput = "";
                delete operatorInput[0];
                break;
            case "-":
                Inputtext.value = Number(firstInput) - Number(secondInput);
                firstInput = "";
                delete operatorInput[0];
                break;
            case "*":
                Inputtext.value = Number(firstInput) * Number(secondInput);
                firstInput = "";
                delete operatorInput[0];
                break;
            case "/":
                Inputtext.value = Number(firstInput) / Number(secondInput);
                firstInput = "";
                delete operatorInput[0];
                break;

            default:
                console.log("error");
                break;
        }
    }


}

for (let index = 0; index < 10; index++) {
    num[index].addEventListener('click', () => {
        if (index == 9) {
            addnumber(0)
        } else {
            addnumber(index + 1)
        }
    });

}
clear.addEventListener('click', () => {
    Inputtext.value = "";
    firstInput = "";
})

for (let index = 0; index <= 3; index++) {

    operator[index].addEventListener('click', () => {
        if (!operatorInput[0]) {
            operatorInput[0] = operator[index].textContent;
        } else {
            operatorInput[1] = operator[index].textContent

        }
        operating();
    });


}

equal.addEventListener('click', sum);

dot.addEventListener('click', () => {

    var temp = Inputtext.value;
    Inputtext.value = `${temp}.`;

});

document.addEventListener("keypress", (event) => {
    if (event.keyCode == 13){
      sum();
    }
  });







