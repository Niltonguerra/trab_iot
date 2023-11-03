import React, { useState} from "react";

// import { useForm } from "react-hook-form";
import { Elemento, FormComponent } from '../types/types';

import { useForm, Controller } from "react-hook-form";
const { handleSubmit, control } = useForm();



export const CampoForm: React.FC<FormComponent> = (props) => {



      const valorSubCampo0 = {
        0: {
          subtopico: props.subtopicoTipo,
          SubTopicoConteudoCampo: props.SubTopicoConteudoCampo,
        },
      };



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [form, setForm] = useState<Elemento[]>([
        { tipo: props.tipo, dados: props.conteudoCampo, subcampo: valorSubCampo0 }
]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const atualizaTamanhoSubTopico =(index:number) => {
    const tamanhoDoSubcampo = Object.keys(form[index].subcampo).length;
    return tamanhoDoSubcampo;
}

//cria o setState
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    
//cria um novo campo do formulario 
    const adicionarElemento = () => {
            setForm([...form, { tipo: props.tipo, dados: props.conteudoCampo, subcampo: valorSubCampo0  }]);
    };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const adicionarSubElemento = (indexPai: number, indexFilho:number) => {
        const novoForm = form.map((item, index) => {

          if (index === indexPai) {

            // const numeroAleatorio = Math.random();
             const indexFilhonovo = indexFilho+1;

            // Este é o elemento pai, adicione o subelemento a ele
            const novoSubelemento = {

                [indexFilhonovo]: {
                subtopico: props.subtopicoTipo,
                SubTopicoConteudoCampo: props.SubTopicoConteudoCampo,
                } 
              };
              return { ...item, subcampo: {...item.subcampo, ...novoSubelemento}  };
          }
          return item;
        });
        setForm(novoForm);
      };


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //   Função para atualizar os dados de um elemento
const atualizarDadosElemento = (
    index: number,
    valor: string) => {
            const novosDados = [...form];
            novosDados[index].dados = valor;
            setForm(novosDados);
            enviarDados(index);

};



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const atualizarDadosSubElemento = (
    indexFilho: number,
    valor: string,
    indexPai:number) => {

            const novosDados = [...form];
            novosDados[indexPai].subcampo[indexFilho].SubTopicoConteudoCampo = valor;
            setForm(novosDados);
            // enviarDados(index);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const enviarDados = (index: number) => {

    const novoElemento: Elemento = {
        tipo: props.tipo,
        dados: form[index].dados,
    };

    // Chama a função que foi passada como prop do componente pai
    props.enviarDadosParaPai(novoElemento,index);
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  // Função para remover um elemento
const removerElemento = (index: number) => {
        const novosDados = [...form];
        novosDados.splice(index, 1);
        setForm(novosDados);
        
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const removerSubElemento = (
//     indexFilho: number,
//     indexPai:number
//     ) => {
//     const novosDados = [...form];
//     novosDados[indexPai].subcampo.splice(indexFilho, 1);
//     setForm(novosDados);

// };


const removerSubElemento = (indexFilho: number, indexPai: number) => {
    const novosDados = [...form];
    novosDados[indexPai] = {
        ...novosDados[indexPai],
        subcampo: {
            ...novosDados[indexPai].subcampo
        }
    };
    delete novosDados[indexPai].subcampo[indexFilho];
    setForm(novosDados);
};




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


return(
<>

{console.log(form)}
<form onSubmit={handleSubmit()}>
  {form.map((item, index) => (
    <div key={index}>
      <div>
        <h4>{props.tipo}:{index} </h4>
        <Controller
          name={`form[${index}].dados`}
          control={control}
          defaultValue={item.dados}
          render={({ field }) => (
            <textarea
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <button onClick={() => removerElemento(index)}>Remover</button>
        {index === form.length - 1 && (
          <button onClick={() => adicionarElemento()}>Adicionar {props.tipo}</button>
        )}
        
        {Object.keys(item.subcampo).map((subindex) => (
          <div key={subindex}>
            <div>
              <h4>{props.subtopicoTipo}:{subindex} </h4>
              <Controller
                name={`form[${index}].subcampo[${subindex}].SubTopicoConteudoCampo`}
                control={control}
                defaultValue={item.subcampo[subindex]?.SubTopicoConteudoCampo}
                render={({ field }) => (
                  <textarea
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />

              
              {subindex === atualizaTamanhoSubTopico(index) - 1 &&  (
                <button onClick={() => removerSubElemento(subindex, index)}>Remover</button>
              )} 
              {subindex === atualizaTamanhoSubTopico(index) - 1 &&  (
                <button onClick={() => adicionarSubElemento(index, subindex)}>Adicionar {props.subtopicoTipo}</button>
              )} 
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</form>








</>  

)
} 





















