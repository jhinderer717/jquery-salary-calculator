$(document).ready(onReady);

let inputArray = [];

function onReady() {
    console.log('in onReady');
    $(document).on('click', '.addButton', checkFields);



}

function checkFields(){
    if ( $('.firstNameIn').val() === '' || $('.lastNameIn').val() === '' || $('.idIn').val() === ''
        || $('.titleIn').val() === '' || $('.annualSalaryIn').val() === '' ){
        console.log('Please fill all fields.');
    }
    else{
        getInputs();
    }
}

function getInputs(){
    let submission = [
        { firstName: $('.firstNameIn').val() },
        { lastName: $('.lastNameIn').val() },
        { id: $('.idIn').val() },
        { title: $('.titleIn').val()},
        { annualSalary: $('.annualSalaryIn').val() }
    ];
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
}

console.log('down here!');