import { Link } from "react-router-dom";

function Dashboard(){

    return (
        <>

<div className="container--dashboard">
            <div className="container">
                <div className="conteudo">

                    <div className="cabecario">
                        <h1>Seus Post</h1>

                        <div className="criar">
                            <Link className="botaoCriar" to="/criarPost">Criar novo post
                            <img className="icon_create" src="/images/create.svg" alt="icon_icon_create" />
                            </Link>
                        </div>
                        
                    </div>

                    <table className="tabela" >
                        <tr>
                            <th>Nome do Post</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>



                        <tr>
                            <td><p>Row 1, Cell 1</p></td>
                            <td>
                                <Link to="/editarPost">
                                    <img className="icon" src="/images/edit.svg" alt="icon_edit" />
                                </Link>
                                
                            
                            </td>

                            <td>
                                <Link to="/delete">
                                    <img className="icon" src="/images/delete.svg" alt="icon_delete" />
                                </Link>
                            </td>
                        </tr>



                    </table>
                    

                </div>
            </div>
        </div>
         
        </>
    )
}

export default Dashboard;