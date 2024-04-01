let monthlyPayment = 0;
function addEmployee(event) {
  event.preventDefault();

  let firstNameText = document.getElementById("firstNameText").value;
  let lastNameInput = document.getElementById("lastNameText").value;
  let idInput = document.getElementById("idText").value;
  let titleInput = document.getElementById("titleText").value;
  let annualSalaryInput = document.getElementById("annualSalaryText").value;
  let employeesData = document.getElementById("employeesDetails");
  let monthlySalary = Number(annualSalaryInput /12);
  employeesData.innerHTML += `

            <tr>
             <td id="employeesDetails">${firstNameText}</td>
             <td id="employeesDetails">${lastNameInput}</td>
             <td id="employeesDetails">${idInput}</td>
             <td id="employeesDetails">${titleInput}</td>
             <td id="employeesDetails">${annualSalaryInput}</td>
             <td ><button onclick="toDelete(event)">␡</button></td>
            </tr>
  `;
  //set back to an empty string
  document.getElementById("firstNameText").value = "";
  document.getElementById("lastNameText").value = "";
  document.getElementById("idText").value = "";
  document.getElementById("titleText").value = "";
  document.getElementById("annualSalaryText").value = "";
  updateTotalMonthlyCost(monthlySalary);
}

function updateTotalMonthlyCost(monthlyPayment) {
  let updatedMonth = document.getElementById("totalMonthlyCost").value;
  let footer = document.getElementById("footer").value;
  monthlyPayment++;
  const currentTotal = parseFloat(updatedMonth.textContent);
  const newTotal = currentTotal + monthlySalary;
  updatedMonth.textContent = newTotal.toFixed(2);
  if (newTotal > 20000) {
    footer.classList.add("over-budget");
  } else {
    footer.classList.remove("over-budget");
  }
document.getElementById("footer").value='';
document.getElementById("totalMonthlyCost").value='';
}
function toDelete(event) {
  let parent = event.target.parentElement.parentElement;
  parent.remove();
}
