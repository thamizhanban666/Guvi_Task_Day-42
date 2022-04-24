import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import myContext from './userContext';

function ViewStudent() {
  let navigate = useNavigate()
   const userContext = useContext(myContext);
   let params = useParams();
   let [stud,setStud] = useState({})
   // let index = userContext.students.findIndex((e)=> e._id == params.id)
   let fetch = async () => {
      try {
         let student = await axios.get(`http://localhost:3001/students/${params.id}`)
         setStud(student.data)
      } catch (error) {
         console.log(error);    
      }  
   }
   fetch();
   return (
      <div className='m-2'>
         <h1 className='text-secondary'>Details</h1><br/>
         <label className='h3 text-dark'>Name :</label> &emsp;
         <span className='h4 text-primary'>{stud.name }</span><br/>
         <label className='h3 text-dark'>Age :</label> &emsp;
         <span className='h4 text-primary'>{stud.age }</span><br/>
         <label className='h3 text-dark'>Department :</label> &emsp;
         <span className='h4 text-primary'>{stud.department }</span><br/>
         <label className='h3 text-dark'>Mentor :</label> &emsp;
         <span className='h4 text-primary'>{stud.mentor }</span><br/>

         <button className="d-none d-sm-inline-block btn btn-md btn-primary shadow-sm mt-2" onClick={()=>{navigate("/students")}}>Back</button>
      </div>
  )
}

export default ViewStudent