import React from 'react';
import { useState } from 'react';
import { Elemento, FormComponent,SubCampo } from '../types/types';



const CriarPost: React.FC<FormComponent> = () => {



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




const valorSubCampo0: { [key: number]: SubCampo } = {
  0: {
    subtopico: "exemplo:titulo do subitem",
    SubTopicoConteudoCampo: "exemplo:descrição do subitem",
  },
};



const elementoInicial: Elemento = {

exemplo:{
  tipo: 'exemplo:titulo do item',  
  dados: 'exemplo:descreva o item', 
  subcampo: valorSubCampo0, 
}

};




const [form, setForm] = useState<Elemento[]>([elementoInicial]);






// Função para adicionar um novo elemento ao estado form
// const adicionarNovoElemento = (categoria:object) => {

//   const novoElemento = {

//         tipo: categoria.tipo,
//         dados: categoria.conteudoCampo,
//         subcampo: {
//           subtopico: categoria.subtopicoTipo,
//           SubTopicoConteudoCampo: categoria.SubTopicoConteudoCampo,
//     },
//   };

//   setForm([...form, novoElemento]);
// };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// const atualizaTamanhoSubTopico =(index:number) => {
// const tamanhoDoSubcampo = Object.keys(form[index].subcampo).length;
// return tamanhoDoSubcampo;
// }

//cria o setState

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//cria um novo campo do formulario 
const adicionarElemento = (categoria:string) => {
      setForm([...form.categoria, { tipo: "props.tipo", dados: "props.conteudoCampo", subcampo: valorSubCampo0  }]);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const adicionarSubElemento = (indexPai: number, indexFilho:number,categoria:string) => {
  const novoForm = form.map((item, index) => {

    if (index === indexPai) {

      // const numeroAleatorio = Math.random();
       const indexFilhonovo = indexFilho+1;

      // Este é o elemento pai, adicione o subelemento a ele
      const novoSubelemento = {

          [indexFilhonovo]: {
          subtopico: "novo titulo de subitem",
          SubTopicoConteudoCampo: "nova descrição de subitem",
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
      
      props.enviarDadosParaPai(form)

};



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const atualizarDadosSubElemento = (
indexFilho: number,
valor: string,
indexPai:number) => {

      const novosDados = [...form];
      novosDados[indexPai].subcampo[indexFilho].SubTopicoConteudoCampo = valor;
      setForm(novosDados);

      props.enviarDadosParaPai(form)
};



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// Função para remover um elemento
const removerElemento = (index: number,categoria:string) => {
  const novosDados = [...form.categoria];
  novosDados.splice(index, 1);
  setForm(novosDados);
  
  // props.excluirDadosJsonItem(index)
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const removerSubElemento = (indexFilho: number, indexPai: number,categoria:string) => {

const novosDados = [...form.categoria];

novosDados[indexPai] = {
  ...novosDados[indexPai],
  subcampo: {
      ...novosDados[indexPai].subcampo
  }
};


delete novosDados[indexPai].subcampo[indexFilho];

setForm(novosDados);

// props.excluirDadosJsonSubItem?.(indexPai, indexFilho)
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <>
          {form.map((item, index) => (
            <div key={index}>
            <div>
                <h4>{props.tipo}:{index} </h4>




                <textarea
                placeholder={props.conteudoCampo}
                name={props.tipo + '_'+{index}}
                onBlur={(e) => atualizarDadosElemento(index, e.target.value)}
                />



                <button onClick={() => removerElemento(index)}>Remover</button>
                {index === form.length - 1 && (
                <button onClick={() => adicionarElemento()}>Adicionar {props.tipo}</button>
                )}
    
                {props.subtopico ? (
                Object.keys(item.subcampo).map((subitem, subindex) => (
                    <div key={subindex}>
                    <div>


                        <h4>{props.subtopicoTipo}:{subindex} </h4>


                        
                        <textarea
                        placeholder={props.conteudoCampo}
                        name={props.tipo + '_'+{index}+props.subtopicoTipo+'_'+{subindex}}
                        onBlur={(e) => atualizarDadosSubElemento(subindex, e.target.value, index)}
                        />


    
                        {subindex === atualizaTamanhoSubTopico(index) - 1 && (
                        <button onClick={() => removerSubElemento(subindex, index)}>Remover</button>
                        )}
    
                        {subindex === atualizaTamanhoSubTopico(index) - 1 && (
                        <button onClick={() => adicionarSubElemento(index, subindex)}>Adicionar {props.subtopicoTipo}</button>
                        )}
                    </div>
                    </div>
                ))
                ) : (
                <br />
                )}
            </div>
            </div>
        ))}

        </>
    )
}

export default CriarPost;