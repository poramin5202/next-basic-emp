import axios from "axios";

const EMP_BASE_REST_API_URL ='http://localhost:8080/api/v1/emp';

class Emp{

    getAllEmp(){
        return axios.get(EMP_BASE_REST_API_URL)
    }

    createEmp(emp){
        return axios.post(EMP_BASE_REST_API_URL,emp)
    }

    getEmpById(empId){
        return axios.get(EMP_BASE_REST_API_URL + '/' + empId)
    }

    updateEmp(empId,emp){
        return axios.put(EMP_BASE_REST_API_URL +'/'+empId, emp)
    }

    deleteEmp(emp){
        return axios.delete(EMP_BASE_REST_API_URL  + '/'+ emp)
    }
}
export default new Emp();