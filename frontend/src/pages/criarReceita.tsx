import { useState,useEffect } from 'react';
import { ModoDePreparo, Ingredientes, ReceitaAPI } from '../types/typesReceitas';
import { useForm, Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { criarPostReceita } from '../API/receitas';
import { imgbbUmaImagem } from '../API/imgbb';



const CriarReceita = () => {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const { control, handleSubmit } = useForm(); // Usando a interface FormState

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




// const handleImageUpload = (e:any) => {
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

const onSubmit = async (data:any) => {
  try {

    const fileInput = document.getElementById('imagem_receita') as HTMLInputElement | null;
    const file = fileInput?.files ? fileInput.files[0] : null;


    let imagemReceita;

    if (file) {
      imagemReceita = await imgbbUmaImagem(file);
      
    } else {
      console.error('Arquivo não selecionado');
    }



    const receitaData: ReceitaAPI = {
      nome: data.nome,
      foto: imagemReceita ?? "foto não preenchida no campo foto no frontend",
      tempoDePreparo: data.tempoDePreparo,
      ingredientes: ingredientes.map((item) => ({ nome: data[item.nome] })),
      modoDePreparo: form.map((item) => ({ passos: data[item.passos] })),
    };

    const API = JSON.stringify(receitaData);

    // console.log(JSON.stringify(receitaData, null, 2));

    criarPostReceita(API);



  } catch (error) {
    console.error('Erro ao obter imagem do ImgBB: ' + error);
  }
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
  const novoForm = [...ingredientes];
  novoForm.splice(index, 1);
  setIngredientes(novoForm);
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  return (

<div className="container--criar">
            <div className="container">
                <div className="conteudo">


    <h1 className='titulo'> FORMULARIO DE CRIAÇÃO DE RECEITA</h1>


    <form onSubmit={handleSubmit(onSubmit)}>


    <div className='campo'>
      <label className='textCategoriaTitulo'>Nome da Receita:</label>
      <Controller


        name="nome"
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
        <Controller
          name="imagem_receita"
          control={control}
          render={({ field }) => (
                                  <input {...field} 
                                    id='imagem_receita'
                                    type='file'
                                    accept="image/*"
                                    placeholder="Upload de imagem"
                                    required

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
            <label className='textIngredientes'>Ingrediente {posicao}:</label>

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
                Remover ingrediente
            </button>


            <button 
              className='btnAdicionar' 
              onClick={() => adicionarElementoingredientes()}>
                Adicionar ingrediente
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


