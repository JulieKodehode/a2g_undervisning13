function person() {
    console.log("Hallo?");

    const userName = "Julie";
    const userAge = 28;
    let isOnline = true;

    //userName = "Julius";
    //userAge = 29;
    isOnline = false;

    console.log(userName, userAge, isOnline);
}

//person();

const viewPersonInfo = document.querySelector("#viewPersonInfo");
console.log(viewPersonInfo);

viewPersonInfo.addEventListener("click", person);

function simpleCalculator(num1, num2) {
    const sum = num1 + num2;

    console.log(sum);
}

//simpleCalculator(3, 4);

const viewCalculation = document.querySelector("#viewCalculation");
console.log(viewCalculation);

// Passing simpleCalculator(3, 4) in the eventListner parameter calls the function immediately, instead of setting it as a click event handler.
//viewCalculation.addEventListener("click", simpleCalculator(3, 4));

// This code sets up a function inside an eventListener correctly. But it incorrectly calls itself, creating a infinite loop.
/*viewCalculation.addEventListener("click", function simpleCalculator(num1, num2) {
    const sum = num1 + num2;

    console.log(sum);
    simpleCalculator(3, 4)
})*/

// Correct way using an anonymous function to activate the function we want to execute.
viewCalculation.addEventListener("click", function () {
    simpleCalculator(3, 4)
});