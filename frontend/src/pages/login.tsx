import { Link } from "react-router-dom";

function Login() {
  // Função para lidar com o clique no botão de entrada
  const handleLogin = () => {


    // Obtenha os valores dos campos de nome e senha 
    const nome = (document.getElementById("nome") as HTMLInputElement)?.value;
    const senha = (document.getElementById("senha") as HTMLInputElement)?.value;


    // Verifique se o nome e a senha são "admin"
    if (nome === "admin" && senha === "admin") {
      // Redirecione o usuário para a página desejada
      window.location.href = "/dashboardPost"; // Altere para a URL correta
    } else {
      // Exiba uma mensagem de erro se o login for inválido
      alert("Nome de usuário ou senha incorretos.");
    }
  };

  return (

    
    <div className="container--login">
      <div className="login">
        <div className="conteudo">
          <div className="logo">
            <img className="logo img" src="images/logo.png" alt="logo" />
          </div>

          a senha e o login são: admin
          <div className="texto">
            <div className="nome">
              <p className="text">Nome</p>
              <input className="inpute" type="text" id="nome" placeholder="Digite seu nome" />
            </div>

            <div className="senha">
              <p className="text">Senha</p>
              <input className="inpute" type="password" id="senha" placeholder="Digite sua senha" />
            </div>
          </div>

          <Link className="esqueceu--senha" to="/esqueciMinhaSenha">
            esqueceu sua senha?
          </Link>
        </div>

        <div>
          {/* Adicione um evento onClick no botão para chamar a função handleLogin */}
          <button className="botao" id="btn" 
          onClick={handleLogin}
          >
            {/* Entrar */}
            {/* <Link to={`/dashboardPost`}>
          Logar-se
          </Link> */}
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
