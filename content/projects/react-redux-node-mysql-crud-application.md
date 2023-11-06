---
layout: Post
title: Dashboard for Employees Database
description: React Hooks Application accessing API Endpoints to perform CRUD operations on a MySQL Database
date: '2023-01-22'
tags:
  - React
  - Redux
  - NodeJS
  - MySQL
  - Material UI
logo:
  src: /icons/nodejs-icon.svg
  alt: app
images:
  - src: /projects/project-1.png
    alt: Control Panel Dashboard
    overlay:
      src: /projects/project-1-mobile.png
      alt: Customers Dashboard
  - src: /projects/project-1-2.png
    alt: Inovice & Payments
  - src: /projects/project-1-3.png
    alt: Dark Mode
attributes:
  - label: Features
    value: MySQL relational database, CRUD operations, Search and Filters
  - label: Role
    value: Fulls stack and Production Deployment
  - label: Notes
    value: Multi-User access creds
  - label: Technology
    value: MERN Stack JWT, Sequelize, Redux, Material UI
---


### About this project

- Live version of the site here: [Employees Control Panel](https://emp-dash.nelles.io)
- [Source Code Back End](https://github.com/mdnelles/employees.neio.server)
- [Source Code Front End](https://github.com/mdnelles/employees_fe)


## Employee Salary Management Dashboard

Welcome to the Employee Salary Management Dashboard! This application is designed to help you manage employee information and their salaries using a MySQL relational database on the backend, powered by Node.js, while the frontend is built with React and utilizes Material UI for a clean and intuitive user interface. With this dashboard, you have full CRUD (Create, Read, Update, Delete) capabilities to effectively manage employee records and their associated salary information.

## Features

- **User-friendly Interface**: The frontend of the application is built using React, providing an intuitive and responsive user interface. Material UI components are utilized to ensure a modern and aesthetically pleasing design.

- **Employee Management**: The dashboard allows you to view, add, update, and delete employee records. You can easily navigate through the list of employees and perform necessary actions with just a few clicks.

- **Salary Tracking**: Each employee's salary information is stored in the MySQL relational database. You can add new salary entries, update existing ones, and keep track of historical salary data.

- **CRUD Operations**: The application provides full CRUD capabilities, allowing you to perform Create, Read, Update, and Delete operations on both employee records and salary entries.

- **Search and Filters**: Easily search for specific employees using search filters, making it convenient to locate and manage individual employee information.


---

### Tech Stack

 - [React](https://reactjs.org/)
 - [Google Cloud](https://cloud.google.com/)
 - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
 - [TypeScript](https://www.typescriptlang.org/)
 - [MySQL](https://www.mysql.com/)
 - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
 - [NodeJS](https://nodejs.org/en/)
 - [Redux](https://redux.js.org/)
 - [Material UI](https://material-ui.com/)




---

### Code-Block

  ```js  {21-36} showLineNumbers
 import express from "express";

//const express = require("express");
import compression from "compression";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
/* eslint-disable */
const env = require("dotenv").config().parsed;

import { verifyToken, verifyTokenAdmin } from "./components/RoutFuctions";

import * as users from "./routes/UserRoutes";
import * as employees from "./routes/EmployeeRoutes";
import * as department from "./routes/DepartmentRoutes";
import * as dept_manager from "./routes/DeptManagerRoutes";
import * as salary from "./routes/SalaryRoutes";
import * as title from "./routes/TitleRoutes";
import * as logs from "./routes/LogRoutes";
import * as basic from "./routes/Basic";

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
const jsonParser = bodyParser.json();
const port = env.NODE_PORT || 5020;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compression());
app.use(express.json());
app.use(jsonParser);
app.use(urlencodedParser);
app.use(helmet());

app.post("/users_register", users.register);
app.post("/users_edit", verifyTokenAdmin, users.register);
app.post("/users_delete", verifyTokenAdmin, users.del);
app.post("/users_list", verifyToken, users.list);
app.post("/users_login", users.login);

app.post("/emp_add", verifyTokenAdmin, employees.add);
app.post("/emp_edit", verifyTokenAdmin, employees.edit);
app.post("/emp_remove", verifyTokenAdmin, employees.remove);
app.post("/emp_list", verifyToken, employees.list);
app.post("/emp_details", verifyToken, employees.details);

app.post("/dept_search", verifyToken, department.search);
app.post("/dept_edit", verifyTokenAdmin, department.edit);
app.post("/dept_remove", verifyToken, department.remove_department);
app.post("/dept_get_emp_by", verifyToken, department.get_emp_by_depo);
app.post("/dept_details", verifyToken, department.get_details);
app.post("/dept_list", verifyToken, department.get_departments);

app.post("/depman_add", verifyTokenAdmin, dept_manager.add);
app.post("/depman_edit", verifyTokenAdmin, dept_manager.edit);
app.post("/depman_rm_man", verifyTokenAdmin, dept_manager.rem_manager);
app.post("/depman_list", verifyToken, dept_manager.list);
app.post("/depman_get_emp_v_man", verifyToken, dept_manager.get_emp_v_depo);
app.post("/depman_details", verifyToken, dept_manager.details);

app.post("/salary_list", verifyToken, salary.list);

app.post("/title_rem", verifyTokenAdmin, title.remove);
app.post("/title_list", verifyToken, title.list);
app.post("/title_details", verifyToken, title.details);

app.post("/logs_list", verifyToken, logs.list);
app.post("/logs_get_count", verifyToken, logs.get_count);

app.post("/basic_api", verifyToken, basic.api);
app.post("/schemas", verifyToken, basic.schemas);
app.post("/tables", verifyToken, basic.tables);

if (env.NODE_ENV === "production") {
   // set static folder
   app.use(express.static("client/build"));
}

app.listen(port, function() {
   console.log("Server is running on port: " + port);
});

export default app;
  ```