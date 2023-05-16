import React, { useEffect, useState } from 'react'
import EmpService from '../service/EmpService'

// rafc
const ListEmp = () => {
    const [emp, setEmp] = useState([])

    useEffect(() => {

            EmpService.getAllEmp().then((res) =>{
                setEmp(res.data)
                console.log(res.data)
            }).catch(error =>{
                console.log(error)
            })

        },[])

  return (
    <div className="container">
     <h2 className='text-center'> List Employees</h2>
    <table className='table table-bordered table-striped'>
    <thead>
      <tr>
                 <th>Emp Id</th>
                <th>Emp First Name</th>
                <th>Emp Last Name</th>
                <th>Emp Email</th>
      </tr>
    </thead>
    <tbody>
      {
                    emp.map(
                        emp =>
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                        </tr>
                    )
                }
    </tbody>
  </table>
  </div>
                  

                        
  )
}

export default ListEmp
