$(document).ready(onReady);

let inputArray = [];

function onReady() {
    console.log('in onReady');
    $(document).on('click', '.addButton', getInputs);



}

function getInputs(){
    // Once Submit is clicked, check to see if all fields were filled
    if ( $('.firstNameIn').val() === '' || $('.lastNameIn').val() === '' || $('.idIn').val() === ''
        || $('.titleIn').val() === '' || $('.annualSalaryIn').val() === '' ){
        console.log('Please fill all fields.');
    }
    else{
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
}

console.log('down here!');