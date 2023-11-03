import React, {useEffect, useState} from 'react';
// import '../assets/css/main.css';
// import '../assets/css/noscript.css';
import CaroselCuriosidades from "../components/caroseis/carosel-curiosidades";
import CaroselBeneficios from "../components/caroseis/carosel-beneficios";
import CaroselHistoria from "../components/caroseis/carosel-história";
import CaroselReceitas from "../components/caroseis/carosel-receitas";
import FormularioProduct from "../components/formulario";
import { fetchReceitasData } from "../API/receitas";
import  { fetchAlimentosData} from "../API/alimentos"

// importando os dados do backend

// import {fetchProfessorData} from '../API/conectBackend';



//experimento de passagem de dados via props
// import ListComponent from './ListComponentProps';






function Product() {

	const [receitas, setReceitas] = useState([]);
	const [alimentos, setAlimentos] = useState([]);
	const [confirDadosChegaram,setConfirDadosChegaram] = useState(false);
  
  
	const fetchData = async () => {
		try {
		  const receitasData = await fetchReceitasData();
		  setReceitas(receitasData);
  
		  const alimentosData = await fetchAlimentosData();
		  setAlimentos(alimentosData);
  
		
		  setConfirDadosChegaram(true);
		} catch (error) {
		  console.error("Erro ao buscar dados:", error);
		}
	  };
  
	useEffect(() => {
		if(confirDadosChegaram === false){
		fetchData(); // Chame a função assíncrona para buscar os dados
	  }
	}, []);
  


return (
    <>


{/* <!-- Sidebar --> */}
		
			<section id="sidebar">
				<div className=" inner ">
					<nav>
						<ul>



						{alimentos.map((alimento,index) => (
							<div key={index}>

							<li><a href={'#'+alimento.nome}>{alimento.nome}</a></li>

						</div>
						))}

							{/* <li><a href="#three">Receitas</a></li>
							<li><a href="#formulario">formulário</a></li> */}
						</ul>
					</nav>
				</div>
			</section>
		








		{/* <!-- Wrapper --> */}
			<div id="wrapper">



				{alimentos.map((alimento,index) => (
					<div key={index}>

							{/* <!-- Intro --> */}
						<section id={alimento.nome} className="wrapper style1 fullscreen fade-up">
							<div className="inner">
								<CaroselCuriosidades />
							</div>
							<br></br><br></br>
						</section>

					</div>
						))}










{/* 
				 		<!-- One --> 
					<section id="one" className="wrapper style2 spotlights">
					<div className="inner">
						<CaroselBeneficios/>
					</div>
					</section>

						<!-- Two --> 
					<section id="two" className="wrapper style3 fade-up">
						<div className="inner">
							<CaroselHistoria/>
						</div>
					</section> */}














					{/* 
						receitas 
					<section id="three" className="wrapper style1 fade-up">
						<CaroselReceitas/>
					</section>



						formulario 
					<section id="formulario" className="wrapper style1 fade-up">
						<div className="inner">
							<FormularioProduct/>
						</div>
					</section>
					
					 */}

			</div>

		{/* <!-- Footer --> */}
			<footer id="footer" className="wrapper style1-alt">
				<div className="inner">
					<ul className="menu">
						<li>&copy;by Nilton Dionisio Guerra & Enzo Tavares.</li><li>Design: Nilton Dionisio Guerra & Enzo Tavares</li>
					</ul>
				</div>
			</footer>






    </>
    )





}

export default Product;
