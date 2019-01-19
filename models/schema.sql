DROP DATABASE IF EXISTS jobs_piggieDB;

CREATE DATABASE jobs_piggieDB;

USE jobs_piggieDB;

CREATE TABLE job_name (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(65) NOT NULL,
  description VARCHAR(255) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE piggy_bank (
  id INT NOT NULL AUTO_INCREMENT,
  earnings DECIMAL(10,2) NOT NULL,
  description VARCHAR(255) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE child_user (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(20) NOT NULL,
  user_password VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE adult_user (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(20) NOT NULL,
  user_password VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);