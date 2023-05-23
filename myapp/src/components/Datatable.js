
import newdata from "./newdata/data.json"
import { Tree } from 'primereact/tree';
import "./index.css"
import {  useState } from "react";
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';




const Datatable = () => {
    
    const [selectedKey, setSelectedKey] = useState('');
    const [visible, setVisible] = useState(false);

    const[sidebar,setsidebar]=useState(true)

    const data = newdata.filter((each) => each.parentid === null)
  
  const lastorder=(id)=>{
    const num=newdata.filter(each=>{
        return each.key===id
    })
    const minichild=num.map(item=>{
        const miniobj={label:item.text,key:item.key,route:item.route,items:[]}
        return miniobj
    })
    return minichild

  }




  const menubar=(id)=>{
    const number=newdata.filter(each=>{
       
        return each.parentid===id
    })
    const getchild=number.map(each=>{
      
        const object={label:each.text,
            route:each.route,
        key:each.key,
    children:lastorder(each.id)}
    return object
    })
    return getchild

  }


    const getChildren = (id) => {
        const childs = newdata.filter(each => {      
            return each.key === id 
        })

        const childdata= childs.map(each=> {
           const obj={label:each.text,
            key: each.key,
            icon: each.icon,
            children:menubar(each.key)
        }

        return obj
        })

        return childdata
    }

    const values = data.map(each => {
        const childs =  {
            label: each.text,
            key: each.key,
            icon: each.icon,
            
            children: getChildren(each.id) 
        }
        return childs
    })



    return (
        <div className="card flex justify-content-center display">

            <Sidebar  visible={visible} onHide={() => setVisible(false)}>
           
                <Tree  value={values} 
         selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value)} className="w-full md:w-25rem font-italic" />
            </Sidebar>
            <div className="mini-sidebar" onClick={()=>setsidebar(!sidebar)} style={{width:sidebar?"20px":"100px"}}>
                
            </div>
            <div className="sidebar-button"><Button icon="pi pi-chevron-left" onClick={() => setVisible(true)}className="btn"/></div>
            
        </div>



    );
}

export default Datatable;
 