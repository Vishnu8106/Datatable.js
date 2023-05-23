import React, { useState } from 'react';



import {FaRegChartBar,FaBars,FaBookReader,FaCartArrowDown} from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';

import "./sidebar.css"


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
   
    const toggle=()=>setIsOpen(!isOpen)
 
    const menuItem = [
        
        {
            path: "/",
            name: "Home",
            icon: <FaRegChartBar />
        },
        
        {
            path: "data",
            name: "DataTable",
            icon: <FaBookReader />
        },
        
        {
            path: "table",
            name: "Table",
            icon: <FaCartArrowDown />
        },
        
        {
            path: "owndata",
            name: "data",
            icon: <FaCartArrowDown />
        }
    ]

    
    const [value,setvalue]=useState(true)
    const move=()=>setvalue(!value)
    
   
     
    return (
             <div >
                
             <div className='drop-down-top'>
             <FaBars style={{color:"white",width:"100px",height:"20px"}} onClick={toggle}/>
                
            </div>
            <div className='sub-navbar' onClick={move} style={{height:"10px"}}>
               
        </div>
        <div className='dropdown' style={{ height: value ? "" : "100px" }}></div>
           
            <div className="container" >
                <div className="sidebar" style={{width:isOpen?"0px":"200px"}}   >
                    <div className="top_section">
                    
                       
                    </div>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div className="link_text" style={{display:isOpen?"none":""}}>{item.name}</div>
                                
                            </NavLink>
                        ))
                    }
                </div>
                
                <Outlet />
            </div>
        </div>
    );
};

export default Sidebar;
