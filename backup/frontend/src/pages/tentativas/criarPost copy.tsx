import React, { useState } from 'react';



function CriarPost(){
    
    
    const [receitas, setReceitas] = useState(['']); // Inicialmente, temos um campo de receita vazio

    // Função para adicionar um novo campo de receita
    const adicionarReceita = () => {
      setReceitas([...receitas, '']); // Adiciona um campo de receita vazio
    };

    // Função para remover um campo de receita
        const removerReceita = (index) => {
        const novasReceitas = [...receitas];
        novasReceitas.splice(index, 1);
        setReceitas(novasReceitas);
    };


    // Função para atualizar o valor de um campo de receita, atualização de string
    const atualizarReceita = (index, novoValor) => {
        const novasReceitas = [...receitas];
        novasReceitas[index] = novoValor;
        setReceitas(novasReceitas);
    };

    // const [elemento, setElemento] = useState(['']); // Inicialmente, temos um campo de receita vazio

    // // Função para adicionar um novo campo de receita
    // const adicionarElemento = () => {
    //   setElemento([...elemento, '']); // Adiciona um campo de receita vazio
    // };

    // // Função para remover um campo de receita
    //     const removerElemento = (index) => {
    //     const novoElemento = [...elemento];
    //     novoElemento.splice(index, 1);
    //     setElemento(novoElemento);
    // };


    // // Função para atualizar o valor de um campo de receita, atualização de string
    // const atualizarElemento = (index, novoValor) => {
    //     const novoElemento = [...elemento];
    //     novoElemento[index] = novoValor;
    //     setElemento(novoElemento);
    // };



    return (
        <>
        <div className="container--criar">
            <div className="container">
                <div className="conteudo">
                <h1 className="titulo">Criar Post</h1>

                <div className="NomePost">
                        <p className="text">Nome do post:</p>
                        <input type="name" className="inpute" />
                </div> 

                <div className="Curiosidade">
                        <p className="text">Curiosidade 01:</p>
                        <input type="name" className="inpute" />
                        <button className="adicionar" id="adicionar_">Adicionar mais uma curiosidade</button>
                </div> 

                <div className="Beneficios">
                        <p className="text">Benéficio 01:</p>
                        <input type="name" className="inpute" />
                        <button className="adicionar" id="adicionar_">Adicionar mais um benéficio</button>
                </div> 

                <div className="história">
                        <p className="text">fato histórico 01:</p>
                        <input type="name" className="inpute" />
                        <button className="adicionar" id="adicionar_">Adicionar mais um fato histórico</button>
                </div> 

                <div className="Receitas">
                        <p className="text">Receita 01:</p>
                        <input type="name" className="inpute" />
                        <button className="adicionar" id="adicionar_">Adicionar mais uma passo para o preparo</button>
                        <button className="adicionar" id="adicionar_">Adicionar mais uma receita</button>
                </div> 

                {/* <h1>Formulário de Receitas:</h1>
                {
                    // chama o useState elemente e mostra todo o conteudo dele atráves da função map()
                    // traz o elemento da lista e cria um id para cada novo item criado através do map()
                    elemento.map((elemento, index) => (
                        
                        // define um id para o elemento
                        <div key={index}>

                            <p>Receita: {index}</p>
                        
                        <input type="text" value={elemento} onChange={(e) => atualizarElemento(index, e.target.value)} />

                        <button onClick={() => removerElemento(index)}>Remover</button>
                        </div>
                    ))
                }
                <button onClick={adicionarElemento}>Adicionar nova curiosidade</button> */}

                <h1>Formulário de Receitas</h1>
                {receitas.map((receita, index) => (
                    <div key={index}>
                    <input
                        type="text"
                        value={receita}
                        onChange={(e) => atualizarReceita(index, e.target.value)}
                    />
                    <button onClick={() => removerReceita(index)}>Remover</button>
                    </div>
                ))}
                <button onClick={adicionarReceita}>Adicionar Receita</button>
                </div>








                    <button className="adicionar">enviar</button>
                </div>

            </div>
        </div>
        </>
    )
}

export default CriarPost;