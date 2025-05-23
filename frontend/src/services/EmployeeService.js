import axios from 'axios';
const EMPLOYEE_API="http://localhost:9191/api/v1/employees";

class EmployeeService
{
    addEmployee(employee)
    {
        return axios.post(EMPLOYEE_API,employee)
            .catch(error => {
                console.error('Error adding employee:', error);
                throw error;
            });
    }

    getAllEmployees()
    {
        return axios.get(EMPLOYEE_API)
            .catch(error => {
                console.error('Error fetching employees:', error);
                throw error;
            });
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
        return axios.delete(`${EMPLOYEE_API}/${employeeId}`)
            .catch(error => {
                console.error('Error deleting employee:', error);
                throw error;
            });
    }
}
export default new EmployeeService();