$(document).ready(onReady);

let inputArray = [];
let monthlyExpense = 0;

function onReady() {
    console.log('in onReady');
    $(document).on('click', '.addButton', checkFields);
    $('.delete').on('click', deleteNothing);

}

function checkFields(){
    console.log('in checkFields');
    if ( $('.firstNameIn').val() === '' || $('.lastNameIn').val() === '' || $('.idIn').val() === ''
        || $('.titleIn').val() === '' || $('.annualSalaryIn').val() === '' || isNaN( $('.annualSalaryIn').val() ) ){
        console.log('Please fill all fields with Annual Salary as a number');
    }
    else{
        getInputsIntoArray();
    }
}

function getInputsIntoArray(){
    console.log('in getInputs');
    let submission = {
        firstName: $('.firstNameIn').val(),
        lastName: $('.lastNameIn').val(),
        id: $('.idIn').val(),
        title: $('.titleIn').val(),
        annualSalary: $('.annualSalaryIn').val(),
        wasDeleted: false
    };
    // view last submission
    console.log(submission);
    inputArray.push(submission);
    // view all submissions
    console.log(inputArray);
    // empty input fields
    $('.firstNameIn').val('');
    $('.lastNameIn').val('');
    $('.idIn').val('');
    $('.titleIn').val('');
    $('.annualSalaryIn').val('');
    displayInputs();
}

// searched how to display large number with commas
// function found here
// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function totalMonthlyExpense(){
    console.log('in totalMonthlyExpense');
    monthlyExpense = 0;
    for ( i in inputArray ){
        if( inputArray[i].wasDeleted === false ){
            monthlyExpense += (inputArray[i].annualSalary / 12 );
        }
    }
    monthlyExpense = monthlyExpense.toFixed(2);
    stringMonthlyExpense = numberWithCommas(monthlyExpense);
    if(monthlyExpense > 20000){
        $('#total').replaceWith(`
        <h2 id="total" class="redClass">Total Monthly Salary Expense = $${stringMonthlyExpense}</h2>
        `);
    }
    else{
        $('#total').replaceWith(`
        <h2 id="total">Total Monthly Salary Expense = $${stringMonthlyExpense}</h2>
        `);
    }
    console.log('monthlyExpense is now $', stringMonthlyExpense);
}

function displayInputs() {
    console.log('in displayInputs');
    $('.tableBody').empty();
    for ( let i=0; i< inputArray.length; i++ ) {
        console.log('was deleted?', inputArray[i].wasDeleted);
        if(inputArray[i].wasDeleted === false){// class="oddClass" taken out of table row
            $('.tableBody').append(`
            <tr id="tableRow">
                <td class="firstNameOut">${numberWithCommas(inputArray[i].firstName)}</td>
                <td class="lastNameOut">${numberWithCommas(inputArray[i].lastName)}</td>
                <td class="idOut">${numberWithCommas(inputArray[i].id)}</td>
                <td class="titleOut">${numberWithCommas(inputArray[i].title)}</td>
                <td class="annualSalaryOut">$${numberWithCommas(inputArray[i].annualSalary)}</td>
                <td><button id="button${i}" class="delete">Delete</button></td>
            </tr>
            `);
        }
        /*if ( i%2 === 0 ) {
            console.log('i is even, no color, toggle oddClass off');
            $('#tableRow').toggleClass('oddClass');
        }
        else{
            console.log('toggle background color, leave oddClass');    An attempt at making odd rows light blue
        }*/
        
    }
    $('.delete').on('click', deleteRow);
    $('.delete').on('click', markDeleted);
    totalMonthlyExpense();
}

function markDeleted() {
    console.log('gotta mark deleted');
    inputArray[Number($(this).attr('id').slice(-1))].wasDeleted = true;
    totalMonthlyExpense();
}

function deleteRow() {
    console.log('in deleteRow', $(this));
    
    $(this).parent().parent().remove();
}

function deleteNothing(){
    console.log('There is nothing to delete.');
}

console.log('down here!');