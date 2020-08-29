$(document).ready(onReady);

let inputArray = [];
let monthlyExpense = 0;

function onReady() {
    console.log('in onReady');
    $(document).on('click', '.addButton', checkFields);


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
        annualSalary: $('.annualSalaryIn').val()
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
    totalMonthlyExpense();
}

function totalMonthlyExpense(){
    console.log('in totalMonthlyExpense');
    monthlyExpense = 0;
    for ( thing of inputArray ){
        monthlyExpense += (thing.annualSalary / 12 );
    }
    console.log('monthlyExpense is now', monthlyExpense );
}

console.log('down here!');