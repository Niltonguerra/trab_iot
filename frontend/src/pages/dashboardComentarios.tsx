import { Link } from "react-router-dom";

import {useState, useEffect } from "react";
import { fetchFormData,fetchDeletarForm } from "../API/formularioAPI";
import Swal from 'sweetalert2';



function DashboardComentarios(){


    const [alimentos, setAlimentos] = useState([]);


    const fetchData = async () => {
        try {
          const alimentosData = await fetchFormData();
          setAlimentos(alimentosData);


        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
      };

    useEffect(() => {
        
        fetchData(); // Chame a função assíncrona para buscar os dados
    }, []);

const delForm = async (id:string) => {
    await fetchDeletarForm(id);
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
                            <h1>Comentarios das pessoas</h1>

                            <div className="btns">
                                <Link to={`/dashboardReceitas`} className="link">
                                    <img className="icon_create" src="/images/navigate.svg" alt="icon_navigate" />
                                    ir para posts de receitas
                                </Link>

                                <Link to={`/dashboardPost`} className="link">
                                    <img className="icon_create" src="/images/navigate.svg" alt="icon_navigate" />
                                    ir para posts de hortaliças
                                </Link>

                                <Link to={`/`} className="link">
                                    <img className="icon_create" src="/images/log-in-outline.svg" alt="icon_navigate" />
                                    Sair da conta
                                </Link>
                            </div>
                        </div>




                        
                    </div>

                    <table className="tabela" >

                        <thead>
                        <tr>
                            <th>titulo do comentario</th>
                            <th>Ler o comentario</th>
                            <th>excluir</th>
                            
                        </tr>
                        </thead>


                        <tbody>
                            {alimentos.map((formulario:any) => (
                                <tr key={formulario._id}>


                                    <td>{formulario?.titulo}</td>

                                    <td>
                                        <Link to={`/lerComentario/${formulario?._id}`}>
                                        <img className="icon" src="/images/reader-outline.svg" alt="icon_read" />
                                        </Link>
                                    </td>

                                    <td>
                                        <p className="btnDeletaRegistro" onClick={() => delForm(formulario?._id)
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

export default DashboardComentarios;