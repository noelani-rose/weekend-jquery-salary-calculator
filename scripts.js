$(document).ready(onReady);


let employeeInfo = [];
let totalMonthly = 0;

function onReady() {
    console.log('in onReady')
    $('#employeeForm').on('submit', submitBtn);
    // // console.log('in onReady', $('.deleteBtn'));
    // // $('.deleteBtn').on('click', onDelete);
    // // Listen for clicks anywhere on the table
    // // but only call onDelete if it's a `.deleteBtn` element
    // $('#postsTable').on('click', '.deleteBtn', onDelete);
    $('#postsTable').on('click', '.deleteBtn', deleteBtn);
}

function submitBtn(evt){
    evt.preventDefault();
    console.log('in submitBtn');

}

function deleteBtn(){
    console.log('in deleteBtn')
}

function render(){
    console.log('in render');
}