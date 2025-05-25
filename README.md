=================================================================
			Java Project 
=================================================================

Project Title		:	Employee Management System 

Client			:	BridgeSoft 

Frontend Technologies	:	HTML5, CSS3, JavaScript, Bootstrap5 and ReactJS

Backend Technologies	:	Java8 and Spring Boot

Databases		:	MySQL

Tools			:	POSTMAN, MAVEN, GIT/GITHUB 
================================================================= 

Project Structure 
-----------------

frontend
|
|-----node_modules
|
|-----public 
|	|
	|---index.html 	
	|---manifest.json 
	|---favicon.ico
|
|-----src
|	|
	|---index.js 
	|---index.css
	|
	|---App.js 
	|---App.css
	|---App.test.js 

	|---components	
		|
		|---HeaderComponent.js 
		|---EmployeeListComponent.js 
		|---FooterComponent.js
|
|------package.json 
|------README.md

step1:
------
	Create a react project i.e frontend.
	ex:
		npx create-react-app  frontend

step2:
------
	Switch to the project.
	ex:
		cd  frontend 

step3:
------
	Install Bootstrap, react-router-dom and axios library.
	ex:
		npm install bootstrap 
		npm install react-router-dom 
		npm install axios 	

step4:
------
	Import the bootstrap inside index.js file.

	ex:
		import '../node_modules/bootstrap/dist/css/bootstrap.css';

step5:
------
	Run react project.
	ex:
		npm start 

step6:
------
	Create a "components" folder inside "src" folder.

step7:
------
	Create a HeaderComponent.js file inside "components" folder.

HeaderComponent.js 
------------------

function HeaderComponent()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a href="" className="navbar-brand" style={{fontWeight:"bold"}}> BridgeSoft</a>
            </div>    
        </nav>
    )
}
export default HeaderComponent;


step8:
------
	Create a EmployeeListComponent.js file inside "components" folder.

EmployeeListComponent.js 
--------------------------

import { useState } from "react";
function EmployeeListComponent()
{

    const [employees,setEmployees]=useState([]);
    
    return(
         <div className="container mt-5">
            <h4 className="text-center"> Employee Details </h4>
            <div className="row mt-5">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>DOJ</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee =>{
                                return <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.doj}</td>
                                            <td>{employee.dept.deptName}</td>
                                            <td>{employee.dept.designation}</td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
         </div>   
    )
}
export default EmployeeListComponent;

step9:
------
	Create a FooterComponent.js file inside "components" folder.

FooterComponent.js 
------------------
import '../App.css';
function FooterComponent()
{
    return(
        <footer className="footer">
            <small>All Right Reserved &copy; by Niyaz Sir,2025 </small>
        </footer>
    )
}
export default FooterComponent;


step10:
------
	Add CSS code for FooterComponent.js file inside "App.css" file.

App.css
--------
.footer
{
  position: absolute;
  bottom: 0;
  width: 100%;
  height:30px;
  background-color: #f1f2f6;
  font-weight: bold;
  text-align: center;
  line-height: 35px;
}

step11:
-------
	Call HeaderComponent.js file, EmployeeListComponent.js file and FooterComponent.js file 
	from App.js file.

App.js 
-------
import EmployeeListComponent from "./components/EmployeeListComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import './App.css';

function App()
{
  return (
      <div className="bg-color">
          <HeaderComponent/>
          <EmployeeListComponent/>
          <FooterComponent/>
      </div>
  )
}
export default App;

step12:
------
	Add CSS code to set the background inside "App.css" file.

App.css
--------

.footer
{
  position: absolute;
  bottom: 0;
  width: 100%;
  height:30px;
  background-color: #f1f2f6;
  font-weight: bold;
  text-align: center;
  line-height: 35px;
}
.bg-color
{
  height:100vh;
  background: linear-gradient(cyan,blue);
} 
step13:
-------
	Add rounting logic to App.js file.

App.js 
------
import EmployeeListComponent from "./components/EmployeeListComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App()
{
  return (
      <div className="bg-color">
          <HeaderComponent/>

          <BrowserRouter>
             <div className="container mt-5">
              <Routes>
                  <Route exact path="/" element={<EmployeeListComponent/>}></Route>
                  <Route exact path="/employees" element={<EmployeeListComponent/>}></Route>
              </Routes>
              </div> 
          </BrowserRouter>
          
          <FooterComponent/>
      </div>
  )
}
export default App;


