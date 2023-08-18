import viteLogo from '/vite.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/home';








ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home/>
    {/* <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>

        <Route path="/carrot" element={<Index/>}></Route>
        <Route path="/lettuce" element={<Index/>}></Route>
        <Route path="/tomato" element={<Index/>}></Route> 
      </Routes>
    </Router> 
  */}
  </React.StrictMode>,
)
