import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/index';
import Product from './pages/product';





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>

        {/* <Route path="/carrot" element={<Index/>}></Route>
        <Route path="/lettuce" element={<Index/>}></Route>
        <Route path="/tomato" element={<Index/>}></Route>  */}
      </Routes>
    </Router> 
 
  </React.StrictMode>,
)
