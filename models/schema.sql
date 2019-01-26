DROP DATABASE IF EXISTS Piggy_BusinessDB;

CREATE DATABASE Piggy_BusinessDB;

USE Piggy_BusinessDB;

Create TABLE job {
 id INT PK
 name VARCHAR
 description VARCHAR
 adult_user_id INT
 child_id INT
 earning_amount DECIMAL
 status VARCHAR
 piggy_bank_id INT
}

Create TABLE piggy_bank {
 id INT PK
 earnings DECIMAL
 description VARCHAR
 child_id INT
}

Create TABLE adult_user {
 id INT PK
 name VARCHAR
 password VARCHAR
}

Create TABLE child {
 id INT PK
 name VARCHAR
 adult_user_id INT
}

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