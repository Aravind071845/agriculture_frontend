import React,{useEffect, useState} from 'react'
import './Dashboard.css'
import Header from '../components/Header';
import Home from '../components/Home';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    const navigate = useNavigate();

    const[openSidebarToggle,setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
     setOpenSidebarToggle(!openSidebarToggle)
    }

    const getUser = async () =>{
      try{
        const response = await axios.get("http://localhost:8081/dashboard",{withCredentials: true});
        console.log(response);
      }
      catch(err){
        navigate("/");
      }
    }

    useEffect(() => {
      getUser()
    },[])

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home/>
    </div>
  )
}

export default Dashboard