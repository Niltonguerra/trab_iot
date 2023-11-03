import { Link } from "react-router-dom";
import  {deletarDadoAlimento, fetchAlimentosNome} from "../API/alimentos"
import {useState, useEffect } from "react";



function DashboardPost(){


    const [alimentos, setAlimentos] = useState([]);


    const fetchData = async () => {
        try {
          const alimentosData = await fetchAlimentosNome();
          setAlimentos(alimentosData);

        //   const receitas = await fetchReceitasData();
        //   console.log(receitas);
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
      };

    useEffect(() => {
        
        fetchData(); // Chame a função assíncrona para buscar os dados
    }, []);

const delAlimento = async (nome:string) => {
    await deletarDadoAlimento(nome);
    fetchData();
} 
   

    return (
        <>

        <div className="container--dashboard">
            <div className="container">
                <div className="conteudo">

                    <div className="cabecario">

                        
                        <div className="flexbox">
                            <h1>Seus Post de hortaliças</h1>

                            <Link to={`/dashboardReceitas`} className="link">
                                <img className="icon_create" src="/images/navigate.svg" alt="icon_navigate" />
                                ir para posts de receitas
                            </Link>
                        </div>


                        <div className="criar">
                            <Link className="botaoCriar" to="/criarPost">Criar novo post
                            <img className="icon_create" src="/images/create.svg" alt="icon_create" />
                            </Link>
                        </div>

                        
                    </div>

                    <table className="tabela" >

                        <thead>
                        <tr>
                            <th>Nome do Post</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                        </thead>


                        <tbody>
                            {alimentos.map((alimento) => (
                                <tr key={alimento._id}>


                                    <td>{alimento.nome}</td>

                                    <td>
                                        <Link to={`/editarAlimento/${alimento.nome}`}>
                                        <img className="icon" src="/images/edit.svg" alt="icon_edit" />
                                        </Link>
                                    </td>

                                    <td>
                                        <p className="btnDeletaRegistro" onClick={() => delAlimento(alimento.nome)
                                                                                }>
                                        <img className="icon" src="/images/delete.svg" alt="icon_delete" />
                                        </p>
                                    </td>
                                    
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    

                </div>


            </div>
        </div>
        
        
        </>
    )
}

export default DashboardPost;