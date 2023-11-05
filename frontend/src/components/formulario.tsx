import { useForm, Controller } from 'react-hook-form';
import { fetchCriarForm } from '../API/formularioAPI';
import { FormularioAPI } from '../types/typesFormulario';

export default function FormularioProduct() {

    const { control, handleSubmit } = useForm(); 


    const onSubmit = async (data:any) => {

        const formularioAPI:FormularioAPI = {
            nome:data.nome,
            email:data.email,
            titulo:data.titulo,
            mensagem:data.mensagem
        }

        const api = JSON.stringify(formularioAPI)
        
        fetchCriarForm(api)


    }
















    return (

<div className="formulario">


    <h2>Sugestões</h2>
    <p>
        Caso tenha encontrado algum erro, ou tenha alguma sujestão por favor nós deixe uma mensagem. 😉  
    </p>
    <div className="split style1">
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="fields">


                <div className="field half">
                    <label htmlFor="name">Nome</label>
                    <Controller
                    name="nome"
                    control={control}
                    render={({ field }) => <input 
                                            {...field} 
                                            placeholder="digite seu email aqui!" 
                                            type="text"
                                            required
                                            />}
                    />
                </div>
                
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <input 
                                            {...field} 
                                            placeholder="digite seu email aqui!" 
                                            type="text"
                                            required
                                            />}
                    />
                </div>


                <div className="field"><br/>
                    <label htmlFor="title">Titulo</label>
                    <Controller
                    name="titulo"
                    control={control}
                    render={({ field }) => <textarea 
                                            {...field} 
                                            placeholder="digite o titulo do comentário" 
                                            required
                                            rows={1}
                                            name="message" id="message"
                                            />}
                    />
                </div>

                <div className="field"><br/>
                    <label htmlFor="message">mensagem</label>
                    <Controller
                    name="mensagem"
                    control={control}
                    render={({ field }) => <textarea 
                                            {...field} 
                                            placeholder="digite seu comentario!" 
                                            required
                                            rows={5}
                                            name="message" id="message"
                                            />}
                    />
                </div>

                </div>
                <ul className="actions">
                    <button>Enviar mensagem</button>
                </ul>
            </form>
        </section>





        <section>
            <ul className="contact">
                <li>
                    <h3>endereço</h3>
                    <span>12345 Rua das Maginolis Avenida Ulisses Bueno<br />
                    São Paulo, TN 00000-0000<br />
                    BR</span>
                </li>
                <li>
                    <h3>Email</h3>
                    <a href="#">niltondg.30@gmail.com</a><br/>
                    <a href="#">enzoTavares@gmail.com</a>
                </li>
                <li>
                    <h3>Phone</h3>
                    <span>(55) 1193231-3383</span>
                </li>
                <li>
                    <h3>Social</h3>
                    <ul className="icons">
                        <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                        <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</div>
    )
}