import React,{useState} from 'react'
import 
 {BsPersonCircle, BsSearch, BsJustify,BsBoxArrowInRight}
 from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header({OpenSidebar}) {

  const navigate = useNavigate();

  const [showLogout, setShowLogout] = useState(false);

  const handleLogoutToggle = () => {
    setShowLogout((prev) => !prev);
  };

  const handleLogOut = () =>{
      axios.delete("http://localhost:8081/logout")
           .then((res) => {
              if(res.data.message === "Logged out successfully"){
                navigate("/");
              }
              else{
                alert("Error during logout.Please try again");
              }
           })
           .catch((err)=>{
            alert("Failed to logout.Check your network connection");
           })
  }

  return (
    <header className='header'>
       <div className='menu-icon'>
          <BsJustify className='icon' onClick={OpenSidebar}/>
       </div>
       <div className='header-left'>
           <BsSearch className='icon'/>
       </div>
       <div className='header-right'>
          
          <BsPersonCircle className='icon text-2xl cursor-pointer'
               onClick={handleLogoutToggle}
           />
          {showLogout && (
              <div className="absolute right-0 mt-2 bg-white text-black p-2 rounded shadow-md">
                <button
                  className="flex items-center px-3 py-2 hover:bg-gray-100 w-full"
                  onClick={handleLogOut}
                >
                  <BsBoxArrowInRight className="mr-2" />
                  Logout
                </button>
              </div>
            )}

       </div>
    </header>
  )
}

export default Header
