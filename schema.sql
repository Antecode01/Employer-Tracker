

DROP DATABASE IF EXISTS employees_db;


CREATE DATABASE employees_db;

USE employee_db;


CREATE TABLE departments (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles(
 id INT NOT NULL AUTO_INCREMENT,
 title VARCHAR(30)
 salary INT
 department_id INT
 PRIMARY KEY(id)


)
CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT


)

INSERT INTO departments (name) VALUES ('enginering')
INSERT INTO roles (title,salary) VALUES ('manager,5000')
INSERT INTO employees (first_name,last_name) VALUES ('Anteneh,Negera')