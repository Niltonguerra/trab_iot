
function EsqueciMinhaSenha(){

    return (
        <>
        <div className="container--esqueci--senha">
            <div className="container">
                <div className="conteudo">

                    <div className="text">
                        <p className="descricao">Digite o seu email cadastrado:</p>
                        <input type="email" className="email" />
                    </div>    

                    
                    <button className="botao">enviar</button>
                    

                </div>
            </div>
        </div>
        </>
    )
}

export default EsqueciMinhaSenha;