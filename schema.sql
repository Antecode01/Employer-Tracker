
DROP DATABASE IF EXISTS employees_db;
CREATE database employees_db;

USE employees_db;

CREATE TABLE department(
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(40),
PRIMARY KEY (id)
);


CREATE TABLE role (
id INT NOT NULL,
title VARCHAR(40),
salary DECIMAL(30),
department_id INT,
PRIMARY KEY(id),
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
id INT NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT NULL,
PRIMARY KEY(id),
FOREIGN KEY (role_id) REFERENCES role(id),
);

SELECT * FROM role, employee, department; 