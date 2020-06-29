USE employees_db;

INSERT INTO department
     (name)

VALUES 
    ("Accountant"),
    ("Sales associate"),
    ("Warehouse"),
    ("Legal");
INSERT INTO roles
    (title,salary,department_id)    
VALUES
    ("Lead accountant", 150000,1),
    ("Junior accountant",100000,1),
    ("lead salesperson",200000,2),    
    ("Intern",50000,2),
    ("lead warehouse associate",75000,3),
    ("warehouse associate",50000,3),
    ("Lead legal team",150000,4),
    ("lawyer",100000,4);

INSERT INTO employee
    (first_name,last_name,roles_id,manager_id)

VALUES
    ("Abebe","Lemma",1,NULL),
    ("Kebede","Babyot",2,1),
    ("Betty","Alemayehu",2,NULL),
    ("Enatu","Alemu",4,1),
    ("Girum", "Meskel",3,1),
    ("kalkidan","Adane",5,4),
    ("Sarem","Samuel",2,1),
    ("Kiya","Agucho",4,3);