step14:
------
	Test the application by using below request url.
	ex:
		http://localhost:3000/
		http://localhost:3000/employees


step15:
------
	Install react simple typewriter dependency.
	ex:
		npm install react-simple-typewriter 

step16:
-------
	Add typewriter effect logic inside EmployeeListComponent.js file.

EmployeeListComponent.js 
--------------------------

import { useState } from "react";
import { useTypewriter,Cursor} from 'react-simple-typewriter'

function EmployeeListComponent()
{
    const [text] = useTypewriter({
        words:["Details","Info","List"],
        loop:true,
        typeSpeed:120,
        deleteSpeed:80
    })

    const [employees,setEmployees]=useState([]);
    
    return(
         <div className="container mt-5">
            <h4 className="text-center"> Employee {text}<Cursor/> </h4>
            <div className="row mt-5">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>DOJ</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee =>{
                                return <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.doj}</td>
                                            <td>{employee.dept.deptName}</td>
                                            <td>{employee.dept.designation}</td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
         </div>   
    )
}
export default EmployeeListComponent;


Project structure 
=================
backend 
|
|---src/main/java
	|
	|---com.ihub.www
		|
		|---BackendApplication.java
	|
	|---com.ihub.www.model
		|
		|---Employee.java
		|---Department.java
	|
	|---com.ihub.www.repo
		|
		|---EmployeeRepository.java
		|---DepartmentRepository.java
	|
	|---com.ihub.www.exception 
		|
		|---ResourceNotFoundException.java
	|	
	|---com.ihub.www.service
		|
		|---EmployeeService.java
	|
	|---com.ihub.www.controller 
		|
		|---EmployeeController.java
|
|---src/main/resources
|	|
	|---application.properites

|---src/test/java
|
|---pom.xml
|

step17:
------
	Create a spring starter project i.e backend.
	ex:
		starters:
				Spring Web 
				Spring Data JPA
				lombok 
				MySQL driver
				spring boot DevTools 

step18:
--------
	Create a Employee model class inside "com.ihub.www.model" package.

Employee.java
--------------
package com.ihub.www.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="employees")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Transactional
public class Employee 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column
	private String name;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING,pattern="dd-MM-yyyy")
	private Date doj;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="deptId")
	private Department dept;
}

step19:
--------
	Create a Department model class inside "com.ihub.www.model" package.

Department.java
---------------
package com.ihub.www.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
@Transactional
public class Department {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long deptId;
	
	@Column
	private String deptName;
	
	@Column
	private String designation;

}
step20:
-------
	Create a EmployeeRepository inside "com.ihub.www.repo" package.

EmployeeRepository.java
----------------------
package com.ihub.www.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ihub.www.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>
{

}


step21:
------
	Create a DepartmentRepository inside "com.ihub.www.repo" package.

DepartmentRepository.java
-------------------------
package com.ihub.www.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ihub.www.model.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long>
{

}

step22:
------
	Create a ResourceNotFoundException.java file inside "com.ihub.www.exception" package.

ResourceNotFoundException.java
------------------------------
package com.ihub.www.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException
{
	private static final long serialVersionUID = 1L;

	public ResourceNotFoundException(String msg)
	{
		super(msg);
	}
}

step23:
------
	Create a employee_management_system schema in mysql database and use that schema.
	ex:
		create schema employee_management_system;
		use employee_management_system;

step24:
------
	Configure server port, database properties and hibernate properties inside application.properties file.

application.properties 
-----------------------
server.port= 9191

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/employee_management_system
spring.datasource.username=root
spring.datasource.password=root

spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.ddl-auto= update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format-sql=true

step25:
------
	Create a EmployeeService inside "com.ihub.www.service" package.

EmployeeService.java
---------------------
package com.ihub.www.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ihub.www.model.Employee;
import com.ihub.www.repo.EmployeeRepository;

@Service
public class EmployeeService 
{
	@Autowired
	EmployeeRepository employeeRepository;
	
	public Employee addEmployee(Employee employee)
	{
		return employeeRepository.save(employee);
	}
}

