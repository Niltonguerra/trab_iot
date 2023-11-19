import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';

import { fetchReceitasData,fetchReceitasPesquisa } from "../API/receitas";
import  { fetchAlimentosData,fetchAlimentosPesquisa} from "../API/alimentos"


function Search() {



    const [ receitas, setReceitas] = useState<any>([]);
    const [alimentos, setAlimentos] = useState<any>([]);
    const [confirDadosChegaram,setConfirDadosChegaram] = useState(false);
    const [pesquisa,setPesquisa] = useState<string>("");


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













    const fetchPesquisa = async ( nome: string) => {
        try {
        const receitasData = await fetchReceitasPesquisa(nome);
        setReceitas(receitasData);

            const alimentosData = await fetchAlimentosPesquisa(nome);
            setAlimentos(alimentosData);
            

        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    const handleKeyPress = (event:any) => {
        if (event.key === 'Enter') {
        fetchPesquisa(pesquisa);
        }
    };









return (
    <div>

    <div className="container--dashboard">
            <div className="container">
                <div className="conteudo">






                <Link to={`/`} className="link">
                    <img className="icon_create" src="/images/navigate.svg" alt="icon_navigate" />
                    voltar para a ultima home
                </Link>


                <nav className="barraDePesquisa">
                    
                    <input 
                        type="text" 
                        placeholder='Digite o que você quer buscar, por exemplo: "Cenoura"' 
                        className="pesquisaInput" 
                        onChange={(e) => setPesquisa(e.target.value)} 
                        onKeyPress={handleKeyPress}
                    />
                    <img 
                        className="imagemPesquisa" 
                        src="/images/search.svg" 
                        alt="icon_navigate" 
                        onClick={() => fetchPesquisa(pesquisa)}
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
