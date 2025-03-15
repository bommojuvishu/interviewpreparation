# SQL

- Finding Second Highest Salary

### Finding Second Highest Salary

SELECT name, MAX(salary) AS salary
FROM employee
WHERE salary <> (SELECT MAX(salary)
FROM employee);
