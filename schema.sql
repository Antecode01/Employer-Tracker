

DROP DATABASE IF EXISTS employees_db;


CREATE DATABASE employees_db;

USE employee_db;


CREATE TABLE department (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role(
 id INT NOT NULL AUTO_INCREMENT,
 title VARCHAR(30)
 salary INT
 department_id INT
 PRIMARY KEY(id)


)
CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT


)

INSERT INTO tasks (task) VALUES ('Pick up milk.');
INSERT INTO tasks (task) VALUES ('Mow the lawn.');
INSERT INTO tasks (task) VALUES ('Call Shannon back.');
