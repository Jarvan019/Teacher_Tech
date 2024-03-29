window.addEventListener('DOMContentLoaded', event => {

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});

document.getElementById("addProfessorForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("professorName").value;
    var course = document.getElementById("course").value;
    var age = document.getElementById("age").value;
    var startDate = document.getElementById("startDate").value;
    var salary = document.getElementById("salary").value;
  
    var tableBody = document.querySelector("#datatablesSimple tbody");
    var newRow = tableBody.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
  
    cell1.textContent = name;
    cell2.textContent = course;
    cell3.textContent = age;
    cell4.textContent = startDate;
    cell5.textContent = salary;
  
    var modal = new bootstrap.Modal(document.getElementById("addProfessorModal"));
    modal.hide();
  });