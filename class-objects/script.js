import {Employee} from './library.js';

 
function addEmployee() {
  // target input name age salary department(index.html file) Get input field values
  const name = document.getElementById('name-Input').value;
  const age = parseInt(document.getElementById('age-Input').value);
  const salary = parseInt(document.getElementById('salary-Input').value);
  const department = document.getElementById('department-Input').value;
  
  // Create new employee class of object (using new keyword)
  const employee = new Employee(name, age, salary, department);
  
  // Display employee details get output when we clicked on button
  const employeeDetails = document.getElementById('employee-Details');
  employeeDetails.innerHTML = `Employee Name: ${employee.name}<br> Employee Age: ${employee.age}<br> Employee Salary: ${employee.salary}<br> Employee Department: ${employee.department}`;
  document.body.appendChild(employeeDetails).style.margin = "20px"
  
  // input.value = ""; => input blank
  document.getElementById('name-Input').value = '';
  document.getElementById('age-Input').value = '';
  document.getElementById('salary-Input').value = '';
  document.getElementById('department-Input').value = '';
}

// target id and added event listener to the button
const Button = document.getElementById('addEmployeeButton');
Button.addEventListener('click', addEmployee);

