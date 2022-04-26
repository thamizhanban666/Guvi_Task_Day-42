import React, { useContext, useEffect } from 'react';
import myContext from '../userContext';
import axios from 'axios'; 
import { Link } from 'react-router-dom'
import Row_students from './Row_students';

function Students() {
  const userContext = useContext(myContext) 
    useEffect(() => {
       async function fetch() {
            try {
              let datas = await axios.get("https://day42-nodejs.herokuapp.com/students")
              userContext.setStudents(datas.data)
             
            } catch (error) {
              console.log(error);
            }
        }
        fetch();
  },[])

  return (
    <div className='flex-fill p-3 pt-4' style={{height:"100vh",overflow:"scroll" }}>
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-2 text-gray-800">Students</h1>
        
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
            <div className="card-header py-3 d-sm-flex align-items-center justify-content-between mb-4">
                <h6 className="m-0 font-weight-bold text-primary">List of Students</h6>
                <Link to="/add-student" className="d-none d-sm-inline-block btn btn-md btn-success shadow-sm">Add a Student</Link>
            </div>
            <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Department</th>
                                <th>Mentor</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              userContext.students.map((obj,i) => {
                                return <Row_students data={obj} num={i}/>
                              })     
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Students