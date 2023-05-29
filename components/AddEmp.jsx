import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import EmpService from '@/service/EmpService'
import { useRouter } from 'next/router'

const AddEmp = ({data}) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter();
  

  const saveOrUpdateEmp = (e) =>{
    e.preventDefault();

      const emp = {firstName, lastName, email}
      if(data!=null){
        EmpService.updateEmp(data,emp).then((res) =>{
          router.push('/')
        }).catch(e =>{
          console.log(e)
        })
      }else{
        EmpService.createEmp(emp).then((res) => {
          console.log(res.data);
          router.push('/')
        }).catch(e => {
          console.log(e)
        })
      }
     
  }

  useEffect(()=>{

   
    EmpService.getEmpById(data).then((res) =>{
      setFirstName(res.data.firstName)
      setLastName(res.data.lastName)
      setEmail(res.data.email)
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  },[])

const title = () => {
  if(data==null){
    return <h2 className='text-center'>Add Emp</h2>
  }else{
    return <h2 className='text-center'>Update Emp</h2>
  }
}
  return (
    <div>
      <br />
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
             {title()}
              <div className='card-body'>
                <form>
                  <div className='form-group mb-2'>
                    <label className='form-label'>First Name :</label>
                    <input 
                      type="text" 
                      placeholder='Enter frist name' 
                      name='firstName' 
                      className='form-control' 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}/>
                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Last Name :</label>
                    <input 
                      type="text" 
                      placeholder='Enter last name' 
                      name='lasttName' 
                      className='form-control' 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}/>
                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Email :</label>
                    <input 
                      type="email" 
                      placeholder='Enter email' 
                      name='email' 
                      className='form-control' 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <button className='btn btn-success' onClick={(e) => saveOrUpdateEmp(e)}>Submit</button>
                  <Link href="/"> <button className='btn btn-danger'> Cancel </button> </Link>
                </form>

              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmp
