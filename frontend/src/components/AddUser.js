import React, { useState } from 'react'

export default function AddUser() {

  //const {dispatch} = useUsersContext();
  const [users, setusers] = useState();

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [error, seterror] = useState(null);

    const SubmitForm = async (e) => {
        e.preventDefault();

        const userfields = {name, email, phone};

        const response = await fetch('/api/users/add', {
            method: 'POST',
            body: JSON.stringify(userfields),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
        if(data){
            setname('');
            setemail('');
            setphone('');
            seterror('');
            setusers(data)
            //dispatch({type: 'CREATE_USER', data});
            console.log("User: ", data)
        }else{
            console.log("error1: ", data.error) 
          
            seterror(data.error);
        }
    }


  return (
    <div className="card container my-5 py-2">
      <h2>Add User</h2>
    <form onSubmit={SubmitForm}>
    <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputName1" value={name} onChange={(e) => setname(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setemail(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPhone1" className="form-label">Password</label>
    <input type="text" className="form-control" id="exampleInputPhone1" value={phone} onChange={(e) => setphone(e.target.value)} />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
  
  {error && <div className="alert alert-danger" role="alert">
    {error}
</div>}
</form>
    </div>
  )
}
