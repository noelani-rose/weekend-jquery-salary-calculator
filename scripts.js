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
    evt.preventDefault(evt);
    console.log('in submitBtn');

    let newInfo = {
        fName: $('#firstName').val(),
        lName: $('#lastName').val(),
        idNum: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annSal: $('#annualSalary').val()
    };
    console.log('new info is now', newInfo);
    employeeInfo.push(newInfo);


// TO DO: Need to convert annSal into number?? It's concatenating 
// loop through and add all annual salaries (annSal)
let totalSalary = ''
        for (let i = 0; i < employeeInfo.length; i++){
            totalSalary = totalSalary + employeeInfo[i].annSal;
            // TO DO: work to make this reflect monthly costs
            $('.totalMonthly').text(`Total Monthly: ${totalSalary}`)

        }

        console.log(totalSalary);
    // console.log('the total salary is now', totalSalary);
    

    render();
}

function deleteBtn(){
    console.log('in deleteBtn')
}

function render(){
    console.log('in render');
    $('#employeeTable').empty();

    for (let em of employeeInfo){
        $('#employeeTable').append(`
        <tr>
            <td>${em.fName}</td>
            <td>${em.lName}</td>
            <td>${em.idNum}</td>
            <td>${em.jobTitle}</td>
            <td>${em.annSal}</td>
        </tr>`);

    }
}

function convertObjtoNum(obj){
    let res = {};
    for (let num in obj){

    }
}