step26:
------
	Create a EmployeeController inside "com.ihub.www.controller" package.

EmployeeController.java
------------------------
package com.ihub.www.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ihub.www.model.Employee;
import com.ihub.www.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController 
{
	@Autowired
	EmployeeService employeeService;
	
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee employee)
	{
		return employeeService.addEmployee(employee);
	}
}

step27:
------
	Run spring boot starter project.

step28:
------
	Test the application by using below request url.
	ex:
		HTTP method 			URL 
		-----------			--------
		POST				http://localhost:9191/api/v1/employees
						Body 
							Raw (JSON)
						{
    							"name":"Alan Morries",
    							"doj":"14-05-2025",
   	 						"dept":{
        							"deptName":"IT",
        							"designation":"Developer"
    								}
						}

step29:
-------
	Create "Add Employee" button inside "EmployeeListComponent.js" file.

EmployeeListComponent.js 
------------------------

import { useState } from "react";
import { useTypewriter,Cursor} from 'react-simple-typewriter'
import {Link} from 'react-router-dom';

function EmployeeListComponent()
{
    const [text] = useTypewriter({
        words:["Details","Info","List"],
        loop:true,
        typeSpeed:120,
        deleteSpeed:80
    })

    const [employees,setEmployees]=useState([]);
    
    return(
         <div className="container mt-5">
            <h4 className="text-center"> Employee {text}<Cursor/> </h4>
            <div className="row mt-5">
        <Link to="/add-emp" className="btn btn-warning w-25 mb-2"> Add Employee </Link>            
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>DOJ</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee =>{
                                return <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.doj}</td>
                                            <td>{employee.dept.deptName}</td>
                                            <td>{employee.dept.designation}</td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
         </div>   
    )
}
export default EmployeeListComponent;

step30:
------
	Create a CreateEmployeeComponent.js file inside "components" folder.

CreateEmployeeComponent.js
---------------------------
function CreateEmployeeComponent()
{
    return (
        <h1> Create Employee Component </h1>
    )
}
export default CreateEmployeeComponent;

step31:
-------
	Add routing to CreateEmployeeComponent.js file inside routing file.

App.js 
-------
import EmployeeListComponent from "./components/EmployeeListComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App()
{
  return (
      <div className="bg-color">
          <HeaderComponent/>

          <BrowserRouter>
             <div className="container mt-5">
              <Routes>
                  <Route exact path="/" element={<EmployeeListComponent/>}></Route>
                  <Route path="/employees" element={<EmployeeListComponent/>}></Route>
                  <Route path="/add-emp" element={<CreateEmployeeComponent/>}></Route>
              </Routes>
              </div> 
          </BrowserRouter>
          
          <FooterComponent/>
      </div>
  )
}
export default App;

step32:
-----
	Create a services folder inside "src" folder.

step33:
------
	Create a EmployeeService.js file inside "services" folder.

EmployeeService.js 
------------------

import axios from 'axios';
const EMPLOYEE_API="http://localhost:9191/api/v1/employees";

class EmployeeService
{
    addEmployee(employee)
    {
        return axios.post(EMPLOYEE_API,employee);
    }
}
export default new EmployeeService();
step34:
------
	Create a form inside CreateEmployeeComponent.js file.

CreateEmployeeComponent.js
--------------------------
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import EmployeeService from "../services/EmployeeService";

