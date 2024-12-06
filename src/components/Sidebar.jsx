import React from 'react'
import 
{BsCart3}
 from 'react-icons/bs'
 import axios from 'axios'

function Sidebar({openSidebarToggle,OpenSidebar}) {

    const handleProfile = () =>{
         axios.get("http://localhost:8081/profile")
          .then((res)=>{
              if(res.data.message === "Authorised"){
                console.log("success from profile");
                console.log(res.data.datas);
              }
              else{
                console.log("Unauthorised");
              }
          })
          .catch((err)=>{
            console.log(err);
          })
    }

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive":""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3 className='icon_header'/> AGRI
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href=''>
                      Crop Match
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                     Improve Irrigation
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                      Market Check
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a onClick={handleProfile}>
                      Profile
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
