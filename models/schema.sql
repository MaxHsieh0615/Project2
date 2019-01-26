DROP DATABASE IF EXISTS Piggy_BusinessDB;

CREATE DATABASE Piggy_BusinessDB;

USE Piggy_BusinessDB;

Create TABLE tbl_job (
 id INT auto_increment
 name VARCHAR
 description VARCHAR
 adult_user_id INT
 child_id INT
 earning_amount DECIMAL
 status VARCHAR
 piggy_bank_id INT
)

Create TABLE tbl_piggy_bank (
 id INT auto_increment
 earnings DECIMAL
 description VARCHAR
 child_id INT
 primary key (id)
)

Create TABLE tbl_adult_user (
 id INT auto_increment
 name VARCHAR
 password VARCHAR
 primary key (id)
)

Create TABLE tbl_child (
 id INT auto_increment
 name VARCHAR
 adult_user_id INT
 primary key (id)
 piggy_bank_id INT
)

Ref:
adult_user.id > child.adult_user_id
Ref:
adult_user.id > job.adult_user_id
Ref:
child.id > job.child_id
Ref:
job.piggy_bank_id > piggy_bank.id
Ref:
piggy_bank.child_id > child.id