function CreateEmployeeComponent()
{
    const navigate = useNavigate();

    const [employees,setEmployees]= useState({
        name:"",
        doj:"",
        dept:{
            deptName:"",
            designation:""
        }
    })

    const [errors,setErrors]=useState({
        name:"",
        doj:"",
        deptName:"",
        designation:""
    })

    const handleChange=(e)=>{
        
        const {name,value}= e.target;

        if(name=="name" || name=="doj")
        {
            setEmployees({...employees,[name]:value})
        }
        else
        {
            setEmployees({...employees,dept:{... employees.dept,[name]:value}});
        }

        setErrors({...errors,[name]:""})
    }

    const handleCancel=(e)=>{
        e.preventDefault();
        navigate("/employees");
    }

    const validate=()=>{
        const tempErrors ={};
        let isValid=true;

        if(!employees.name)
        {
            tempErrors.name="Name is mandatory";
            isValid=false;
        }
         if(!employees.doj)
        {
            tempErrors.doj="Date is mandatory";
            isValid=false;
        }
         if(!employees.dept.deptName)
        {
            tempErrors.deptName="Department is mandatory";
            isValid=false;
        }
         if(!employees.dept.designation)
        {
            tempErrors.designation="Designation is mandatory";
            isValid=false;
        }

        setErrors(tempErrors);
        return isValid;
    }

    const dateFormat=(date)=>{
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2,"0");
        const month = String(d.getMonth()+1).padStart(2,"0");
        const year = d.getFullYear();
        return `${day}-${month}-${year}`;
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(validate())
        {
            const formattedDate = dateFormat(employees.doj);
            const employeeData={
                ...employees,doj:formattedDate
            }

            EmployeeService.addEmployee(employeeData).then(res=>{
                navigate("/employees");
            })
        }
    }



    return (
        <div className="card col-md-6 offset-3">
            <h5 className="text-center">Add Employee</h5>
            <div className="card-body">
                <form>
                    <label>Name:</label>
                    <input type="text" name="name" id="name" className="form-control" autoComplete="off"
                    value={employees.name}
                    onChange={handleChange}/>
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                     
                    <br/>    
                    <label>DOJ:</label>
                    <input type="date" name="doj" id="doj" className="form-control" 
                    value={employees.doj}
                    onChange={handleChange}/>
                    {errors.doj && <small className="text-danger">{errors.doj}</small>}

                     <br/>
                    <label>Department:</label>
                    <input type="text" name="deptName" id="deptName" className="form-control" autoComplete="off"
                    value={employees.dept.deptName}
                    onChange={handleChange}/>
                    {errors.deptName && <small className="text-danger">{errors.deptName}</small>}

                     <br/>
                    <label>Designation:</label>
                    <input type="text" name="designation" id="designation" className="form-control" autoComplete="off"
                    value={employees.dept.designation}
                    onChange={handleChange}/>
                    {errors.designation && <small className="text-danger">{errors.designation}</small>}
                    
                    <br/>
                    <button className="btn btn-danger mt-3" onClick={handleCancel}> cancel </button>
                    <button className="btn btn-success mt-3 ms-3" onClick={handleSubmit}> submit </button>
                </form>
            </div>
        </div>
    )
}
export default CreateEmployeeComponent;

step35:
--------
	Create a GET mapping logic inside EmployeeService.java file.

EmployeeService.java
---------------------
package com.ihub.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ihub.www.model.Employee;
import com.ihub.www.repo.EmployeeRepository;

@Service
public class EmployeeService 
{
	@Autowired
	EmployeeRepository employeeRepository;
	
	public Employee addEmployee(Employee employee)
	{
		return employeeRepository.save(employee);
	}
	
	public List<Employee> getAllEmployees()
	{
		return employeeRepository.findAll();
	}
}



step36:
-------
	Invoke service GET Mapping method from EmployeeController.java file.

EmployeeController.java
--------------------------
package com.ihub.www.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ihub.www.model.Employee;
import com.ihub.www.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController 
{
	@Autowired
	EmployeeService employeeService;
	
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee employee)
	{
		return employeeService.addEmployee(employee);
	}
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees()
	{
		return employeeService.getAllEmployees();
	}
}

step37:
------
	Declare GET method inside EmployeeService.js file.

EmployeeService.js
-----------------

import axios from 'axios';
const EMPLOYEE_API="http://localhost:9191/api/v1/employees";

class EmployeeService
{
    addEmployee(employee)
    {
        return axios.post(EMPLOYEE_API,employee);
    }

    getAllEmployees()
    {
        return axios.get(EMPLOYEE_API);
    }
}
export default new EmployeeService();


step38:
------

	Declare useEffect() hook inside EmployeeListComponent.js file and call the GET API.

EmployeeListComponent.js 
-------------------------

import { useState, useEffect } from "react";
import { useTypewriter,Cursor} from 'react-simple-typewriter'
import {Link} from 'react-router-dom';
import EmployeeService from "../services/EmployeeService";

