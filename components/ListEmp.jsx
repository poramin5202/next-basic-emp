import React, { useEffect, useState } from 'react'
import EmpService from '@/service/EmpService'
import Link from 'next/link'
import axios from 'axios'

// rafc
const ListEmp = () => {
    const [emp, setEmp] = useState([])

    useEffect(() => {
                getAllEmp();
    },[] )

          const getAllEmp = () =>{
            EmpService.getAllEmp().then((res) =>{
              setEmp(res.data)
              console.log(res.data)
          }).catch(error =>{
              console.log(error)
          })

      }
          
//fdfd
        const delEmp =(emp) =>{
            EmpService.deleteEmp(emp).then((res) => {
                getAllEmp();
            }).catch(e =>{
              console.log(e)
            }) 
        }

  return (
    <div className="container">
     <h2 className='text-center'> List Employees</h2>
     <Link href="/addEmp"> 
      <button className='btn btn-primary mb-2'>Add Emp</button>
      </Link>
    <table className='table table-bordered table-striped'>
    <thead>
      <tr>
                 <th>Emp Id</th>
                <th>Emp First Name</th>
                <th>Emp Last Name</th>
                <th>Emp Email</th>
                <th>Actions</th>
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
                            <td>
                              <Link href={`update/${emp.id}`}>
                                  <button className='btn btn-info'>Update</button>
                              </Link>
                              <button className='btn btn-danger m-lg-2' onClick={() => delEmp(emp.id)} >Delete</button>
                            </td>
                        </tr>
                    )
                }
    </tbody>
  </table>
  </div>
                  

                        
  )
}

export default ListEmp
