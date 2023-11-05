
import { useState,useEffect} from 'react';
import { FormElement, SubTopico, FormPostAPITopico, FormPostAPISubTopico,FormPostDataOnSubmit } from '../types/typesAlimentos';
import { useForm, Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import  {fetchAlimentosRegistro,editardadosAlimento} from "../API/alimentos"
import { useParams } from 'react-router-dom';
import { imgbbUmaImagem } from '../API/imgbb';




const EditPost = () => {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const { control, handleSubmit,setValue } = useForm<any>(); // Usando a interface FormState

  // const [form, setForm] = useState<FormElement[]>([]); // Usando a interface FormElement

  const [form, setForm] = useState<any>([]); // Usando a interface FormElement

  // dado enviado da outra pagina para esse formulario para permitir a edição dos dados
  const { nomeDoAlimentoEdit } = useParams();






























/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  // tratamento dos campos para pegar as informações do banco de dados e criar e colocar os campos no formulario 
  // e colocar as informações buscadas do banco de dados nos campos criados ainda nessa sessão de código
  
  // const [alimentosData, setAlimentosData] = useState<FormPostDataOnSubmit>();
  const [alimentosData, setAlimentosData] = useState<any>();
  const [confirDadosChegaram,setConfirDadosChegaram] = useState<boolean>(false);
  const [confirCamposRenderizados,setConfirCamposRenderizados] = useState<boolean>(false);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  useEffect(() => {

    
    // esse estado é alterado ao fim da função fetchData
    if(!confirDadosChegaram){
      fetchData(nomeDoAlimentoEdit!);
      
    }
    else{
        criarCampos();
    }
    
  }, [confirDadosChegaram]);
  








  useEffect(() => {
    // esse estado é alterado ao fim da função criarCampos
    if(confirCamposRenderizados){
      registrarDados();
    }

  }, [confirCamposRenderizados]);
      










  const fetchData = async (nome:string) => {
    try {
      const data = await fetchAlimentosRegistro(nome);
      setAlimentosData(data as FormPostDataOnSubmit); // Atualize o estado com os dados
      
      setConfirDadosChegaram(true)
      
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const criarCampos = () => {
    try {
      const idTopico = alimentosData!.id_topico;
      const elementosComSubcampos = []; // Crie um array temporário para conter elementos com subcampos
  
      for (let index = 0; index < idTopico.length; index++) {
        // console.log(index + "campo");
  
        const novoTituloName = `titulo-${uuidv4()}`;
        const novaDescricaoName = `descricao-${uuidv4()}`;
        const img = `imagem-${uuidv4()}`;
  
        const novoElemento: FormElement = {
          tituloForm: novoTituloName,
          descricaoForm: novaDescricaoName,
          imagemForm: img,
          subCampos: [],
        };
  
        const idSubTopico = alimentosData!.id_topico[index].subTopico;
  
        for (let subindex = 0; subindex < idSubTopico.length; subindex++) {
          // console.log(subindex + "subcampo");
  
          const SubcampoTitulo = uuidv4();
          const SubcampoDescricao = uuidv4();
  
          const novoSubcampo: SubTopico = {
            subTituloForm: SubcampoTitulo,
            SubDescricaoForm: SubcampoDescricao,
          };
  
          // novoElemento.subCampos.push(novoSubcampo);
          if (novoElemento.subCampos) {
            novoElemento.subCampos.push(novoSubcampo);
          }
        }
  
        // Adicione o elemento com subcampos ao array temporário
        elementosComSubcampos.push(novoElemento);
      }
  
      // Clone a matriz `form` para evitar mutações diretas no estado
      const novaForm = [...form];
  
      // Adicione todos os elementos com subcampos a `novaForm`
      novaForm.push(...elementosComSubcampos);
  
      // Atualize o estado `form` com a nova matriz
      setForm(novaForm);




      setConfirCamposRenderizados(true);
      
      
    } catch (error) {
      console.error("Erro ao buscar dados:", error);


      
    }
  };
  


const registrarDados = () => {

      // preenchendo os campos já criados na etapa anterior

      setValue("nomeDoAlimento", alimentosData?.nome);
      setValue("nomeCientifico", alimentosData?.nomeCientifico)
      setValue("tipoDoAlimento", alimentosData?.tipoDoAlimento)
      setValue("descricaoVegetal", alimentosData?.descricaoVegetal)
      




      
      const idTopico = alimentosData?.id_topico;


      if(idTopico){
        
      for (let index = 0; index < idTopico.length; index++) {
        const idSubTopico = alimentosData?.id_topico[index]?.subTopico;
  

        // console.log(index + "campo");


        setValue(form[index]?.tituloForm, alimentosData?.id_topico[index]?.nomeTopico)
        setValue(form[index]?.descricaoForm, alimentosData?.id_topico[index]?.descricaoTopico)

        
        for (let subindex = 0; subindex < idSubTopico.length; subindex++) {
          // console.log(subindex + "subcampo");
          setValue(form[index]?.subCampos[subindex]?.subTituloForm, alimentosData?.id_topico[index]?.subTopico[subindex].nomesubTopico)
          setValue(form[index]?.subCampos[subindex]?.SubDescricaoForm, alimentosData?.id_topico[index]?.subTopico[subindex].descricaosubTopico)
          
        
        }
      }

    }

};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
















































/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// faz o tratamento dos dados do react hook form para deixalos no formato adequado para depois enviar os dados para 
// o banco de dados MongoDB



    const [transformJson, setTransformJson] = useState<FormPostAPITopico>({});


    
    const onSubmit = async (data:any) => {
      const updatedTransformJson = { ...transformJson };
    
      // Crie um array de promessas
      const promises = form.map(async (item:any, index:number) => {
        const subTopicos: FormPostAPISubTopico = {};
    
        item.subCampos?.forEach((subcampo:any, subindex:number) => {
          
          subTopicos[subindex] = {
            idSubTopico: subindex,
            nomesubTopico: data[form[index]?.subCampos[subindex].subTituloForm],
            descricaosubTopico: data[form[index]?.subCampos[subindex].SubDescricaoForm],
          };

          subcampo = subcampo+subcampo;
        });
    
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        let imagemReceita;

        if (fileInput?.files && fileInput.files[0]) {
          imagemReceita = await imgbbUmaImagem(fileInput.files[0]);
        } else if (alimentosData && alimentosData.id_topico[index]) {
          
            imagemReceita = alimentosData.id_topico[index]?.foto;
          
          
        }


        
    
        const APIFormTopico = {
          [index]: {
            idTopico: index,
            nomeTopico: data[form[index].tituloForm],
            descricaoTopico: data[form[index].tituloForm],
            foto: imagemReceita,
            subTopico: subTopicos,
          },
        };
    
        Object.assign(updatedTransformJson, APIFormTopico);
      });
    
      // Aguarde todas as promessas serem resolvidas
      await Promise.all(promises);

      setTransformJson(updatedTransformJson);

      const APIForm = {
        nome: data.nomeDoAlimento,
        tipoDoAlimento: data.tipoDoAlimento,
        nomeCientifico: data.nomeCientifico,
        descricaoVegetal: data.descricaoVegetal,
        id_topico: updatedTransformJson,
      };

      const API = JSON.stringify(APIForm);

// console.log(data[form[0]?.tituloForm]);
      if (nomeDoAlimentoEdit) {
        editardadosAlimento(API, nomeDoAlimentoEdit);
      }
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// tratamento para criar e deletar campos e subcampos do formulario


  const adicionarElemento = () => {
    // await delay(1000);
    const novoTituloName = `titulo-${uuidv4()}`;
    const novaDescricaoName = `descricao-${uuidv4()}`;
    const SubcampoTitulo = `subCampoTitulo-${uuidv4()}`;
    const SubcampoDescricao = `subCampoDescricao-${uuidv4()}`;
    const img = `imagem-${uuidv4()}`;

    
    const novoSubcampo: SubTopico = {
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


  // await delay(1000);
  // Gere um novo ID único para o subcampo
  const SubcampoTitulo = uuidv4();
  const SubcampoDescricao = uuidv4();
  

  // Crie um novo subcampo com valores padrão (você pode personalizar isso)
  const novoSubcampo: SubTopico = {
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


// transforma a imagem em string64 antes de enviar ela para o react hook form
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










































/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// formulario:


  return (

    

<div className="container--criar">
            <div className="container">
                <div className="conteudo">

                
    <h1 className='titulo'> FORMULARIO DE EDIÇÃO DE POST</h1>


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

    <div className='campo'>
            <label className='textCategoriaTitulo'>Descrição do Vegetal:</label>
            <Controller


              name="descricaoVegetal"
              control={control}

              render={({ field }) => <textarea 
                                      {...field} placeholder="uma preve descricao do vegetal" 
                                      className='categoriaTitulo' 
                                      required
                                      
                                      />}
            />
    </div>


<br /><br /><br />

      {form.map((item:any, index:number) => (
        
        
        
        <div key={index}>

          <h2 className='titulo'> Categoria: {index}</h2>

          

      <div>
        <label className='textCategoriaTitulo'>Imagem:</label>
        <h4 className='textCategoriaTitulo'>caso queira trocar a imagem é só selecionar ela aqui:</h4>
        <Controller
          name={item.imagemForm}
          control={control}
          render={({ field }) => (
                                  <input {...field} 
                                    id={item.imagemForm}
                                    type='file'
                                    accept="image/*"
                                    placeholder="Upload de imagem"
                                    value={field.value || ''}
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
            {item.subCampos.map((subcampo:any, subindex:number) => (
              
              
            
              
              <div key={subindex}>

                  <p className={subcampo} ></p>
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

export default EditPost;


