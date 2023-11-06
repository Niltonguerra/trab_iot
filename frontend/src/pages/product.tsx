import {useEffect, useState} from 'react';
import '../assets/css/main.css';
// import '../assets/css/noscript.css';
import CaroselCuriosidades from "../components/caroseis/carosel-curiosidades";
import CaroselBeneficios from "../components/caroseis/carosel-beneficios";
import CaroselHistoria from "../components/caroseis/carosel-história";
import CaroselReceitas from "../components/caroseis/carosel-receitas";
import FormularioProduct from "../components/formulario";
import { fetchBuscaIngredientes } from "../API/receitas";
import  { fetchAlimentosRegistro} from "../API/alimentos"
import { useParams } from 'react-router-dom';
// importando os dados do backend

// import {fetchProfessorData} from '../API/conectBackend';



//experimento de passagem de dados via props
// import ListComponent from './ListComponentProps';






function Product() {

	const [receitas, setReceitas] = useState<any>([]);
	const [alimento, setAlimento] = useState<any>([]);

	const { nomeAlimento } = useParams();





	const fetchData = async () => {


		
// busca dados da receita
		if(nomeAlimento){
			fetchBuscaIngredientes(nomeAlimento)
			.then((data: any) => {
				// Lidar com os dados
				setReceitas(data);
				// console.log(data)
			})
			.catch(error => {
				// Lidar com erros
				console.error("Erro ao buscar ingredientes das receitas para renderizar as receitas:", error);
			});

			
			// busca dados dos alimentos
			fetchAlimentosRegistro(nomeAlimento)
			.then((data: any) => {
				setAlimento(data);
				// console.log(data.nome)
			})
			.catch(error => {
				console.error(error);
			});
		}




		}
		
		

		useEffect(() => {
			// Chame a função assíncrona para buscar os dados
			fetchData(); 
		}, []);
	







	const [display, setDisplay] = useState('none');

	const toggleColor = () => {
		if(display === "none"){
			setDisplay("block");
		}else{
			setDisplay("none");
		}

	}








return (
    <>



{/* <!-- Sidebar --> */}

		<div className='MenuDinamico'>
        <button className="btn-retrai" onClick={toggleColor}>
			&#9776; Menu
        </button>
        <ul className="menu" style={{ display: display}}>

			<li className='elementoMenu'><a className='link' href='#topicos'>Tópicos do Alimento</a></li>


			
			{alimento !== undefined && alimento.id_topico !== undefined  ? (
				<div>
					{alimento.id_topico.map((topico:any, index:number) => (
						<div key={index}>
									<li className='elementoMenu'><a className='link' href={'#'+topico.nomeTopico}>{topico.nomeTopico}</a></li> 
						</div>
					))} 
					

				</div>
			): null
			}


			<li className='elementoMenu'><a className='link' href='#receitas'>Receitas com essa hortaliça</a></li>

			{receitas !== undefined  ? (
				<div>
					{receitas && receitas.map((receita:any, index:number) => (
							<div key={index}>
						<li className='elementoMenu'><a className='link' href={'#'+receita?.nome}>{receita?.nome}</a></li> 
					</div>
					))}  
				</div>
			): null
			} 
			<li className='elementoMenu'><a className='link' href="#formulario">formulário</a></li> 

        </ul>

		</div>





	<section id="sidebar">

		<div className=" inner ">
			<nav>

				<ul>

					<li><a href='#topicos'>Tópicos do Alimento</a></li>
					
						{alimento !== undefined && alimento.id_topico !== undefined  ? (

					<div>

						{alimento.id_topico.map((topico:any, index:number) => (
							<div key={index}>
										<li><a href={'#'+topico.nomeTopico}>{topico.nomeTopico}</a></li> 
							</div>
						))} 
						<br />

					</div>
					): null
					}
					<li><a href='#receitas'>Receitas com o Alimento</a></li>


					{receitas !== undefined  ? (
						<div>
							{receitas && receitas.map((receita:any, index:number) => (
									<div key={index}>
								<li ><a href={'#'+receita?.nome}>{receita?.nome}</a></li> 
							</div>
							))}  
						</div>
					): null
					} 
					<li><a href="#formulario">formulário</a></li> 

				</ul>
			</nav>
		</div>
	</section>
		


		{/* <!-- Wrapper --> */}
	<div id="wrapper">



	<div id="topicos" ></div>

{alimento !== undefined && alimento.id_topico !== undefined  ? (

	<div>
		{alimento && alimento.id_topico.map((topico:any, index:number) => (
				<div key={index}>

					{index % 3 === 0 ? (
					<section id={topico.nomeTopico} className="wrapper style1 fullscreen fade-up">
						<div className="inner">
						<CaroselCuriosidades topico={topico} />
						</div>
					</section>
				) : null} 

				{index % 3 === 1 ? (
					// <!-- One --> 
					<section id={topico.nomeTopico} className="wrapper style2 spotlights">
						<div className="inner">
							<CaroselBeneficios topico={topico}/>
						</div>
					</section>
				) : null}


				{index % 3 === 2 ? (
					<section id={topico.nomeTopico} className="wrapper style3 fade-up">
						<div className="inner">
							<CaroselHistoria topico={topico}/>
						</div>
					</section>
				) : null}  

			</div>
		))}  

	</div>)

	: null
}

	


{receitas !== undefined  ? (

	<div>
		{receitas && receitas.map((receita:any, index:number) => (
		<div key={index}>
			<section id={receita?.nome} className="wrapper style1 fade-up"><br /><br /><br /><br /><br /><br />
			
			{index === 0 ? (
				<div id="receitas" ><h2 className='tituloReceita'>Receitas</h2></div>
			):null}
			
				<CaroselReceitas receita={receita}/>
			</section>
		</div>
	))}  
	</div>)

	: null
} 




	{/* formulario  */}
	<section id="formulario" className="wrapper style1 fade-up">
		<div className="inner">
		
			<FormularioProduct/>
		</div>
	</section>

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
