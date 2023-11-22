import { Controller, useForm } from "react-hook-form";
import { Link,useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver  } from "@hookform/resolvers/zod";



const zodLoginUserFormSchema = z.object({
  nome: z.string().nonempty('o nome é obrigatório')
  .min(4,'4 caracteres é o minimo'),

  senha: z.string()
  .nonempty('a senha é obrigatório')
  .min(4,'4 caracteres é o minimo'),

});

type LoginUserFormSchema = z.infer<typeof zodLoginUserFormSchema>;



// Defina um esquema para validar os dados de entrada


function Login() {

  const navegate = useNavigate();

  const { control, 
    handleSubmit,
    formState:{errors} } 
    = useForm<LoginUserFormSchema>({
    resolver: zodResolver(zodLoginUserFormSchema),
  }); // Usando a interface FormState

  const onSubmit = async (data:any) => {
    
      // Verifique se o nome e a senha são "admin"
      if (data.nome === "admin" && data.senha === "admin") {
        // Redirecione o usuário para a página desejada
        navegate("/dashboardPost"); // Altere para a URL correta
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

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formulario">
                <div className="texto">
                  <div className="nome">
                    <p className="text">Nome</p>
                      <Controller
                        name="nome"
                        control={control}
                        render={({ field }) => <input
                                                  {...field} 
                                                  className="inpute"
                                                  type="text"
                                                  id="nome"
                                                  placeholder="Digite seu nome"
                                                  required
                                                />}
                      />
                    {errors.nome && <h6 className="error">{errors.nome.message}</h6>}
                    
                  </div>

                  <div className="senha">
                    <p className="text">Senha</p>
                    <Controller
                        name="senha"
                        control={control}
                        render={({ field }) => <input
                                                  {...field} 
                                                  className="inpute"
                                                  type="password" 
                                                  id="senha" 
                                                  placeholder="Digite sua senha"
                                                  required
                                                />}
                      />
                    {errors.senha && <h6 className="error">{errors.senha.message}</h6>}
                  </div>
                </div>

                <Link className="esqueceu--senha" to="/esqueciMinhaSenha">
                  esqueceu sua senha?
                </Link>
                {/* Adicione um evento onClick no botão para chamar a função handleLogin */}
                <button className="botao" id="btn" >Entrar</button>

              </div>
          </form>

        </div>

        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