function EmployeeListComponent()
{
    
    const [employees,setEmployees]=useState([]);

    const [text] = useTypewriter({
        words:["Details","Info","List"],
        loop:true,
        typeSpeed:120,
        deleteSpeed:80
    })


    useEffect((e)=>{
        EmployeeService.getAllEmployees().then(res=>{
            setEmployees(res.data);
        })
    },[])
    
    return(
         <div className="container mt-5">
            <h4 className="text-center"> Employee {text}<Cursor/> </h4>
            <div className="row mt-5">
        <Link to="/add-emp" className="btn btn-warning w-25 mb-2"> Add Employee </Link>            
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>DOJ</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee =>{
                                return <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.doj}</td>
                                            <td>{employee.dept.deptName}</td>
                                            <td>{employee.dept.designation}</td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
         </div>   
    )
}
export default EmployeeListComponent;
step39:
------
	Create update button inside "EmployeeListComponent.js" file.

EmployeeListComponent.js 
-------------------------

import { useState, useEffect } from "react";
import { useTypewriter,Cursor} from 'react-simple-typewriter'
import {Link} from 'react-router-dom';
import EmployeeService from "../services/EmployeeService";

function EmployeeListComponent()
{
    
    const [employees,setEmployees]=useState([]);

    const [text] = useTypewriter({
        words:["Details","Info","List"],
        loop:true,
        typeSpeed:120,
        deleteSpeed:80
    })


    useEffect((e)=>{
        EmployeeService.getAllEmployees().then(res=>{
            setEmployees(res.data);
        })
    },[])
    
    return(
         <div className="container mt-5">
            <h4 className="text-center"> Employee {text}<Cursor/> </h4>
            <div className="row mt-5">
        <Link to="/add-emp" className="btn btn-warning w-25 mb-2"> Add Employee </Link>            
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>DOJ</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee =>{
                                return <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.doj}</td>
                                            <td>{employee.dept.deptName}</td>
                                            <td>{employee.dept.designation}</td>
                                            <td>
    <Link to={`/update-emp/${employee.id}`} className="btn btn-secondary"> update </Link>                                        
                                            </td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
         </div>   
    )
}
export default EmployeeListComponent;

step40:
------
	Create a  UpdateEmployeeComponent.js file inside "components" folder.

UpdateEmployeeComponent.js 
---------------------------
function UpdateEmployeeComponent()
{
    return (
        <h1> Update Employee Component </h1>
    )
}
export default UpdateEmployeeComponent;

step41:
------
	Add the routing to UpdateEmployeeComponent inside routing file.

App.js 
-------
import EmployeeListComponent from "./components/EmployeeListComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App()
{
  return (
      <div className="bg-color">
          <HeaderComponent/>

          <BrowserRouter>
             <div className="container mt-5">
              <Routes>
                  <Route exact path="/" element={<EmployeeListComponent/>}></Route>
                  <Route path="/employees" element={<EmployeeListComponent/>}></Route>
                  <Route path="/add-emp" element={<CreateEmployeeComponent/>}></Route>
                  <Route path="/update-emp/:id" element={<UpdateEmployeeComponent/>}></Route>
              </Routes>
              </div> 
          </BrowserRouter>
          
          <FooterComponent/>
      </div>
  )
}
export default App;

step42:
-------
	Add get mapping logic inside EmployeeService.java file.

EmployeeService.java
--------------------
package com.ihub.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ihub.www.exception.ResourceNotFoundException;
import com.ihub.www.model.Employee;
import com.ihub.www.repo.EmployeeRepository;

@Service
public class EmployeeService 
{
	@Autowired
	EmployeeRepository employeeRepository;
	
	public Employee addEmployee(Employee employee)
	{
		return employeeRepository.save(employee);
	}
	
	public List<Employee> getAllEmployees()
	{
		return employeeRepository.findAll();
	}
	
	public Employee getEmployeeById(long id)
	{
		return employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id Not Found"));
	}
}

step43:
------
	Call the get mapping method of EmployeeService.java file from EmployeeController.java.

EmployeeController.java
-----------------------
package com.ihub.www.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ihub.www.model.Employee;
import com.ihub.www.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController 
{
	@Autowired
	EmployeeService employeeService;
	
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee employee)
	{
		return employeeService.addEmployee(employee);
	}
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees()
	{
		return employeeService.getAllEmployees();
	}
	
	@GetMapping("/employees/{id}")
	public Employee getEmployeeById(@PathVariable long id)
	{
		return employeeService.getEmployeeById(id);
	}
}

