const form = document.getElementById('employee-form');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const employeeList = document.getElementById('employee-list');
const employeesMessage = document.getElementById('employees-message');
let employees = [];

form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const profession = document.getElementById('profession').value;
        const age = document.getElementById('age').value;

        if (name && profession && age) {
                const id = employees.length + 1;
                const employee = { id, name, profession, age };
                employees.push(employee);
                displayEmployees();
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';
                form.reset();
        } else {
                successMessage.style.display = 'none';
                errorMessage.style.display = 'block';
        }
});

function displayEmployees() {
        employeeList.innerHTML = '<h3>Added Employees</h3>';
        if (employees.length === 0) {
                employeesMessage.style.display = 'block';
        } else {
                employeesMessage.style.display = 'none';
                employees.forEach(employee => {
                        const div = document.createElement('div');
                        div.classList.add('employee');
                        div.innerHTML = `
                            <p>${employee.id}</p>
                            <p><strong>Name:</strong> ${employee.name}</p>
                            <p><strong>Profession:</strong> ${employee.profession}</p>
                            <p><strong>Age:</strong> ${employee.age}</p>
                            <button onclick="deleteEmployee(${employee.id})">Delete User</button>
                        `;
                        employeeList.appendChild(div);
                });
        }
}

function deleteEmployee(id) {
        employees = employees.filter(employee => employee.id !== id);
        displayEmployees();
}