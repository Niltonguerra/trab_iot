import React, { useState } from 'react';
// import { Curiosidade } from '../types/types';







type ElementoTipo = 'receita' | 'curiosidade' | 'historico' | 'beneficio';



interface Elemento {
  tipo: ElementoTipo;
  dados: Record<string,string>; // Você pode ajustar o tipo de dados conforme necessário
}




interface ElementoReceita {
    tipo: ElementoTipo;
    dados: {
        nome: string;
        ingredientes: string[];
    };
  }




function CriarPost(){
    
    
    // const [conteudo, setConteudo] = useState([
    //     { tipo: 'receita', dados: { nome: '', ingredientes: [''] } },
    //     { tipo: 'curiosidade', dados: { texto: '' } },
    //     { tipo: 'beneficio', dados: { texto: '' } },
    //     { tipo: 'historico', dados: { texto: '' } },
    // ]);

    // const [receitas, setReceita] = useState([
    //     { tipo: 'receita', dados: { nome: '', ingredientes: [''] } }
    // ]);

    // const [curiosidade, setCuriosidade] = useState([
    //     { tipo: 'curiosidade', dados: { texto: '' } }
    // ]);

    // const [beneficio, setBeneficio] = useState([
    //     { tipo: 'beneficio', dados: { texto: '' } }
    // ]);

    // const [historico, setHistorico] = useState([
    //     { tipo: 'historico', dados: { texto: '' } }
    // ]);



    const [receita, setReceita] = useState<ElementoReceita[]>([]);
    const [curiosidade, setCuriosidade] = useState<Elemento[]>([
        { tipo: 'curiosidade', dados: { texto: 'curiosidade' }}
    ]);
    const [historico, setHistorico] = useState<Elemento[]>([
        { tipo: 'historico', dados: { texto: 'Fato histórico' }}
    ]);
    const [beneficio, setBeneficio] = useState<Elemento[]>([
        { tipo: 'beneficio', dados: { texto: 'benéficio' }}
    ]);








    const adicionarElemento = (tipo: ElementoTipo) => {
        switch (tipo) {
          case 'receita':
            setReceita([...receita, { tipo: 'receita', dados: { nome: '', ingredientes: [''] } }]);
            break;
          case 'curiosidade':
            setCuriosidade([...curiosidade, { tipo: 'curiosidade', dados: { texto: '' } }]);
            break;
          case 'historico':
            setHistorico([...historico, { tipo: 'historico', dados: { texto: '' } }]);
            break;
          case 'beneficio':
            setBeneficio([...beneficio, { tipo: 'beneficio', dados: { texto: '' } }]);
            break;
          default:
            console.error(`Tipo não suportado: ${tipo}`);
        }
      };







      // Função para atualizar os dados de um elemento


    const atualizarDadosElemento = (
        tipo: ElementoTipo,
        index: number,
        campo: string,
        valor: string) => {

                let estado: Elemento[];
                let setestado: React.Dispatch<React.SetStateAction<Elemento[]>>;


                switch (tipo) {
                    case 'curiosidade':
                        estado = curiosidade;
                        setestado = setCuriosidade;
                        break;
                    case 'historico':
                        estado = historico;
                        setestado = setHistorico;
                        break;
                    case 'beneficio':
                        estado = beneficio;
                        setestado = setBeneficio;
                        break;
                    default:
                        console.error(`Tipo não suportado: ${tipo}`);
                        return;
                }
                
                const novosDados = [...estado];
                novosDados[index].dados[campo] = valor;
                setestado(novosDados);
                

        
    };

  // Função para remover um elemento
const removerElemento = (index: number,tipo:string) => {


    let estado: Elemento[];
    let setestado: React.Dispatch<React.SetStateAction<Elemento[]>>;

    // esse dado será substituido, mas para evitar que o sistema entenda como um erro,
    // coloquei esse dado apenas para deixar alguma coisa
    estado = curiosidade
    setestado = setCuriosidade

    switch (tipo) {
        case 'historico':
            estado = historico
            setestado = setHistorico
        
          break;
        case 'beneficio':
            estado = beneficio
            setestado = setBeneficio
        
          break;
        default:
          console.error(`Tipo não suportado: ${tipo}`);
      }

      const novosDados = [...estado];
      novosDados.splice(index, 1);
      setestado(novosDados);

  };




    return (
        <>
        <div className="container--criar">
            <div className="container">
                <div className="conteudo">

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



                    {
                        beneficio.map((item, index) => (
                            <div key={index}>
                                {   
                                item.tipo === 'beneficio' && (
                                <div>

                                    <h4>Benéficio:{index} </h4>
                                    
                                    <textarea
                                    value={item.dados.texto}
                                    onChange={(e) => atualizarDadosElemento('beneficio',index, 'texto', e.target.value)}
                                    />
                                    
                                    <button onClick={() => removerElemento(index,'beneficio')}>Remover</button>
                                    
                                    {index === beneficio.length - 1 && (
                                        <button onClick={() =>adicionarElemento('beneficio')}>Adicionar benéficio</button>
                                    )}
                                
                                </div>
                                )
                                }
                            </div>
                        ))
                    
                    }




                    {
                        historico.map((item, index) => (
                            <div key={index}>
                                {   
                                item.tipo === 'historico' && (
                                
                                <div>

                                    <h4>Fatos históricos:{index} </h4>
                                    
                                    <textarea
                                    value={item.dados.texto}
                                    onChange={(e) => atualizarDadosElemento('historico',index, 'texto', e.target.value)}
                                    />
                                    
                                    <button onClick={() => removerElemento(index,'historico')}>Remover</button>
                                    
                                    {index === historico.length - 1 && (
                                        <button onClick={() =>adicionarElemento('historico')}>Adicionar fatos históricos</button>
                                    )}
                                
                                </div>
                                )
                                }
                            </div>
                        ))
                    
                    }






































                    <button className="adicionar">enviar</button>
                </div>

            </div>
        </div>
        </>
    )
}

export default CriarPost;