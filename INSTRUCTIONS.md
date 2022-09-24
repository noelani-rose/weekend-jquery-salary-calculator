# Weekend Challenge: jQuery Salary Calculator
Create an application that records employee salaries and adds salaries up to report monthly costs. 

## Topics Covered
- JavaScript
- jQuery - Selectors, append, and event handling

## Assignment

- create empty array of employeeInfo []
- create input form that collects []
    - employee first name []
    - employe last name []
    - ID number []
    - job title []
    - annual salary []
- create number variable (0 at first) to equal 'total monthly' []
- create onReady function which calls []
    - submit button function []
    - delete button funciton []
- create submit button on html []
- create 'total monthly : ' div on html []
- create submit-button function that []
    - collects info from form information []
    - add total employee salaries to variable 'total monthly' []
    - pushes form info to empty array (employeeInfo) []
    - takes total employee salaries divided by 12 (monthly costs) []
    - append monthly costs ('total monthly') to DOM []
    - clear the input fields []
        - create if statement that states []
            - if ('total monthly') exceeds $20,000 []
            - then add red background to ('total monthly') div []
- create delete button on html [] 
- create delete-button function that []
    - removes employee info when clicked []
    - #stretch: removes that employees salary from ('total monthly')[]
- create render function that [] 
    - empties the table (instead of in the submit button function??) []
    - loops through (employee of employeeInfo) then []
    - appends the table w/ new employee info from input form (instead of in the submit button function??) []
    


The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost. 

Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.

### Files Provided
No files have been provided (just instructions.md and a readme.md). Instead of forking and cloning this repo, please choose "Use This Template" (green button) and name your new repo "weekend-jquery-salary-calculator" and clone down from there. Make sure to commit regularily!

### Wireframe

![Wireframe](salary-calc-wireframe.png)

## Stretch Mode

Add styling or extra functionality that fits with the theme of this assignment.

Once the employee is deleted, update the _Total Monthly Cost_ section on the page to reflect the employee's removal. _HINT:_ You will need to figure out which employee was removed, in order to subtract their salary from the total. Consider using `.text()` as a getter, or look into jQuery's `.data()` function. This is tricky! 

## Reminder About Modes

Above, we introduced the concept of levels of difficulty. "Mode" is how we will typically refer to each level. Below is a brief explanation of

* what to expect when attempting each mode
* if they are required or not

Mode | Description
--- | ---
Base | required
Stretch | optional, stretches your understanding and may require additional research

## Assignment Submission
Check in your repo, then turn in your work via the Prime Academy Assignment Application at [http://primeacademy.io](http://primeacademy.io), as usual and don't hesitate to hit up the Slack channel as needed!
