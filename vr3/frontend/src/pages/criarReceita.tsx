import React from 'react';
import { useState,useEffect } from 'react';
import { FormElement, FormState, ModoDePreparo, Ingredientes, ReceitaAPI } from '../types/types';
import { useForm, Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';



const CriarReceita = () => {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const { control, handleSubmit } = useForm<FormState>(); // Usando a interface FormState

  const [form, setForm] = useState<ModoDePreparo[]>([]); // Usando a interface FormElement

  
  const [ingredientes, setIngredientes] = useState<Ingredientes[]>([]); // Usando a interface FormElement


  const [funcaoExecutada, setFuncaoExecutada] = useState(false);

  useEffect(() => {

    if (!funcaoExecutada) {
      // Coloque aqui o código que você deseja executar apenas uma vez
      adicionarElemento();
      adicionarElementoingredientes();
      setFuncaoExecutada(true);
    }

    
  }, []);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




const handleImageUpload = (e) => {
  return new Promise((resolve) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        resolve(base64);
      };
      reader.readAsDataURL(file);
    }
  });
};






    const onSubmit = async (data) => {


      // transforma os dados na forma correta para enviar para o banco de dados
        // Transforme os dados do formulário em um objeto com a tipagem ReceitaAPI
        const receitaData: ReceitaAPI = {
          nome: data.nomeDoAlimento,
          foto: "data.imagem_receita",
          ingredientes: ingredientes.map((item) => ({ nome: data[item.ingredientes] })),
          modoDePreparo: form.map((item) => ({ passos: data[item.passos] })),
        };
      
        // Agora você pode usar o objeto receitaData como desejar
        
        const API = JSON.stringify(receitaData);
        console.log(JSON.stringify(receitaData, null, 2));


        // envia os dados para o baackend
      fetch('http://localhost:3000/receitas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Defina o tipo de conteúdo como JSON
        },
        body: API, // Converte o objeto API em JSON
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erro na solicitação'); // Trate erros de resposta aqui
          }
          return response.json(); // Converte a resposta em JSON
        })
        .then((data) => {
          console.log(data); // Faça algo com os dados
        })
        .catch((error) => {
          console.log(error); // Trate erros aqui
        });




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
    ingredientes: novoTituloName,
    };
  
  setIngredientes([...ingredientes, novoElemento ]);
};

// Função para remover um elemento
const removerElementoingredientes = (index:number) => {
  const novoForm = [...ingredientes];
  novoForm.splice(index, 1);
  setIngredientes(novoForm);
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  return (

<div className="container--criar">
            <div className="container">
                <div className="conteudo">


    <h1 className='titulo'> FORMULARIO DE CRIAÇÃO DE POST</h1>


    <form onSubmit={handleSubmit(onSubmit)}>


    <div className='campo'>
      <label className='textCategoriaTitulo'>Nome da Receita:</label>
      <Controller


        name={"nomeDoAlimento"}
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


    <div>
        <label className='textCategoriaTitulo'>Imagem:</label>
        <Controller
          name="imagem_receita"
          control={control}
          render={({ field }) => (
            <input
              type="file"
              onChange={async (e) => {
                const base64 = await handleImageUpload(e);
                
                field.onChange(base64);
              }}
              placeholder="Upload de imagem"
              required
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
              name={items.ingredientes}
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

export default CriarReceita;


