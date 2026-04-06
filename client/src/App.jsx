import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { getUser } from "./redux/userSliced";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Users from './Users';
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

const BASE_URL = import.meta.env.VITE_API_URL

function App() {

  const dispatch = useDispatch()

  useEffect(() => {

    const fetchData = async () => {
      try {

        const response = await axios.get(BASE_URL);
        // const response = await axios.get('/api/');
        dispatch(getUser(response.data))
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()

  }, [])


  return (
    <>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
        {/* <Route path="*" element= {<p>Page Not found</p>} /> */}
      </Routes>

    </>
  )
}

export default App
