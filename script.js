// Global variable to store the current total annual salary:
let totalAnnualSalary = 0;

//This function performs all actions necessary when a user clicks the form's "Submit" button:
function addEmployee(event) {
  event.preventDefault();

  // Get the input values:
  let firstNameText = document.getElementById("firstNameText").value;
  let lastNameInput = document.getElementById("lastNameText").value;
  let idInput = document.getElementById("idText").value;
  let titleInput = document.getElementById("titleText").value;
  let annualSalaryInput = Number(
    document.getElementById("annualSalaryText").value
  );
  let newEmployeeRow = document.getElementById("employeesDetails");

  // Make the new employee row:
  newEmployeeRow.innerHTML += `

            <tr>
             <td id="employeesDetails">${firstNameText}</td>
             <td id="employeesDetails">${lastNameInput}</td>
             <td id="employeesDetails">${idInput}</td>
             <td id="employeesDetails">${titleInput}</td>
             <td id="employeesDetails">${formatAsUSD(annualSalaryInput)}</td>
             <td>
             <button onclick="toDelete(event)">␡</button>
             </td>
            </tr>
  `;
  // clear put the form inputs:
  document.getElementById("firstNameText").value = "";
  document.getElementById("lastNameText").value = "";
  document.getElementById("idText").value = "";
  document.getElementById("titleText").value = "";
  document.getElementById("annualSalaryText").value = "";

  // Update the current total annual Salary:
  totalAnnualSalary += Number(annualSalaryInput);

  // Calculate the Total Monthly Salary:
  totalMonthlySalary = totalAnnualSalary / 12;

  // Update the DOM to display the new total monthy salary:
  let updatedMonth = document.getElementById("totalMonthlySalary");
  updatedMonth.textContent = formatAsUSD(totalMonthlySalary);

  // Conditionally apply the 'over-budget' CSS class to the footer if total monthly salary is above 20,000:

  if (totalMonthlySalary > 20000) {
    let footer = document.getElementById("myFooter");
    footer.classList.add("over-budget");
  }
}

//This function performs all actions necessary when a user clicks an employee row's "Delete" button:
function toDelete(event) {
  // let parent = event.target.parentElement.parentElement;
  // Select the exact button that was clicked:
  let clickedButton = event.target;
  // Select the table row that the clicked button is inside of:
  let employeeRowToDelete = clickedButton.closest("tr");
  // Delete the table row from the DOM:
  employeeRowToDelete.remove();
}
// Takes in a number and returns a currencty-formatted string:
// Docs here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
// Usage examples:
  // formatAsUSD(50500.333333)
      // '$50,500.33'
  // formatAsUSD(22)
      // '$22.00'
function formatAsUSD(number) {
  return new Intl.NumberFormat(
    'en-EN',
    { style: 'currency', currency: 'USD' }
  ).format(number);
}