import React, { useEffect, useState } from 'react'
import AddUser from '../components/AddUser';
//import {ApiBase} from '../components/ApiBaseName'

export default function Users() {

  //const {users, dispatch} = useUsersContext();
  const [users, setusers] = useState(null);



  useEffect(() => {
    const FetchUsers = async () => {
      const response = await fetch('/api/users/get/all');
      
      const data = await response.json();
      console.log("data: ", data); 
      
      if(data){
        console.log(data);
        setusers(data)
        
        //dispatch({type: 'SET_USERS', payload: data});
      }
    }
    FetchUsers();

  },[]);


  const DataDelete = async (id) => {

    console.log(id.target.value);

    const response = await fetch('/api/users/delete/' + id.target.value, {
      method: 'DELETE'
    })
    const data = await response.json();
    if(data.ok){
      setusers(data)
      //dispatch({type: 'DELETE_USER', payload: data})
    }


  }



  return (
    <div className="px-5">
    <div className="row">
      <div className="col-md-8">
    <div className="container my-5">
      <h2>Users</h2>
     <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {users && users.map((user, index) => (
      <tr key={index}>
      <th scope="row">{++index}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td><a href="/view">View</a> | <a href="/edit">Edit</a> | <button value={user._id}  onClick={DataDelete} >Delete</button></td>
    </tr>
    ))}
    
    
    
  </tbody>
</table>
    </div>
    </div>
    <div className="col-md-4">
    <AddUser  />
    </div>
    </div>
    </div>
  )
}
