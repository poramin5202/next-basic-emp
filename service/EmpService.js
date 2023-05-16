import axios from "axios";

const EMP_BASE_REST_API_URL ='http://localhost:8080/api/v1/emp';

class Emp{

    getAllEmp(){
        return axios.get(EMP_BASE_REST_API_URL)
    }
}
export default new Emp();