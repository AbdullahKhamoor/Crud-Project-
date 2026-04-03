import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./redux/userSliced";
import axios from "axios"

function Users() {

  // const [users, setUsers] = useState([])
  // useEffect(()=>{
  //   axios.get('http://localhost:3001/getadd')
  //   .then(users => setUsers(users.data))
  //   .catch(err => console.log(err))
  // }, [])

  const users = useSelector(state => state.users.users)
  const dispatch = useDispatch()
  // console.log(useSelector(state => state.users.users))
  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/deleteuser/' + id)
      .then(res => {
        dispatch(deleteUser({ id }))
        console.log(res)
      }).catch(err => console.log(err))
  }


  return (
    <>

      {/* <div className="container-fluid vh-100 bg-primary d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-100 w-md-75 w-lg-50 bg-white rounded p-3">
          <Link to="/create" className="btn btn-success btn-sm">Add +</Link>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(user => {
                  // console.log(user)
                  return <tr key={user.id}>

                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link to={`/update/${user.id}`} className="btn btn-sm btn-success me-2">Update</Link>
                      <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>

                    </td>


                  </tr>

                })
              }
            </tbody>
          </table>
        </div>
      </div> */}

      <div className="container-fluid min-vh-100 bg-primary d-flex justify-content-center align-items-center p-2 overflow-auto">
        <div className="w-100 w-md-75 w-lg-50 bg-white rounded p-3">

          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
            <h5 className="mb-2">User List</h5>
            <Link to="/create" className="btn btn-success btn-sm">Add +</Link>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td className="text-break">{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <div className="d-flex flex-column flex-md-row gap-2">
                        <Link to={`/update/${user.id}`} className="btn btn-sm btn-success">
                          Update
                        </Link>
                        <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </div>
    </>
  )

}
export default Users
