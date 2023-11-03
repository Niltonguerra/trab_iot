import { Link } from "react-router-dom";

 function Login(){
   
   
    return (
        <div className="container--login">
            <div className="login">
                <div className="conteudo">
                
                <div className="logo"> <img className="logo img" src="images/logo.png" alt="logo" /></div>
                
                <div className="texto">
                    
                <div className="nome">
                    <p className="text">Nome</p>
                    <input className="inpute" type="text"  placeholder="Digite seu nome" />
                </div>


                <div className="senha">
                    <p className="text"> Senha</p>
                    <input className="inpute" type="password" placeholder="Digite sua senha" />
                </div>

                </div>

                <Link className="esqueceu--senha" to="/esqueciMinhaSenha">esqueceu sua senha?</Link>

                </div>

                <div> 
                    <button className="botao">Entrar</button>
                </div>


            </div>
        </div>
    )
} 
export default Login;