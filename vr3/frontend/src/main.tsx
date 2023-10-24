import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/index';
import Product from './pages/product';

import NotFound from './pages/notFound';
import Login from './pages/login';
import CriarPost from './pages/criarPost';
import EditPost from './pages/editPost';
import EsqueciMinhaSenha from './pages/esqueciMinhaSenha';
import Dashboard from './pages/dashboard';
import CriarReceita from './pages/criarReceita';


// comandos importantes:

// sass --watch src/assets/sass/main.scss:src/assets/css/main.css 


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>

        {/* <Route path="/product/:id" element={<Product/>}></Route> */}
        <Route path="/product" element={<Product/>}></Route>   
        <Route path="/login" element={<Login/>}></Route>  
        <Route path="/criarPost" element={<CriarPost/>}></Route> 
        <Route path="/criarReceita" element={<CriarReceita/>}></Route> 
        <Route path="/editarPost" element={<EditPost/>}></Route> 
        <Route path="/esqueciMinhaSenha" element={<EsqueciMinhaSenha/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>


        {/* tratamento para página que não existe */}
        <Route path='*' element={<NotFound/>}/>


      </Routes>
    </Router> 
  </React.StrictMode>,
)
