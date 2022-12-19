let basic_salary = +prompt('Enter basic salary');

if (basic_salary <= 10000) {
    let gross_salary = basic_salary + (basic_salary * 0.2 * 0.8);
    alert(gross_salary); 
} else if (basic_salary <= 20000) {
    let gross_salary = basic_salary + (basic_salary * 0.25 * 0.9);
    alert(gross_salary); 
} else if (basic_salary > 20000) {
    let gross_salary = basic_salary + (basic_salary * 0.30 * 0.95);
    alert(gross_salary); 
}