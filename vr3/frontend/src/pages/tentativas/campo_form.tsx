import React, { useState} from "react";





export const CampoForm: React.FC<FormComponent> = (props) => {


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      const valorSubCampo0: { [key: number]: SubCampo } = {
        0: {
          subtopico: props.subtopicoTipo,
          SubTopicoConteudoCampo: props.SubTopicoConteudoCampo,
        },
      };



const [form, setForm] = useState<Elemento[]>([
    { 
        tipo: props.tipo, 
        dados: props.conteudoCampo, 
        subcampo: valorSubCampo0 
    }
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
const removerElemento = (index: number) => {
        const novosDados = [...form];
        novosDados.splice(index, 1);
        setForm(novosDados);
        
        // props.excluirDadosJsonItem(index)
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
    
    // props.excluirDadosJsonSubItem?.(indexPai, indexFilho)
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

<>
{/* 
// return(
// <>

// {console.log(form)}
// {form.map((item, index) => (
//     <div key={index}>
//     <div>
//         <h4>{props.tipo}:{index} </h4>
//         <textarea
//             value={item.dados}
//             onChange={(e) => atualizarDadosElemento(index, e.target.value)}
//         />
//         <button onClick={() => removerElemento(index)}>Remover</button>
//         {index === form.length - 1 && (
//             <button onClick={() => adicionarElemento()}>Adicionar {props.tipo}</button>
//         )}

        
//         {Object.keys(item.subcampo).map((subitem, subindex) => (
//             <div key={subindex}>
                    
                    
//                     <div>
            
//                             <h4>{props.subtopicoTipo}:{subindex} </h4>
                            
//                             <textarea
//                             value={item.subcampo[subindex]?.SubTopicoConteudoCampo}
//                             onChange={(e) => atualizarDadosSubElemento(subindex, e.target.value,index)}
//                             />
                            

//                             {subindex === atualizaTamanhoSubTopico(index) - 1 &&  (
//                             <button onClick={() => removerSubElemento(subindex,index)}>Remover</button>
//                             )} 

                            
                            
//                             {subindex === atualizaTamanhoSubTopico(index) - 1 &&  (
//                                 <button onClick={() =>adicionarSubElemento(index,subindex)}>adicionar {props.subtopicoTipo}</button>
//                             )} 
            

//                     </div>
                    
//             </div>
// ))      
//         } 
    
        
// <br /><br /><br /><br /><br /><br /><br /><br />
//         </div>
//     </div>
    
// ))
// }








// </>  

// ) */}


</>

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
    );
    



} 





















