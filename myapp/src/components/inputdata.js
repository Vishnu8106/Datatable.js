import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { InputText } from "primereact/inputtext";
import {FilterMatchMode} from "primereact/api"


const Inputdata=()=>{
    const[filter,setfilter]=useState({
        global:{value:null, mathmode:FilterMatchMode.CONTACT}
    }) 
    const newdata=[{id:1,Name:"vishnu",place:"hyd"},
    {id:2,Name:"Akhil",place:"hyd"},{id:3,Name:"vamshi",place:"hyd"}]
    
    return(
        <div>
             <InputText  onInput={(e)=>setfilter({global:({value:e.target.value, mathmode:FilterMatchMode.CONTACT})})
            } />
            <DataTable value={newdata} >
            <Column field="id" header="id"></Column>
            <Column field="Name" header="Name"></Column>
            <Column field="place" header="place"></Column>
            
            </DataTable>
          
        </div>
    )
}
export default Inputdata;