
function EditPost(){

    return (
        <>
        <div className="container--criar">
            <div className="container">
                <div className="conteudo">
                <h1 className="titulo">Editar Post</h1>

                <div className="NomePost">
                        <p className="text">Nome do post:</p>
                        <input type="name" className="inpute" />
                </div> 

                <div className="Curiosidade">
                        <p className="text">Curiosidade 01:</p>
                        <input type="name" className="inpute" />
                        <button className="adicionar" id="adicionar_">Adicionar mais uma curiosidade</button>
                </div> 

                <div className="Beneficios">
                        <p className="text">Benéficio 01:</p>
                        <input type="name" className="inpute" />
                        <button className="adicionar" id="adicionar_">Adicionar mais um benéficio</button>
                </div> 

                <div className="história">
                        <p className="text">fato histórico 01:</p>
                        <input type="name" className="inpute" />
                        <button className="adicionar" id="adicionar_">Adicionar mais um fato histórico</button>
                </div> 

                <div className="Receitas">
                        <p className="text">Receita 01:</p>
                        <input type="name" className="inpute" />
                        <button className="adicionar" id="adicionar_">Adicionar mais uma passo para o preparo</button>
                        <button className="adicionar" id="adicionar_">Adicionar mais uma receita</button>
                </div> 

                    








                    <button className="adicionar">enviar</button>
                </div>

            </div>
        </div>
        </>
    )
}

export default EditPost;