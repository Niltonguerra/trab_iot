import { Link } from "react-router-dom";

import { deletarDadoReceita, fetchReceitasNome } from "../API/receitas";
import {useState, useEffect } from "react";
import Swal from 'sweetalert2';



function DashboardReceitas(){


    const [receitas, setReceitas] = useState<any>([]);


    const fetchData = async () => {
        try {
          const receitasData = await fetchReceitasNome();
          setReceitas(receitasData);

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
    await deletarDadoReceita(nome);
    fetchData();

    Swal.fire({
        icon: "success",
        title: "Excluido com sucesso! ",
        showConfirmButton: false,
        timer: 5000
    });
} 
   

    return (
        <>

        <div className="container--dashboard">
            <div className="container">
                <div className="conteudo">

                    <div className="cabecario">

                        
                        <div className="flexbox">
                            <h1>Seus Post de Receitas</h1>

                        
                            <div className="btns">
                                <Link to={`/dashboardPost`} className="link">
                                    <img className="icon" src="/images/navigate.svg" alt="icon_navigate" />
                                    <label>ir para hortaliças</label>
                                    
                                </Link>

                                <Link to={`/dashboardComentarios`} className="link">
                                    <img className="icon" src="/images/navigate.svg" alt="icon_navigate" />
                                    <label>ir para comentarios</label>
                                </Link>

                                <Link to={`/`} className="link">
                                    <img className="icon" src="/images/log-in-outline.svg" alt="icon_navigate" />
                                    <label>Sair da conta</label>
                                </Link>
                            </div>





                        </div>


                        <div className="criar">
                            <Link className="botaoCriar" to="/criarReceita">
                                Criar nova receita
                                <img className="icon" src="/images/create.svg" alt="icon" />
                            </Link>
                        </div>

                        
                    </div>

                    <table className="tabela" >

                        <thead>
                        <tr>
                            <th>nome da Receita</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                        </thead>


                        <tbody>
                            {receitas.map((alimento:any) => (
                                <tr key={alimento._id}>


                                    <td>{alimento.nome}</td>

                                    <td>
                                        <Link to={`/editarReceita/${alimento.nome}`}>
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

export default DashboardReceitas;