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
    console.log('monthlyExpense is now $', monthlyExpense);
    displayStuff();
}

function displayStuff() {
    console.log('in displayStuff');
    // first entry replace empty table row, append after that
    $('.total').replaceWith(`<h2 class="total">Total Monthly Salary Expense = $${monthlyExpense}</h2>`);
    if(inputArray.length === 1){
        $('.firstNameOut').replaceWith(`<td class="firstNameOut">${inputArray[0].firstName}</td>`);
        $('.lastNameOut').replaceWith(`<td class="lastNameOut">${inputArray[0].lastName}</td>`);
        $('.idOut').replaceWith(`<td class="idOut">${inputArray[0].id}</td>`);
        $('.titleOut').replaceWith(`<td class="titleOut">${inputArray[0].title}</td>`);
        $('.annualSalaryOut').replaceWith(`<td class="annualSalaryOut">$${inputArray[0].annualSalary}</td>`);
    }
    else{
        for ( let i=1; i< inputArray.length; i++ ) {
            $('.tableBody').append(`
            <tr>
                <td class="firstNameOut">${inputArray[i].firstName}</td>
                <td class="lastNameOut">${inputArray[i].lastName}</td>
                <td class="idOut">${inputArray[i].id}</td>
                <td class="titleOut">${inputArray[i].title}</td>
                <td class="annualSalaryOut">$${inputArray[i].annualSalary}</td>
                <td><button class="delete">Delete</button></td>
            </tr>
            `);
        }
    }
}

console.log('down here!');