step44:
-----
	Create a put mapping logic inside EmployeeService.java file.

EmployeeService.java
--------------------
package com.ihub.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ihub.www.exception.ResourceNotFoundException;
import com.ihub.www.model.Employee;
import com.ihub.www.repo.EmployeeRepository;

@Service
public class EmployeeService 
{
	@Autowired
	EmployeeRepository employeeRepository;
	
	public Employee addEmployee(Employee employee)
	{
		return employeeRepository.save(employee);
	}
	
	public List<Employee> getAllEmployees()
	{
		return employeeRepository.findAll();
	}
	
	public Employee getEmployeeById(long id)
	{
		return employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id Not Found"));
	}
	
	public ResponseEntity<Employee> updateEmployee(long id,Employee employee)
	{
		if(employeeRepository.existsById(id))
		{
			Employee existingEmp = employeeRepository.findById(id).get();
			existingEmp.setName(employee.getName());
			existingEmp.setDoj(employee.getDoj());
			existingEmp.setDept(employee.getDept());
			
			employeeRepository.save(existingEmp);
			
			return new ResponseEntity<>(existingEmp,HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}

step45:
------
	Call update mapping method of EmployeeService.java file from EmployeeController.java.

EmployeeController.java
-----------------------
package com.ihub.www.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ihub.www.model.Employee;
import com.ihub.www.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController 
{
	@Autowired
	EmployeeService employeeService;
	
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee employee)
	{
		return employeeService.addEmployee(employee);
	}
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees()
	{
		return employeeService.getAllEmployees();
	}
	
	@GetMapping("/employees/{id}")
	public Employee getEmployeeById(@PathVariable long id)
	{
		return employeeService.getEmployeeById(id);
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employee)
	{
		return employeeService.updateEmployee(id, employee);
	}
}

step46:
-------
	Add GET and PUT methods inside EmployeeService.js file.

EmployeeService.js 
----------------

import axios from 'axios';
const EMPLOYEE_API="http://localhost:9191/api/v1/employees";

class EmployeeService
{
    addEmployee(employee)
    {
        return axios.post(EMPLOYEE_API,employee);
    }

    getAllEmployees()
    {
        return axios.get(EMPLOYEE_API);
    }

    getEmployeeById(employeeId)
    {
        return axios.get(EMPLOYEE_API+'/'+employeeId);
    }

    updateEmployee(employeeId,employee)
    {
        return axios.put(EMPLOYEE_API+'/'+employeeId,employee);
    }
}
export default new EmployeeService();

step47:
-------
	Create a form for UpdateEmployeeComponent.js file.

UpdateEmployeeComponent.js 
--------------------------
import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function UpdateEmployeeComponent()
{
    let navigate = useNavigate();

    const [name,setName]=useState("");
    const [doj,setDoj]=useState("");
    const [department,setDepartment]=useState({deptName:"",designation:""})
    const {id}=useParams();

    const handleCancel=(e)=>{
        e.preventDefault();
        navigate("/employees");
    }

    useEffect((e)=>{
        
        EmployeeService.getEmployeeById(id).then(res=>{
            setName(res.data.name);
            setDoj(res.data.doj);
            setDepartment({
                deptName: res.data.dept.deptName,
                designation:res.data.dept.designation
            })
        })
        
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault();

        const updatedEmployee={
            name,
            doj,
            dept:{
                deptName:department.deptName,
                designation:department.designation
            }
        }

        EmployeeService.updateEmployee(id,updatedEmployee).then(res=>{
            navigate("/employees");
        })
    }


    return (
        <div className="card col-md-6 offset-3">
            <h5 className="text-center pt-3">Update Employee</h5>
            <div className="card-body">
                <form>
                    <label className="my-2">Name:</label>
                    <input type="text" name="name" id="name" className="form-control" autoComplete="off"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}/>

                    <label className="my-2">DOJ:</label>
                    <input type="text" name="doj" id="doj" className="form-control" autoComplete="off"
                    value={doj}
                    onChange={(e)=>setDoj(e.target.value)}/>

                    <label className="my-2">Department:</label>
                    <input type="text" name="deptName" id="deptName" className="form-control" autoComplete="off"
                    value={department.deptName}
                    onChange={(e)=>setDepartment({...department,deptName:e.target.value})}/>

                    <label className="my-2">Designation:</label>
                    <input type="text" name="designation" id="designation" className="form-control" autoComplete="off"
                    value={department.designation}
                    onChange={(e)=>setDepartment({...department,designation:e.target.value})}/>
                    
                    <button className="btn btn-danger mt-3" onClick={handleCancel}> cancel</button>
                    <button className="btn btn-success mt-3 float-end" onClick={handleSubmit}> submit </button>
                </form>
            </div>
        </div>
    )
}
export default UpdateEmployeeComponent;
step48:
-------
	Add delete Mapping logic inside EmployeeService.java file.

EmployeeService.java
--------------------
package com.ihub.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ihub.www.exception.ResourceNotFoundException;
import com.ihub.www.model.Employee;
import com.ihub.www.repo.EmployeeRepository;

@Service
public class EmployeeService 
{
	@Autowired
	EmployeeRepository employeeRepository;
	
	public Employee addEmployee(Employee employee)
	{
		return employeeRepository.save(employee);
	}
	
	public List<Employee> getAllEmployees()
	{
		return employeeRepository.findAll();
	}
	
	public Employee getEmployeeById(long id)
	{
		return employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id Not Found"));
	}
	
	public ResponseEntity<Employee> updateEmployee(long id,Employee employee)
	{
		if(employeeRepository.existsById(id))
		{
			Employee existingEmp = employeeRepository.findById(id).get();
			existingEmp.setName(employee.getName());
			existingEmp.setDoj(employee.getDoj());
			existingEmp.setDept(employee.getDept());
			
			employeeRepository.save(existingEmp);
			
			return new ResponseEntity<>(existingEmp,HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	public ResponseEntity<HttpStatus> deleteEmployee(long id)
	{
		Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id Not Found"));
		
		employeeRepository.delete(employee);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}

step49:
------
	Add delete mapping request inside EmployeeController.java file.

EmployeeController.java
------------------------
package com.ihub.www.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ihub.www.model.Employee;
import com.ihub.www.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController 
{
	@Autowired
	EmployeeService employeeService;
	
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee employee)
	{
		return employeeService.addEmployee(employee);
	}
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees()
	{
		return employeeService.getAllEmployees();
	}
	
	@GetMapping("/employees/{id}")
	public Employee getEmployeeById(@PathVariable long id)
	{
		return employeeService.getEmployeeById(id);
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employee)
	{
		return employeeService.updateEmployee(id, employee);
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id)
	{
		return employeeService.deleteEmployee(id);
	}
}

step50:
------
	Add delete method inside EmployeeService.js file.

EmployeeService.js 
-------------------

import axios from 'axios';
const EMPLOYEE_API="http://localhost:9191/api/v1/employees";

class EmployeeService
{
    addEmployee(employee)
    {
        return axios.post(EMPLOYEE_API,employee);
    }

    getAllEmployees()
    {
        return axios.get(EMPLOYEE_API);
    }

    getEmployeeById(employeeId)
    {
        return axios.get(EMPLOYEE_API+'/'+employeeId);
    }

    updateEmployee(employeeId,employee)
    {
        return axios.put(EMPLOYEE_API+'/'+employeeId,employee);
    }
    
    deleteEmployee(employeeId)
    {
        return axios.delete(EMPLOYEE_API+'/'+employeeId);
    }
}
export default new EmployeeService();

step51:
-------
	Add delete button with logic inside EmployeeListComponent.js file.

EmployeeListComponent.js 
-------------------------

import { useState, useEffect } from "react";
import { useTypewriter,Cursor} from 'react-simple-typewriter'
import {Link} from 'react-router-dom';
import EmployeeService from "../services/EmployeeService";

function EmployeeListComponent()
{
    
    const [employees,setEmployees]=useState([]);

    const [text] = useTypewriter({
        words:["Details","Info","List"],
        loop:true,
        typeSpeed:120,
        deleteSpeed:80
    })


    useEffect((e)=>{
        EmployeeService.getAllEmployees().then(res=>{
            setEmployees(res.data);
        })
    },[])


    const deleteEmployee=(id)=>{
        EmployeeService.deleteEmployee(id).then(res=>{
            EmployeeService.getAllEmployees().then(res=>{
                setEmployees(res.data)
            }).catch(error=>{
                console.log(error);
            })
        })
    }
    
    return(
         <div className="container mt-5">
            <h4 className="text-center"> Employee {text}<Cursor/> </h4>
            <div className="row mt-5">
        <Link to="/add-emp" className="btn btn-warning w-25 mb-2"> Add Employee </Link>            
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>DOJ</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee =>{
                                return <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.doj}</td>
                                            <td>{employee.dept.deptName}</td>
                                            <td>{employee.dept.designation}</td>
                                            <td>
    <Link to={`/update-emp/${employee.id}`} className="btn btn-secondary"> update </Link>  
    <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={()=> deleteEmployee(employee.id)}> delete </button>                                      
                                            </td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
         </div>   
    )
}
export default EmployeeListComponent;

step52:
-----
	Add view button inside EmployeeListComponent.js file.


EmployeeListComponent.js 
------------------------
import {useEffect, useState} from 'react';
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import {Link, useNavigate} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import EmployeeModal from './EmployeeModal';

function EmployeeListComponent()
{
    let navigate = useNavigate();

    const [employees,setEmployees]=useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null); 

    const [text] = useTypewriter({
        words: ['Details','List','Info'],
        loop: true,
        typeSpeed: 120,
        deleteSpeed:80
    })

    useEffect(()=>{
        EmployeeService.getEmployees().then(res=>{
            setEmployees(res.data); 
        })
    },[])

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then(() => {
            EmployeeService.getEmployees().then(res => {
                setEmployees(res.data);
            });
        }).catch(error => {
            console.log(error);
        });
    };  

    const viewEmployee = (employeeId) => {
        const employee = employees.find(emp => emp.id === employeeId);
        if (employee) {
            setSelectedEmployee(employee); // Set the selected employee to show in modal
        } else {
            alert('Employee not found');
        }
    }

    const closeModal = () => {
        setSelectedEmployee(null); // Close modal by resetting selected employee
    };



    return(
        <div className='container mt-3'>
            <h4 className='text-center'>Employee {text} <Cursor/></h4>
            <div className='row mt-3'>
    <Link to="/add-emp" className='btn btn-warning w-25 my-3'> Add Employee </Link>   
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>DOJ</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map(employee => {
                            return <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.doj}</td>
                                        <td>{employee.dept.deptName}</td>
                                        <td>{employee.dept.designation}</td>
                                        <td>

    <Link to={`/update-emp/${employee.id}`} className='btn btn-info'> update </Link>

    <button className='btn btn-danger' style={{marginLeft:"10px"}}
    onClick={()=> deleteEmployee(employee.id)}> delete </button>   

     <button className='btn btn-success' style={{marginLeft:"10px"}}
    onClick={() => viewEmployee(employee.id)}> view </button>                                     
                                        </td>
                                    </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>

            <EmployeeModal 
                employee={selectedEmployee} 
                closeModal={closeModal} 
            />

        </div>
    )
}
export default EmployeeListComponent;


Step53:
------
	Create EmployeeModal inside "components" folder.

EmployeeModal.js
-----------------
import React from 'react';
import './EmployeeModal.css'; // Import CSS for modal styling

const EmployeeModal = ({ employee, closeModal }) => {
    if (!employee) return null;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h4 className="modal-title text-center">Details</h4>
                <p><strong>ID:</strong> {employee.id}</p>
                <p><strong>Name:</strong> {employee.name}</p>
                <p><strong>Date of Joining:</strong> {employee.doj}</p>
                <p><strong>Department:</strong> {employee.dept.deptName}</p>
                <p><strong>Designation:</strong> {employee.dept.designation}</p>
                <button className="btn btn-danger" onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default EmployeeModal;



step54:
------
	import EmployeeModal.css file inside EmpoyeeModal.js file.

EmployeeModal.css
----------------
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal-title {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.modal-content p {
    margin: 5px 0;
}

.modal-content button {
    margin-top: 10px;
    width: 100%;
    background-color: red;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
}
