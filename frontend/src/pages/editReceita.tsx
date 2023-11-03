import React from 'react';
import { useState,useEffect } from 'react';
import {ModoDePreparo, Ingredientes, ReceitaAPI } from '../types/typesReceitas';
import { useForm, Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { editardadosReceitas, fetchReceitasRegistro } from '../API/receitas';
import { useParams } from 'react-router-dom';
import { imgbbUmaImagem } from '../API/imgbb';

const EditReceita = () => {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  const { nomeDaReceitaEdit } = useParams();
  const { control, handleSubmit,setValue } = useForm(); // Usando a interface FormState

  const [form, setForm] = useState<ModoDePreparo[]>([]); // Usando a interface FormElement
  const [ingredientes, setIngredientes] = useState<Ingredientes[]>([]); // Usando a interface FormElement




  const [dadoRecebidoDoBanco,setDadoRecebidoDoBanco] =  useState();
  const [funcaoExecutada, setFuncaoExecutada] = useState(false);
  const [confirCamposRenderizados,setConfirCamposRenderizados] = useState(false);
  



  const fetchData = async (nome:string) => {
    try {
      const data = await fetchReceitasRegistro(nome);
      setDadoRecebidoDoBanco(data); // Atualize o estado com os dados
      
      setFuncaoExecutada(true)
      
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };


  const criarCampos = async () => {
    try {


      const pass = dadoRecebidoDoBanco.modoDePreparo;
      const passosArray = []; // Crie um array temporário para conter elementos com subcampos
  
      
      for (let index = 0; index < pass.length; index++) {
        // console.log(index + "campo");
        const novoPasso = `passo-${uuidv4()}`;

        const novoElemento: ModoDePreparo = {
          passos: novoPasso,
        };

        // Adicione o elemento com subcampos ao array temporário
        passosArray.push(novoElemento);

      }

      // Clone a matriz `form` para evitar mutações diretas no estado
      const novaForm = [...form];
      // Adicione todos os elementos com subcampos a `novaForm`
      novaForm.push(...passosArray);
      
      // Atualize o estado `form` com a nova matriz
      setForm(novaForm);




      const ingred = dadoRecebidoDoBanco.ingredientes;
      const ingredArray = [];

      for (let index = 0; index < ingred.length; index++) {

        const novoTituloName = `ingrediente-${uuidv4()}`;
        
        const novoElemento:Ingredientes = {
          nome: novoTituloName,
        };
        // Adicione o elemento com subcampos ao array temporário
        ingredArray.push(novoElemento);
      }

      // Clone a matriz `form` para evitar mutações diretas no estado
      const novaIngredientes = [...ingredientes];
      // Adicione todos os elementos com subcampos a `novaForm`
      novaIngredientes.push(...ingredArray);

      // Atualize o estado `form` com a nova matriz
      setIngredientes(novaIngredientes);
      
      setConfirCamposRenderizados(true);      
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      
    }
  };





  const registrarDados = () => {

    // preenchendo os campos já criados na etapa anterior

    setValue("nomeDaReceita", dadoRecebidoDoBanco.nome);
    setValue("tempoDePreparo", dadoRecebidoDoBanco.tempoDePreparo);

    const ingred = dadoRecebidoDoBanco.ingredientes;
    
    for (let index = 0; index < ingred.length; index++) {
      setValue(ingredientes[index].nome, ingred[index].nome)
    }


    const pass = dadoRecebidoDoBanco.modoDePreparo;
    
    for (let index = 0; index < pass.length; index++) {
      setValue(form[index].passos, pass[index].passos)
    }




};






  useEffect(() => {

    if (!funcaoExecutada) {
      // Coloque aqui o código que você deseja executar apenas uma vez
      fetchData(nomeDaReceitaEdit);
    }
    else{
      criarCampos();
    }

    
  }, [funcaoExecutada]);




  useEffect(() => {
    // esse estado é alterado ao fim da função criarCampos
    if(confirCamposRenderizados){
      registrarDados();
    }

  }, [confirCamposRenderizados]);
      


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// const handleImageUpload = (e) => {
//   return new Promise((resolve) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const base64 = e.target.result;
//         resolve(base64);
//       };
//       reader.readAsDataURL(file);
//     }
//   });
// };






    const onSubmit = async (data) => {

      const fileInput = document.getElementById('imagem_receita');
      const file = fileInput.files[0];
    

      let imagem = await imgbbUmaImagem(file);

      if(imagem === undefined) {
        imagem = dadoRecebidoDoBanco?.foto;
      }



      // transforma os dados na forma correta para enviar para o banco de dados
        // Transforme os dados do formulário em um objeto com a tipagem ReceitaAPI
        const receitaData: ReceitaAPI = {
          nome: data.nomeDaReceita,
          tempoDePreparo: data.tempoDePreparo,
          foto: imagem,
          ingredientes: ingredientes.map((item) => ({ nome: data[item.nome] })),
          modoDePreparo: form.map((item) => ({ passos: data[item.passos] })),
        };
      
        // Agora você pode usar o objeto receitaData como desejar
        
        const API = JSON.stringify(receitaData);
        // console.log(JSON.stringify(receitaData, null, 2));


        editardadosReceitas(API,nomeDaReceitaEdit)


    };
    


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Passos de preparo
  const adicionarElemento = () => {

    const novoTituloName = `passo-${uuidv4()}`;

    const novoElemento:ModoDePreparo = {
      passos: novoTituloName,
      };
    
    setForm([...form, novoElemento ]);


  };

// Função para remover um elemento
const removerElemento = (index:number) => {
  const novoForm = [...form];
  novoForm.splice(index, 1);
  setForm(novoForm);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ingredientes
const adicionarElementoingredientes = () => {

  const novoTituloName = `ingrediente-${uuidv4()}`;

  const novoElemento:Ingredientes = {
    nome: novoTituloName,
    };
  
  setIngredientes([...ingredientes, novoElemento ]);
};

// Função para remover um elemento
const removerElementoingredientes = (index:number) => {
  const novoingredientes = [...ingredientes];
  novoingredientes.splice(index, 1);
  setIngredientes(novoingredientes);
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  return (

<div className="container--criar">
            <div className="container">
                <div className="conteudo">


    <h1 className='titulo'> FORMULARIO DE EDIÇÃO DE RECEITA</h1>


    <form onSubmit={handleSubmit(onSubmit)}>


    <div className='campo'>
      <label className='textCategoriaTitulo'>Nome da Receita:</label>
      <Controller


        name="nomeDaReceita"
        control={control}

        render={({ field }) => <textarea 
                                  {...field} 
                                  placeholder="titulo da categoria" 
                                  className='categoriaTitulo' 
                                  required
                                />}
      />
    </div>

    <br />


    <div className='campo'>
          <label className='textCategoriaTitulo'>Tempo de preparo da Receita:</label>
          <Controller


            name="tempoDePreparo"
            control={control}

            render={({ field }) => 
                                  
                                  <input  {...field} 
                                  type="time" 
                                  className='tempoDePreparo' 
                                  min="00:00" max="18:00" 
                                  value={field.value || '00:00'}
                                  required />

                                  }
          />
        </div>









    <br />


    <div>
        <label className='textCategoriaTitulo'>Imagem:</label>
        <h4 className='textCategoriaTitulo'>caso queira trocar a imagem é só selecionar ela aqui:</h4>
        <Controller
          name="imagem_receita"
          control={control}
          render={({ field }) => (
                                  <input {...field} 
                                    id='imagem_receita'
                                    type='file'
                                    accept="image/*"
                                    placeholder="Upload de imagem"
                                    

                                    value={field.value || ''}
                                  />
                                )}
        />
      </div> 
    
    <br />




<br /><br /><br />





{ingredientes.map((items, posicao) => (
        
        <div key={posicao}>
          <div><br/>
            <label className='textIngredientes'>Ingredientes {posicao}:</label>

            <Controller
              name={items.nome}
              control={control}
              render={({ field }) => <textarea
                                      {...field} 
                                      placeholder="Coloque os ingredientes separadamente nos campos" 
                                      className='inputIngredientes' 
                                      required
                                      />}
            />
          </div>

          {posicao === ingredientes.length - 1 && (
          <div className='caixaBtns'>
            
            <button 
              className='btnRemover' 
              onClick={() => removerElementoingredientes(posicao)}>
                Remover passo
            </button>


            <button 
              className='btnAdicionar' 
              onClick={() => adicionarElementoingredientes()}>
                Adicionar passo
            </button> 
          </div>
          )}
          
        </div>
        
      ))} 


      {form.map((item, index) => (
        
        <div key={index}>
          <div><br/>
            <label className='textCategoriaTitulo'>Passo {index}:</label>
            <Controller
              name={item.passos}
              control={control}
              render={({ field }) => <textarea 
                                      {...field} 
                                      placeholder="Descreva passo a passo como é realizado a receita" 
                                      className='categoriaTitulo' 
                                      required
                                      />}
            />
          </div>
          {index === form.length - 1 && (
          <div className='caixaBtns'>

            <button 
              className='btnRemover' 
              onClick={() => removerElemento(index)}>
                Remover passo
            </button>


            <button 
              className='btnAdicionar' 
              onClick={() => adicionarElemento()}>
                Adicionar passo
            </button> 
          </div>
          )}
          
        </div>
        
      ))} 











      <button className='btnenviar' type="submit">Enviar</button>



    </form> 
    </div></div></div>
  );
};

export default EditReceita;


