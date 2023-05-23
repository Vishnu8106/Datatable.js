import React, { } from 'react';

import { format } from 'date-fns'

import { useState } from 'react';
import "./index.css"
import data from '../data/data.json'
import Table from 'react-bootstrap/Table';
import { FaAngleDoubleLeft, } from "react-icons/fa";
import { AiOutlineFileExcel, } from "react-icons/ai";




const Home = () => {
  const maindata = data.lstVendorAnalytics
  let indexnumber = 0




  const [vishnu, setvishnu] = useState(true)
  const toggle123 = () => setvishnu(!vishnu);



  const newdata = new Array(...new Set(
    maindata.map((each) => JSON.stringify({
      CustomerName: each.CustomerName,
      VendorName: each.VendorName,
      shiptoname: each.ShipToName,
      Address: each.Addr1,
      Cityname: each.CityName,
      stateCode: each.StateCode,
      Location: each.LocationType,


    })


    )))

  const finaldata = newdata.map((a) => {
    const value = JSON.parse(a);

    const finalresult = maindata.filter((item) =>
      value.CustomerName === item.CustomerName &&
      value.VendorName === item.VendorName &&
      value.shiptoname === item.ShipToName &&
      value.Location === item.LocationType &&
      value.stateCode === item.StateCode &&
      value.Cityname === item.CityName &&
      value.Address === item.Addr1

    )

    const number = [...new Set(finalresult.map(a => a.OrderNumber))]
             

    return { vendor: value, orders: finalresult, uniquenumber: number }



  })


  const getorder = (num, obj) => {

    const cmpObj = JSON.stringify(obj)
    const filteredData = maindata.filter(each => {
      const sample = JSON.stringify({
        CustomerName: each.CustomerName,
        VendorName: each.VendorName,
        shiptoname: each.ShipToName,
        Address: each.Addr1,
        Cityname: each.CityName,
        stateCode: each.StateCode,
        Location: each.LocationType,
      })

      return cmpObj === sample && each.OrderNumber === num

    })

 

    return filteredData


  }

  return (
    <div className='main-page-view' style={{ width: vishnu ? "90vw" : "90vw" }} >

      <div  >
        <div className='reddy' style={{ width: vishnu ? "50px" : "200px" }}>
          <FaAngleDoubleLeft onClick={toggle123} />
        </div>
      </div>


      <div className="outer-wrapper" style={{ width: vishnu ? "84vw" : "71vw" }}>
        <div className="table-wrapper">
          <Table >
            <thead >

              <tr >
                <th>S.No</th>
                <th>Customer Name</th>
                <th>VendorName</th>
                <th >Ship To Name</th>
                <th>Ship To Address1</th>
                <th>CityName</th>
                <th>LocationType</th>
                <th>Ship To state</th>

                <th >OrderNo</th>

                <th >ProdDesc</th>

                <th >Delivery Date</th>

                <th >Gallons</th>

                <th >ProductPrice</th>

                <th >Additive Price</th>

                <th >AdditiveUnitPrice</th>

                <th >FileName</th>

                <th >FreightPrice</th>

                <th >FreightUnitPrice</th>

                <th >Address1</th>

                <th >Latitude</th>

                <th >Longitude</th>

                <th >LocationType</th>

                <th >OPICity</th>

                <th >CoustomerID</th>

                <th >ProductID</th>

                <th >CityName</th>

                <th >ProductUnitPrice</th>

                <th >ShipToName</th>

                <th >SiteSetupTime</th>

                <th >StateCode</th>

                <th >StemTimeAndGMPerHr</th>

                <th >TaxPrice</th>

                <th >TaxUnitPrice</th>

                <th >TerminalGroupID</th>

                <th >VendorName</th>

                <th >ZipCode</th>


                <th >Delivery Fee</th>
                <th >TerminalGroupID</th>

              </tr>

            </thead>
            <tbody>

              {finaldata.map((item) => (

                 


                <>
                  <tr >
                    <td rowSpan={item.orders.length + item.uniquenumber.length + 1} className='index'>

                      {item.orders.map(each => {

                        indexnumber = indexnumber + 1

                        return <h4 className='span'>{indexnumber}</h4>

                      })}
                    </td>
                    <td rowSpan={item.orders.length + item.uniquenumber.length + 1}>{item.vendor.CustomerName}</td>
                    <td rowSpan={item.orders.length + item.uniquenumber.length + 1}>{item.vendor.VendorName}</td>
                    <td rowSpan={item.orders.length + item.uniquenumber.length + 1}>{item.vendor.shiptoname}</td>
                    <td rowSpan={item.orders.length + item.uniquenumber.length + 1}>{item.vendor.Address}</td>
                    <td rowSpan={item.orders.length + item.uniquenumber.length + 1} >{item.vendor.Cityname}</td>
                    <td rowSpan={item.orders.length + item.uniquenumber.length + 1}>{item.vendor.StateCode}</td>
                    <td rowSpan={item.orders.length + item.uniquenumber.length + 1}>{item.vendor.Location}</td>
                  </tr>


                  {item.uniquenumber.map((num) => {
                    

                    const orderDetails = getorder(num, item.vendor)

                    let count = 0
                    let volume = 0
                    let productunit = 0
                    if (orderDetails.length > 1) {
                         orderDetails.map(a => {
                        count = a.ProductPrice + count
                        volume = a.Gallons + volume
                        productunit = a.ProductUnitPrice + productunit

                      })

                    } else {
                      orderDetails.map(a => {
                        count = a.ProductPrice
                        volume = a.Gallons
                        productunit = a.ProductUnitPrice


                      })
                    }

                    return <>

                      {orderDetails.map((each) => {


                        return (<>
                          <tr>

                            <td >{each.OrderNumber}</td>
                            <td >{each.ProdDesc}</td>
                            <td >{format(new Date(each.DeliveryDate), 'MM-dd-yyyy')}</td>
                            <td >{each.Gallons}</td>
                            <td >{each.ProductPrice}</td>
                            <td >{each.AdditivePrice}</td>
                            <td >{each.AdditiveUnitPrice}</td>
                            <td><AiOutlineFileExcel /></td>
                            <td >{each.FreightPrice}</td>
                            <td >{each.FreightUnitPrice}</td>
                            <td >{each.Addr1}</td>
                            <td >{each.Latitude}</td>

                            <td >{each.Longitude}</td>

                            <td >{each.LocationType}</td>

                            <td >{each.OPICity}</td>
                            <td >{each.CustomerID}</td>
                            <td >{each.ProductID}</td>
                            <td >{each.CityName}</td>
                            <td >{each.ProductUnitPrice}</td>
                            <td >{each.ShipToName}</td>

                            <td >{each.SiteSetupTime}</td>

                            <td >{each.StateCode}</td>

                            <td >{each.StemTimeAndGMPerHr}</td>

                            <td >{each.TaxPrice}</td>

                            <td >{each.TaxUnitPrice}</td>

                            <td >{each.TerminalGroupID}</td>

                            <td >{each.VendorName}</td>

                            <td >{each.ZipCode}</td>
                            <td >{each.DeliveryFee}</td>

                            <td >{each.TerminalGroupID}</td>
                          </tr>

                        </>)

                      })}

                      <tr >
                        <td className='sub-td'></td>

                        <td className='sub-td'>Sub total</td>
                        <td className='sub-td'></td>
                        <td className='sub-td'>{volume}</td>
                        <td className='sub-td'>{count}</td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'>{productunit}</td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td className='sub-td'></td>
                        <td></td>
                      </tr>
                    </>

                  })}

                </>

              ))}

            </tbody>

          </Table>

        </div>

      </div>
    </div>
  );
}

export default Home;








