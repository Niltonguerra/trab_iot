import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';

import { fetchReceitasData} from "../API/receitas";
import  { fetchAlimentosData} from "../API/alimentos"


function Search() {

// useState que iram ser usados para exibir e para manipular
    const [receitas, setReceitas] = useState<any>([]);
    const [alimentos, setAlimentos] = useState<any>([]);


// useState que iram receber receber os dados do banco de dados
    const [receitasBuscadas, setReceitasBuscadas] = useState<any>([]);
    const [alimentosBuscadas, setAlimentosBuscadas] = useState<any>([]);



    // é usado para realizar as pesquisas
    const [pesquisa,setPesquisa] = useState<string>("");

    // faz o controle do ordenamento da lista
    const [ordenar,setOrdenar] = useState<boolean>(false);




    const fetchData = async () => {
        try {


                fetchReceitasData()
                .then((data) => {
                    setReceitasBuscadas(data);
                    setReceitas(data)
                })
                .catch((error) => {
                    console.log("erro ao carregar dados buscar de receitas dados: erro: ", error);
                });



                fetchAlimentosData()
                .then((data) => {
                    setAlimentosBuscadas(data);
                    setAlimentos(data);

                })
                .catch((error) => {
                    console.log("erro ao carregar dados de alimentos dados: erro: ", error);
                });

            
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

    useEffect(() => {
        fetchData(); // Chame a função assíncrona para buscar os dados
    }, []);













    const fetchPesquisa = async () => {
        try {
        

            // faz a pesquisa do alimento
            const filtroAlimento = alimentosBuscadas.filter((objet: { nome: string; }) => {
                
                return objet.nome.toLowerCase().includes(pesquisa);
            });
            
            setAlimentos(filtroAlimento);






            // faz a pesquisa da receita
            const filtroReceita = receitasBuscadas.filter((object: { nome: string; }) => {
                
                return object.nome.toLowerCase().includes(pesquisa);
            });

            setReceitas(filtroReceita);
            

        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };



    const handleKeyPress = (event:any) => {
        if (event.key === 'Enter') {
            fetchPesquisa();
        
        }

    };







// ordena os dados
const ordenarLista = () => {

    setOrdenar(!ordenar)

    // crescente
    if(ordenar){

        // ordena a lista de alimentos
        const novoEstadoOrdenadoAlimentos = [...alimentos].sort((a, b) => {
            // Use localeCompare para comparar strings de forma sensível à localização
            return a.nome.localeCompare(b.nome);
        });
        setAlimentos(novoEstadoOrdenadoAlimentos);


        // ordena a lista de receitas
        const novoEstadoOrdenadoReceitas = [...receitas].sort((a, b) => {
            // Use localeCompare para comparar strings de forma sensível à localização
            return a.nome.localeCompare(b.nome);
        });
        setReceitas(novoEstadoOrdenadoReceitas);


    }
    // decrescente
    else{
        // ordena a lista de alimentos
        const novoEstadoOrdenado = [...alimentos].sort((a, b) => {
            // Use localeCompare para comparar strings de forma sensível à localização
            return b.nome.localeCompare(a.nome);
        });
    
        setAlimentos(novoEstadoOrdenado);


        
        // ordena a lista de receitas
        const novoEstadoOrdenadoReceitas = [...receitas].sort((a, b) => {
            // Use localeCompare para comparar strings de forma sensível à localização
            return b.nome.localeCompare(a.nome);
        });
        setReceitas(novoEstadoOrdenadoReceitas);


    }
}






return (
    <div>

    <div className="container--dashboard">
            <div className="container">
                <div className="conteudo">






                <Link to={`/`} className="link">
                    <img className="icon" src="/images/navigate.svg" alt="icon_navigate" />
                    voltar para a ultima home
                </Link>


                <nav className="barraDePesquisa">
                    
                    <input 
                        type="text" 
                        placeholder='Digite o que você quer buscar, por exemplo: "Cenoura"' 
                        className="pesquisaInput" 
                        onChange={(e) => setPesquisa(e.target.value)} 
                        onKeyUp={handleKeyPress}
                    />
                    <img 
                        className="imagemPesquisa" 
                        src="/images/search.svg" 
                        alt="icon_navigate" 
                        onClick={() => fetchPesquisa()}
                    />
                    
                    <img 
                        className="imagemPesquisa" 
                        src="/images/arrow-up-outline.svg" 
                        alt="icon_navigate" 
                        onClick={() => ordenarLista()}
                        
                    />
                </nav>


                









    <main>


        <h4 className='pb-2 mt-12 font-bold border-b border-gray-200'>Hotaliças</h4>

        <div className='grid gap-10 mt-8 lg:grid-cols-3'>
        {/* cads go here */}
        {alimentos.map((alimento:any,index:number) => (
            <div key={index}>
            <Link to={`/product/${alimento.nome}`}>
            <div className='card'>
                {/* aqui é id_topico[0] pois ele está pegando a imagem do primeiro topico que é inserido */}
                <img src={alimento.id_topico[0].foto.imagem_media.url} className='object-cover w-full h-32 sm:h-48'  alt="anime-2" />
                <div className='m-4'>
                <span className='font-bold'>{alimento.nome}</span>
                <span className='block text-sm text-gray-500'>{alimento.descricaoVegetal} </span>
                </div>

                
            </div>
            </Link>
        </div>
    ))}
    
    </div> 

    <h4 className='pb-2 mt-12 font-bold border-b border-gray-200'>Receitas</h4>

    <div className='grid gap-10 mt-8 lg:grid-cols-3'>
    {receitas.map((receita:any,index:number) => (
        <div key={index}>
        <Link to={`/Receita/${receita.nome}`}>
        <div className='card'>
            <img src={receita.foto.imagem_media.url} className='object-cover w-full h-32 sm:h-48'  alt="anime-2" />
            <div className='m-4'>
            <span className='font-bold'>{receita.nome}</span>
            <span className='block text-sm text-gray-500'>Ingredientes: {receita.ingredientes.map((ingrediente: any) => ingrediente.nome).join(', ')}</span>
            </div>
            

            <div className='badge'>
            <svg className='inline-block w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{receita.tempoDePreparo}</span>
            </div>
        </div>
        </Link>
    </div>
    ))}

    </div>   














    </main>










            </div>
        </div>
    </div>

    
    </div>
);

}

export default Search;
