import React from 'react';

import Sidebar from './page/Sidebar';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Datatable from './components/Datatable';
import Product from "./components/Product"
import Inputdata from './components/inputdata';

const App=()=>{
  return (
   
      <BrowserRouter>
       
          <Routes>
     <Route path="/" element={ <Sidebar />}>
     <Route path="/" element={<Home /> } />
     <Route path="data" element={<Datatable/>}/>
     <Route path='table' element={<Product/>}/>
     <Route path="owndata" element={<Inputdata/>}/>
     
     </Route>
          
          
          </Routes>
      </BrowserRouter>

  );
}

export default App;