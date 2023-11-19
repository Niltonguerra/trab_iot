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
import DashboardPost from './pages/dashboardPost';
import CriarReceita from './pages/criarReceita';
import EditReceita from './pages/editReceita';
import DashboardReceitas from './pages/dashboardReceitas';
import DashboardComentarios from './pages/dashboardComentarios';
import LerComentario from './pages/lerComentario';
import Search from './pages/search';
import ProductReceita from './pages/productReceita';

// comandos importantes:

// sass --watch src/assets/sass/main.scss:src/assets/css/main.css 


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>

        {/* <Route path="/product/:id" element={<Product/>}></Route> */}
        <Route path="/product/:nomeAlimento" element={<Product/>}></Route>  
        <Route path="/Receita/:nomeReceita" element={<ProductReceita/>}></Route> 

        <Route path="/login" element={<Login/>}></Route>  
        <Route path="/criarPost" element={<CriarPost/>}></Route> 
        <Route path="/criarReceita" element={<CriarReceita/>}></Route> 
        <Route path="/editarAlimento/:nomeDoAlimentoEdit" element={<EditPost/>}></Route> 
        <Route path="/editarReceita/:nomeDaReceitaEdit" element={<EditReceita/>}></Route> 
        <Route path="/lerComentario/:idComentario" element={<LerComentario/>}></Route> 
        <Route path="/esqueciMinhaSenha" element={<EsqueciMinhaSenha/>}></Route>
        <Route path="/dashboardPost" element={<DashboardPost/>}></Route>
        <Route path="/dashboardReceitas" element={<DashboardReceitas/>}></Route>
        <Route path="/dashboardComentarios" element={<DashboardComentarios/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        {/* tratamento para página que não existe */}
        <Route path='*' element={<NotFound/>}/>


      </Routes>
    </Router> 
  </React.StrictMode>,
)
