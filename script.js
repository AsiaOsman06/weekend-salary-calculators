let monthlyPayment = 0;
function addEmployee(event) {
  event.preventDefault();

  let firstNameText = document.getElementById("firstNameText").value;
  let lastNameInput = document.getElementById("lastNameText").value;
  let idInput = document.getElementById("idText").value;
  let titleInput = document.getElementById("titleText").value;
  let AnnualSalaryInput = document.getElementById("annualSalaryText").value;
  let employeesData = document.getElementById("employeesDetails");
  let monthlyPay = (Number(AnnualSalaryInput) / 12);
  employeesData.innerHTML += `

            <tr>
             <td id="employeesDetails">${firstNameText}</td>
             <td id="employeesDetails">${lastNameInput}</td>
             <td id="employeesDetails">${idInput}</td>
             <td id="employeesDetails">${titleInput}</td>
             <td id="employeesDetails">${AnnualSalaryInput}</td>
             <td ><button onclick="toDelete(event)">␡</button></td>
            </tr>
  `;
  //set back to an empty string
  document.getElementById("firstNameText").value = "";
  document.getElementById("lastNameText").value = "";
  document.getElementById("idText").value = "";
  document.getElementById("titleText").value = "";
  document.getElementById("annualSalaryText").value = "";
}

function toDelete(event) {
  let parent = event.target.parentElement.parentElement;
  parent.remove();
  console.log("test", parent);
}

function UpdateMonthlyPayment(monthlyPayment) {
  let updatedMonth = document.getElementById('totalMonthlyCost');
  let footeeer = document.getElementById('footer')

monthlyPayment += monthlyPayment;
updatedMonth.textContent += `$${monthlyPayment.toFixed(2)}`;
}
