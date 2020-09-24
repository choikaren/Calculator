//eat bill input

const tipForm = document.querySelector("#tip-form"); // global scope

tipForm.addEventListener('submit', function() {
    event.preventDefault();
    const billAmount = Number(document.querySelector("#bill-amount").value); //scoped to function, function scoped
    const tipPercentage = Number(document.querySelector("#tip-amount").value);
    console.log(tipPercentage);
    console.log(billAmount);
    //math for tip
    const tipCalcuation = billAmount * (1 + tipPercentage * 0.01) ;
    //math for tip + bill
    const tipAmount = document.querySelector("#final-tip");
    tipAmount.innerHTML = `${tipCalcuation}`;
    console.log(tipAmount);
});

//get tip percentage

//process the value (actual calculation)

//display to user