import "./index.css"
import data from '../data/data.json'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const product=()=>{
    const data123=data.lstVendorAnalytics

  
  

 return(
    <div className="data-table" >
        
        <DataTable value={data123} responsiveLayout="scroll" className="table-wrapper" >
        <Column field="CustomerID" header="orderNumber"></Column>
        <Column field="VendorName" header="VendorName"></Column>
        <Column field="Addr1" header="Address"></Column>
        <Column field="AverageGross" header="AverageGross"></Column>
        <Column field="CityName" header="CityName"></Column>
        <Column field="ProductID" header="ProductID"></Column>
    
        </DataTable>
      
    </div>
 )
}

export default product