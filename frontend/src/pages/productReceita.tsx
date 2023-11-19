import {useEffect, useState} from 'react';

import CaroselReceitas from "../components/caroseis/carosel-receitas";
import { fetchReceitasRegistro } from "../API/receitas";
import { useParams } from 'react-router-dom';



function ProductReceita() {

	const [receitas, setReceitas] = useState<any>();

	const { nomeReceita } = useParams();





	const fetchData = async () => {


		
// busca dados da receita
		if(nomeReceita){
			fetchReceitasRegistro(nomeReceita)
			.then((data: any) => {
				// Lidar com os dados
				setReceitas(data);
                console.log(data)
				
			})
			.catch(error => {
				// Lidar com erros
				console.error("Erro a receita:", error);
			});

			
		}




		}
		
		

		useEffect(() => {
			// Chame a função assíncrona para buscar os dados
			fetchData(); 
		}, []);
	









	
	



return (
    <>



		{/* <!-- Wrapper --> */}


    
    {receitas !== undefined  ? (

        <div>

                <section id={receitas?.nome} className="wrapper style1 fade-up"><br /><br /><br /><br /><br /><br />
                
                
                <div id="receitas" ><h2 className='tituloReceita'>{receitas?.nome}</h2></div>
                
                
                <CaroselReceitas receita={receitas}/>


                
                <br /><br /><br /><br /><br /><br />
			</section>
            
        </div>

)
: 

<div>
    <h1>Carregando...</h1>

</div>
} 
        





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

export default ProductReceita;
