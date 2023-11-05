import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { fetchFormData, fetchFormRegistro } from '../API/formularioAPI';


const LerComentario = () => {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const [form,setForm] = useState()



// const fetchData = async () => {
//     try {
//       const dados = await fetchFormData();
//       setForm(dados);

//       const receitas = await fetchReceitasData();
//       console.log(receitas);
//     } catch (error) {
//       console.error("Erro ao buscar dados:", error);
//     }
//   };

// useEffect(() => {
    
//     fetchData(); // Chame a função assíncrona para buscar os dados
// }, []);



    const { control, setValue } = useForm(); // Usando a interface FormState

    const [form, setForm] = useState(); // Usando a interface FormElement

    const [dadoschegaram, setDadoschegaram] = useState(false); // Usando a interface FormElement
    
    const { idComentario } = useParams();




    const registrarDados = () => {

        fetchFormRegistro(idComentario)
        .then(data => {
            
        setForm(data)
        
        setDadoschegaram(true)
        
        

        })
        .catch(error => {
          // Lidar com erros
          console.error(error);
        });



        
};






useEffect(() => {
    // esse estado é alterado ao fim da função criarCampos
    if(dadoschegaram === false){
        registrarDados();
    }else{
        setValue("nome", form.nome);
        setValue("email", form.email);
        setValue("titulo", form.titulo);
        setValue("mensagem", form.mensagem);
    }

}, [dadoschegaram]);




return (

<div className="container--criar">
            <div className="container">
                <div className="conteudo">


    <h1 className='titulo'>Ler comentario </h1>


    <form>

    <div className="field half">
                    <label htmlFor="name">Nome</label>
                    <Controller
                    name="nome"
                    control={control}
                    render={({ field }) => <input 
                                            {...field} 
                                            placeholder="digite seu email aqui!" 
                                            type="text"
                                            value={field.value || ''}
                                            readOnly
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
                                            value={field.value || ''}
                                            readOnly
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
                                            rows={1}
                                            name="message" id="message"
                                            value={field.value || ''}
                                            readOnly
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
                                            rows={5}
                                            name="message" id="message"
                                            value={field.value || ''}
                                            readOnly
                                            />}
                    />
                </div>

    </form> 
    </div></div></div>
);
};

export default LerComentario;


