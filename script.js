const num = document.querySelectorAll(".number");
const Inputtext = document.querySelector(".input");
const clear = document.querySelector(".clear-button");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");

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
        Inputtext.value = `${firstInput}${operatorInput[0]}`
        // console.log(Input);
        // Inputtext.value = "";
    } else {
        secondInput = Inputtext.value.split(operatorInput[0]).pop();
        console.log(secondInput +"    seconinput");
        // console.log(operator.textContent);
        switch (operatorInput[0]) {
            case "+":
                firstInput = Number(firstInput) + Number(secondInput);
                Inputtext.value = `${firstInput}${operatorInput[1]}`;
                operatorInput[0] = operatorInput[1]
                operatorInput[1] = null;

                // console.log(Input);
                break;
            case "-":
                firstInput = Number(firstInput) - Number(secondInput);
                Inputtext.value = `${firstInput}${operatorInput[1]}`;
                operatorInput[0] = operatorInput[1]
                operatorInput[1] = null;
                // console.log(`operatorInput[0] ${operatorInput[0]}`);
                // console.log(`operatorInput[1] ${operatorInput[1]}`);



                // console.log(Input);
                break;
            case "*":
                firstInput = Number(firstInput) * Number(secondInput);
                Inputtext.value = `${firstInput}${operatorInput[1]}`;
                operatorInput[0] = operatorInput[1]
                operatorInput[1] = null;

                // console.log(firstInput);
                break;
            case "/":
                firstInput = Number(firstInput) / Number(secondInput);
                Inputtext.value = `${firstInput}${operatorInput[1]}`;
                operatorInput[0] = operatorInput[1]
                operatorInput[1] = null;

                // console.log(firstInput);
                break;

            default:
                break;
        }
        // if(operator.textContent == '+'){

        // }
    }
}

function sum() {

    secondInput = Inputtext.value.split(operatorInput[0]).pop();
    console.log(secondInput);


    // console.log(operatorInput);
    // console.log(firstInput);
    if (firstInput) {
        switch (operatorInput[0]) {
            case "+":
                Inputtext.value = Number(firstInput) + Number(secondInput);
                firstInput = Inputtext.value;
                operatorInput[0] = null;
                // console.log(`operatorInput[0] ${operatorInput[0]}`);
                // console.log(`operatorInput[1] ${operatorInput[1]}`);



                // console.log(firstInput);
                break;
            case "-":
                Inputtext.value = Number(firstInput) - Number(secondInput);
                firstInput = Inputtext.value;
                operatorInput[0] = null;

                // console.log(Input);
                break;
            case "*":
                Inputtext.value = Number(firstInput) * Number(secondInput);
                firstInput = Inputtext.value;
                operatorInput[0] = null;

                // console.log(Input);
                break;
            case "/":
                Inputtext.value = Number(firstInput) / Number(secondInput);
                firstInput = Inputtext.value;
                operatorInput[0] = null;

                // console.log(Input);
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
    firstInput = null;
})

for (let index = 0; index <= 3; index++) {

    operator[index].addEventListener('click', () => {
        if (!operatorInput[0]) {
            operatorInput[0] = operator[index].textContent;
            // console.log(`operatorInput[0] ${operatorInput[0]}`);
        } else {
            operatorInput[1] = operator[index].textContent
            // console.log(`operatorInput[1] ${operatorInput[1]}`);

        }
        // console.log(operatorInput);
        operating();
    });


}

equal.addEventListener('click', sum);




