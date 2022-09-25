$(document).ready(onReady);


let employeeInfo = [];


function onReady() {
    console.log('in onReady')
    $('#employeeForm').on('submit', submitBtn);
    // // Listen for clicks anywhere on the table
    // // but only call onDelete if it's a `.deleteBtn` element
    $('#employeeTable').on('click', '.deleteBtn', deleteBtn);
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
    newInfo.annSal = Number(newInfo.annSal);
    console.log(newInfo.annSal);
    console.log('new info is now', newInfo);
    employeeInfo.push(newInfo);
    console.log(employeeInfo);
let totalSalary = 0;
let totalMonthly = 0;
        for (let i = 0; i < employeeInfo.length; i++){
            totalSalary = totalSalary += employeeInfo[i].annSal;
            totalSalary = Math.floor(totalSalary);
            totalMonthly = totalSalary / 12;
            totalMonthly = Math.floor(totalMonthly);
        }; 
        $('.totalMonthly').text(`Total Monthly: ${totalMonthly}`);    
        $('#firstName, #lastName, #idNumber, #jobTitle, #annualSalary').val('')
    render();
}

function deleteBtn(){
    console.log('in deleteBtn');
    $(this).parent().parent().remove();
    for (let d = 0; d < employeeInfo.length; i++){
        $(this).
    }
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
            <td>
            <button class = "deleteBtn">Delete</button>
            </td
        </tr>`)
    }
}
