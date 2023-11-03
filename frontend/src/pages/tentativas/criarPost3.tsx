import React, { useState } from 'react';



function CriarPost(){
    
    
    const [conteudo, setConteudo] = useState([
        { tipo: 'receita', dados: { nome: '', ingredientes: [''] } },
        { tipo: 'curiosidade', dados: { texto: '' } },
        { tipo: 'beneficio', dados: { texto: '' } },
        { tipo: 'historico', dados: { texto: '' } },
    ]);


    const contadorTipos = {
        receita: 0,
        curiosidade: 0,
        beneficio: 0,
        historico: 0,
      };

      const atualizarDadosElemento = (index, campo, valor) => {
        const novosDados = [...conteudo];
        novosDados[index].dados[campo] = valor;
        setConteudo(novosDados);
      };
    
      // Função para remover um elemento
      const removerElemento = (index) => {
        const novosDados = [...conteudo];
        novosDados.splice(index, 1);
        setConteudo(novosDados);
      };
    
      // Função para adicionar um elemento
      const adicionarElemento = (tipo) => {
        const novoElemento = { tipo, dados: { texto: '' } };
        const novosDados = [...conteudo, novoElemento];
        setConteudo(novosDados);
      };






    return (
        <>
        <div className="container--criar">
            <div className="container">
                <div className="conteudo">
                

{conteudo.map((item, index) => (
        <div key={index}>
          <h4>{item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1)}:</h4>
          <textarea
            value={item.dados.texto}
            onChange={(e) => atualizarDadosElemento(index, 'texto', e.target.value)}
          />
          <button onClick={() => removerElemento(index)}>Remover</button>
          {index === conteudo.length - 1 && (
            <button onClick={() => adicionarElemento(item.tipo)}>Adicionar {item.tipo}</button>
          )}
        </div>
      ))}



                    <button className="adicionar">enviar</button>
                </div>

            </div>
        </div>
        </>
    )
}

export default CriarPost;