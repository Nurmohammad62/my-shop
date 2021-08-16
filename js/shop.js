// get input value
function getInput(inputId){
    // get cash input amount
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputAmount = parseFloat(inputFieldText);
    // clear input field
    inputField.value = '';
    return inputAmount;
}

// update total cash due total field
function updateSalesAmount(inputAmount, totalFieldId){
    // update cash total field
    const totalField = document.getElementById(totalFieldId);
    const totalFieldText = totalField.innerText;
    const totalAmount = parseFloat(totalFieldText);

    // calculate previous cash and new cash
    const cashTotalSales = totalAmount + inputAmount;
    totalField.innerText = cashTotalSales;
}

// update total sales
function updateTotalSales(inputAmount){
    // update total sales field
    const totalSalesField = document.getElementById('sales-total');
    const totalSalesFieldText = totalSalesField.innerText;
    const totalSalesFieldAmount = parseFloat(totalSalesFieldText);

    // calculate total sales
    const totalSalesAmount = totalSalesFieldAmount + inputAmount;
    totalSalesField.innerText = totalSalesAmount;
}

// cash submit button event handler
document.getElementById('cash-submit').addEventListener('click', function(){
    // get cash input amount
    const inputAmount = getInput('cash-input');

    if(inputAmount > 0){
        // update cash total field
        updateSalesAmount(inputAmount, 'cash-total');
        // update total sales field
        updateTotalSales(inputAmount);
    }
});

// due submit button event handler
document.getElementById('due-submit').addEventListener('click', function(){
    // get due input amount
    const dueInputFieldAmount = getInput('due-input');

    if(dueInputFieldAmount > 0){
        // update total due sales amount
        updateSalesAmount(dueInputFieldAmount, 'due-total')
        // update total sales amount
        updateTotalSales(dueInputFieldAmount);
    }
})