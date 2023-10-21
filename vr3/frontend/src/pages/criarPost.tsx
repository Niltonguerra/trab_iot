import React from 'react';
import { useState,useEffect,useCallback } from 'react';
import { FormElement, FormState, SubCampo,FormularioPostAPI,FormPostAPITopico,FormSubmitData,FormPostAPISubTopico } from '../types/types';
import { useForm, Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';



const CriarPost = () => {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const { control, handleSubmit } = useForm<FormState>(); // Usando a interface FormState

  const [form, setForm] = useState<FormElement[]>([]); // Usando a interface FormElement

  useEffect(() => {
    adicionarElemento();
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




    const [transformJson, setTransformJson] = useState<FormPostAPITopico>({});

    const onSubmit = async (data) => {







      const updatedTransformJson = { ...transformJson };
    
      form.forEach(async (item, index) => {
        const subTopicos: FormPostAPISubTopico = {};
    
        item.subCampos?.forEach((subcampo, subindex) => {
          subTopicos[subindex] = {
            idSubTopico: subindex,
            nomesubTopico: data[form[index]?.subCampos[subindex].subTituloForm],
            descricaosubTopico: data[form[index]?.subCampos[subindex].SubDescricaoForm],
          };
        });

          const APIFormTopico: FormPostAPITopico = {
            [index]: {
                idTopico: index,
                nomeTopico: data[form[index].tituloForm],
                descricaoTopico: data[form[index].tituloForm],
                foto: data[form[index].imagemForm],
                subTopico: subTopicos,
            },
          };
    
          // Adicione ao objeto atualizado
          Object.assign(updatedTransformJson, APIFormTopico);
        
      });
    


      setTransformJson(updatedTransformJson);
    
      const APIForm: FormularioPostAPI = {
        Nome: data.nomeDoAlimento,
        tipoDoAlimento: data.tipoDoAlimento,
        nomeCientifico: data.nomeCientifico,
        id_topico: updatedTransformJson,
      };
    
      const API = JSON.stringify(APIForm, null, 2);
      // console.log(API)
      // const bitmap = data[form[0].imagemForm];
      // console.log(bitmap);
      // console.log(data);
      


      // tentativa 02
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
// coisas importante que não devem ser excluidas até segunda ordem



// const onSubmit = (data: FormSubmitData) => {
//   metodo para charmar os dados:
//   console.log(data[form[0].tituloForm]);
//   console.log(data[form[0]?.subCampos[0].subTituloForm]);
//   console.log(data[form[0].imagemForm]);
//   console.log(data)

// };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const adicionarElemento = () => {

    const novoTituloName = `titulo-${uuidv4()}`;
    const novaDescricaoName = `descricao-${uuidv4()}`;
    const SubcampoTitulo = `subCampoTitulo-${uuidv4()}`;
    const SubcampoDescricao = `subCampoDescricao-${uuidv4()}`;
    const img = `imagem-${uuidv4()}`;

    
    const novoSubcampo: SubCampo = {
      subTituloForm:SubcampoTitulo,
      SubDescricaoForm:SubcampoDescricao
      
    };


    const novoElemento:FormElement = {
      tituloForm: novoTituloName,
      descricaoForm: novaDescricaoName,
      imagemForm:img,
      subCampos:[novoSubcampo],
      };
    
    setForm([...form, novoElemento ]);


  };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const adicionarSubcampo = (elementIndex:number) => {
  // Gere um novo ID único para o subcampo
  const SubcampoTitulo = uuidv4();
  const SubcampoDescricao = uuidv4();
  

  // Crie um novo subcampo com valores padrão (você pode personalizar isso)
  const novoSubcampo: SubCampo = {
    subTituloForm: SubcampoTitulo,
    SubDescricaoForm: SubcampoDescricao,
  };

  // Clone a matriz `form` para evitar mutações diretas no estado
  const novaForm = [...form];

  // Adicione o novo subcampo ao elemento específico na matriz `form`
  novaForm[elementIndex].subCampos.push(novoSubcampo);

  // Atualize o estado `form` com a nova matriz
  setForm(novaForm);
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Função para remover um elemento
const removerElemento = (index:number) => {
  const novoForm = [...form];
  novoForm.splice(index, 1);
  setForm(novoForm);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const excluirSubcampo = (elementIndex:number, subcampoIndex:number) => {
  // Clone a matriz `form` para evitar mutações diretas no estado
  const novaForm = [...form];

  // Acesse o elemento específico na matriz `form`
  const elemento = novaForm[elementIndex];

  // Verifique se o subcampoIndex está dentro dos limites do array de subcampos
  if (subcampoIndex >= 0 && subcampoIndex < elemento.subCampos.length) {
    // Remova o subcampo do array de subcampos
    elemento.subCampos.splice(subcampoIndex, 1);

    // Atualize o estado `form` com a nova matriz
    setForm(novaForm);
  }
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  return (

<div className="container--criar">
            <div className="container">
                <div className="conteudo">


    <h1 className='titulo'> FORMULARIO DE CRIAÇÃO DE POST</h1>


    <form onSubmit={handleSubmit(onSubmit)}>


    <div className='campo'>
      <label className='textCategoriaTitulo'>Nome do Alimento:</label>
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


    <div className='campo'>
      <label className='textCategoriaTitulo'>Nome Cientifico:</label>
      <Controller


        name={"nomeCientifico"}
        control={control}

        render={({ field }) => <textarea {...field} 
                                  placeholder="titulo da categoria" 
                                  className='categoriaTitulo' 
                                  required
                                />}
      />
    </div>




    <br />



    <div className='campo'>
    <label htmlFor="selectField">Tipo do Alimento:</label>
      <Controller
        name="tipoDoAlimento"
        control={control}
        defaultValue="" // Valor inicial, se necessário
        render={({ field }) => (
          <select  {...field}  required>
            <option className='campoSelect' value=""></option>
            <option className='campoSelect' value="vegetal">Vegetal</option>
            <option className='campoSelect' value="erva">Erva</option>
            <option className='campoSelect' value="fruta">Fruta</option>
          </select>
        )}
      />
    </div>



    <br />




<br /><br /><br />

      {form.map((item, index) => (
        
        
        
        <div key={index}>

          <h2 className='titulo'> Categoria: {index}</h2>

          
      <div>
        <label className='textCategoriaTitulo'>Imagem:</label>
        <Controller
          name={item.imagemForm}
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


          <div className='campo'>
            <label className='textCategoriaTitulo'>Título:</label>
            <Controller


              name={item.tituloForm}
              control={control}

              render={({ field }) => <textarea 
                                      {...field} placeholder="titulo da categoria" 
                                      className='categoriaTitulo' 
                                      required
                                      
                                      />}
            />
          </div>

          <div>
            <label>Descrição:</label>
            <Controller


              name={item.descricaoForm}
              control={control}


              render={({ field }) => <textarea 
                                      {...field} 
                                      placeholder="descricao da categoria" 
                                      className='textarea'   
                                      required
                                    />}
            />
          </div>

          {index === form.length - 1 && (
          <div className='caixaBtns'>
            <button 
              className='btnAdicionar' 
              onClick={() => removerElemento(index)}>
                Remover Categoria
            </button>

            <button 
              className='btnRemover' 
              onClick={() => adicionarElemento()}>
                Adicionar Categoria
            </button> 

          </div>

          )}
          
          <br /><br /><br />


          


          
          {item.subCampos.length > 0 && (
  <div>
            {item.subCampos.map((subcampo, subindex) => (
              
              
            
              
              <div key={subindex}>


                  <h3 className='titulo'> SubCategoria: {subindex}</h3>


                <div className='campo'>
                  <label  className='textCategoriaTitulo' >Subtítulo:</label>
                  <Controller


                    name={item.subCampos[subindex].subTituloForm}


                    control={control}
                    render={({ field }) => <textarea {...field} 
                                              className='categoriaTitulo' 
                                              placeholder="Subtítulo" 
                                              required
                                            />}
                  />
                </div>
              

                <div>
                  <label>Subdescrição:</label>
                  <Controller


                    
                    name={item.subCampos[subindex].SubDescricaoForm}

                    control={control}
                    render={({ field }) => <textarea 
                                              {...field} className='textarea' 
                                              placeholder="Subdescrição" 
                                              required
                                            />}
                  />
                </div>
                

                {subindex === item.subCampos.length - 1 && (
                <div className='caixaBtns'>

                  <button 
                    className='btnRemover' 
                    onClick={() => excluirSubcampo(index,subindex)}> 
                    Excluir subcampo 
                  </button>

                  <button 
                    className='btnAdicionar' 
                    onClick={() => adicionarSubcampo(index)}>
                      Adicionar subcampo 
                  </button>

                </div>

              )}

              </div>

            ))}
  </div>
)}


<br /><br /><br /><br /><br /><br />

        </div>

        
      ))} 
      <button className='btnenviar' type="submit">Enviar</button>
    </form> 
    
    
    
    </div></div></div>
  );
};

export default CriarPost;


