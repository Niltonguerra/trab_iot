import React, {useState} from "react";
// import { Curiosidade } from '../types/types';



interface FormComponent{
    tipo: string;
    dados: Record<string,string>; 
}


type ElementoTipo = string;



interface Elemento {
    tipo: ElementoTipo;
    dados: Record<string,string>; // Você pode ajustar o tipo de dados conforme necessário
}




// interface ElementoReceita {
//     tipo: ElementoTipo;
//     dados: {
//         nome: string;
//         ingredientes: string[];
//     };
// }


export default function CampoForm(props){
    





    const [form, setForm] = useState<Elemento[]>([
        { tipo: props.tipo, dados: { texto: props.placeholder }}
    ]);



    const adicionarElemento = (tipo: ElementoTipo) => {
        if(tipo === 'exemplo'){
            setForm([...form, { tipo: 'exemplo', dados: { texto: '' } }]);
        }else{
            console.error(`erro ao cria um elemento do formulario`);
        }
        };
    
      // Função para atualizar os dados de um elemento
    const atualizarDadosElemento = (
        tipo: ElementoTipo,
        index: number,
        campo: string,
        valor: string) => {

            if('exemplo' === tipo){
                const novosDados = [...form];
                novosDados[index].dados[campo] = valor;
                setForm(novosDados);
            }else{
                console.error(`erro ao atualizar(escrever) no formulario`);
            }

    };





  // Função para remover um elemento
const removerElemento = (index: number,tipo:string) => {

    if('exemplo' === tipo){
        const novosDados = [...form];
        novosDados.splice(index, 1);
        setForm(novosDados);
    }else{
        console.error(`erro ao excluir campo do formulario`);
    }


};

    
    return(
<>
    {curiosidade.map((item, index) => (
        <div key={index}>
            {   
            item.tipo === 'curiosidade' && (
            // Renderize campos de curiosidade aqui
            <div>

                <h4>Curiosidades:{index} </h4>
                
                <textarea
                value={item.dados.texto}
                onChange={(e) => atualizarDadosElemento('curiosidade',index, 'texto', e.target.value)}
                />
                
                <button onClick={() => removerElemento(index,'curiosidade')}>Remover</button>
                
                {index === curiosidade.length - 1 && (
                    <button onClick={() =>adicionarElemento('curiosidade')}>Adicionar Curiosidade</button>
                )}
            
            </div>
            )
            }
        </div>
    ))

}
</>        
    )
} 