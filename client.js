$(document).ready(onReady);

let inputArray = [];

function onReady() {
    console.log('in onReady');
    $(document).on('click', '.addButton', getInputs);



}

function getInputs(){
    console.log('executing getInputs');
    
    
    let submission = [
        { firstName: $('.firstNameIn').val() },
        { lastName: $('.lastNameIn').val() },
        { id: $('.idIn').val() },
        { title: $('.titleIn').val()},
        { annualSalary: $('.annualSalaryIn').val() }
    ];
    console.log(submission);
    
}

console.log('down here!');