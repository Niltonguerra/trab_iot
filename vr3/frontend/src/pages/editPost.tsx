import React from 'react';
import { useState,useEffect,useCallback } from 'react';
import { FormElement, FormState, SubCampo,FormularioPostAPI,FormPostAPITopico,FormSubmitData,FormPostAPISubTopico } from '../types/types';
import { useForm, Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';





const EditPost = () => {



    const { control, handleSubmit } = useForm<FormState>(); // Usando a interface FormState


    const onSubmit = async (data) => {
    
        const nomeParaExcluir = "Pera";
    
        fetch(`http://localhost:3000/deletarPorNome/${nomeParaExcluir}`, {
          method: 'DELETE',
        })
          .then(response => {
            if (response.status === 200) {
              console.log("Registro deletado com sucesso.");
            } else if (response.status === 404) {
              console.error("Registro não encontrado.");
            } else {
              console.error("Erro ao deletar o registro.");
            }
          })
          .catch(error => {
            console.error("Erro na solicitação:", error);
          });
    };





    return (
        <>
        <div className="container--criar">
            <div className="container">
                <div className="conteudo">
                
                <form onSubmit={handleSubmit(onSubmit)}>


    <div className='campo'>
    <label className='textCategoriaTitulo'>Nome do Alimento:</label>
    <Controller
        name="teste"
        control={control}

        render={({ field }) => <textarea 
                                    {...field} 
                                    placeholder="titulo da categoria" 
                                    className='categoriaTitulo' 
                                    
                                />}
    />
    </div>

                    

                    <button className="adicionar">enviar</button>
                </form>

                    
                </div>

            </div>
        </div>
        </>
    )
}

export default EditPost;