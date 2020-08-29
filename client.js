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
    $('.total').replaceWith(`<h2 class="total">Total Monthly Salary Expense = $${monthlyExpense}</h2>`);
    $('.tableBody').empty();
    for ( let i=0; i< inputArray.length; i++ ) {
        console.log(inputArray[i].wasDeleted);
        if(inputArray[i].wasDeleted === false){
            $('.tableBody').append(`
            <tr class="tableRow">
                <td class="firstNameOut">${inputArray[i].firstName}</td>
                <td class="lastNameOut">${inputArray[i].lastName}</td>
                <td class="idOut">${inputArray[i].id}</td>
                <td class="titleOut">${inputArray[i].title}</td>
                <td class="annualSalaryOut">$${inputArray[i].annualSalary}</td>
                <td><button id="button${i}" class="delete">Delete</button></td>
            </tr>
            `);
        }
    }
    $('.delete').on('click', deleteRow);
    $('.delete').on('click', markDeleted);
}

function markDeleted() {
    console.log('gotta mark deleted');
    console.log($(this).text());
    console.log(Number($(this).attr('id').slice(-1)));
    inputArray[Number($(this).attr('id').slice(-1))].wasDeleted = true;
    //$(this).change('wasDeleted', true);// continue working here.
}

function deleteRow() {
    console.log('in deleteRow', $(this));
    $(this).parent().parent().remove();

}

function deleteNothing(){
    console.log('There is nothing to delete.');
}

console.log('down here!');