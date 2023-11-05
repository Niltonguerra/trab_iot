import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { CampoForm } from '../components/campo_form';
import CaroselCuriosidades from '../components/caroseis/carosel-curiosidades';
// import { useForm } from "react-hook-form";


function CriarPost(){
    



    const [jsonStorage, setJsonStorage] = useState ({data: []});































    const manipularDadosDoFilho = (formulario) => {




      const elementosNoJson = jsonStorage.data.slice(); // Copie os elementos do JSON
      const elementosAtualizados = formulario.map((elemento, index) => {
        const tipoDoElemento = elemento.tipo;
        const dadosDoElemento = elemento.dados;
    
        // Verifica se já existe um item com o mesmo tipo e dados
        const itemExistenteIndex = elementosNoJson.findIndex((item) => {
          return item.tipo === tipoDoElemento && item.dados === dadosDoElemento;
        });
    
        if (itemExistenteIndex !== -1) {
          // Se já existe, atualize os campos necessários no JSON
          elementosNoJson[itemExistenteIndex].subcampo = elemento.subcampo; // Atualize conforme necessário
        } else {
          // Se não existe, adicione um novo item à estrutura JSON
          elementosNoJson.push(elemento);
        }
    
        return elemento;
      });
    
      // Encontre os elementos excluídos do formulário e também os remova do JSON
      for (let i = elementosNoJson.length - 1; i >= 0; i--) {
        if (!elementosAtualizados.find((elemento) => elemento.tipo === elementosNoJson[i].tipo && elemento.dados === elementosNoJson[i].dados)) {
          elementosNoJson.splice(i, 1);
        }
      }
    
      // Atualize o JSON com os elementos atualizados
      setJsonStorage({ data: elementosNoJson });

      // organizarElementosPorTipo(elementosNoJson);
      };









// tranforma as requisições em json


const [elementosPorTipo, setElementosPorTipo] = useState({});


  // Função para organizar os elementos por tipo em um objeto
  function organizarElementosPorTipo(elementos) {
    const elementosPorTipoCopy = {};

    elementos.forEach((elemento) => {
      const tipoDoElemento = elemento.tipo;

      // if (!elementosPorTipoCopy[tipoDoElemento]) {
      //   elementosPorTipoCopy[tipoDoElemento] = {}; // Use um objeto vazio em vez de um array
      // }

      // elementosPorTipoCopy[tipoDoElemento] = { elemento }; // Armazene o elemento no objeto
    


      if (tipoDoElemento === "Receitas") {
      elementosPorTipoCopy["Receitas"] = { elemento };
      }
      if (tipoDoElemento === "curiosidade") {
        elementosPorTipoCopy["curiosidade"] = { elemento };
      }



      setElementosPorTipo(elementosPorTipoCopy);    // Atualize o estado com elementosPorTipo
    });

     
  
   // Exiba o objeto no console em formato JSON
   console.log(elementosPorTipo["curiosidade"]);
   console.log(elementosPorTipo["Receitas"]);
   
   
  
  
  }

  // function organizarElementosPorTipo(elementos) {
  //   const elementosPorTipoCopy = {};
  
  //   elementos.forEach((elemento) => {
  //     const tipoDoElemento = elemento.tipo;
  
  //     if (!elementosPorTipoCopy[tipoDoElemento]) {
  //       elementosPorTipoCopy[tipoDoElemento] = {}; // Use um objeto vazio em vez de um array
  //     }
  
  //     elementosPorTipoCopy[tipoDoElemento] = { ...elementosPorTipoCopy[tipoDoElemento], ...elemento }; // Armazene o elemento no objeto
  
  //     console.log(tipoDoElemento);
  //   });
  
  //   setElementosPorTipo(elementosPorTipoCopy); // Atualize o estado com elementosPorTipo
  
  //   // Exiba o objeto no console em formato JSON
  //   console.log(JSON.stringify(elementosPorTipoCopy, null, 2));
  
  //   // Exiba os elementos individualmente no console
  //   Object.keys(elementosPorTipoCopy).forEach((tipo) => {
  //     console.log(`Elementos do tipo ${tipo}:`, elementosPorTipoCopy[tipo]);
  //   });
  // }
  
























      // const excluirDadosJsonItem = (index:number) =>{
      //   const novosDados = [...jsonStorage.data];
      //   novosDados.splice(index, 2);
      //   setJsonStorage({data: novosDados});
      // };

      // const excluirDadosJsonSubItem = (indexPai:number,indexFilho:number) => { 
      //   const novosDados = [...jsonStorage];
      //   novosDados[indexPai] = {
      //       ...novosDados[indexPai],
      //       subcampo: {
      //           ...novosDados[indexPai].subcampo
      //       }
      //   };
      //   delete novosDados[indexPai].subcampo[indexFilho];
      //   setJsonStorage(novosDados);
      // };

      



    return (
        <>
        {/* {console.log(jsonStorage) }*/}

        


        
        <div className="container--criar">
            <div className="container">
                <div className="conteudo">
    
                    <CampoForm 
                        tipo="curiosidade" 
                        conteudoCampo="digite as curiosidades do vegetal" 
                        enviarDadosParaPai={manipularDadosDoFilho}
                        // excluirDadosJsonItem={excluirDadosJsonItem}
                        subtopico= {false}
                        />
                        
                    <br /><br /><br /><br />

                    <CampoForm 
                        tipo="benefícios" 
                        conteudoCampo="digite os benefícios do vegetal"
                        enviarDadosParaPai={manipularDadosDoFilho}
                        // excluirDadosJsonItem={excluirDadosJsonItem}
                        subtopico= {false}
                        />
                    <br /><br /><br /><br />

                    <CampoForm 
                    tipo="fatos Históricos" 
                    conteudoCampo="digite os fatos históricos do vegetal"
                    enviarDadosParaPai={manipularDadosDoFilho}
                    // excluirDadosJsonItem={excluirDadosJsonItem}
                    subtopico= {false}
                    />

                    <br /><br /><br /><br />

                    <CampoForm 
                        tipo="Receitas" 
                        conteudoCampo="digite as receitas do vegetal" 
                        enviarDadosParaPai={manipularDadosDoFilho} 
                        // excluirDadosJsonItem={excluirDadosJsonItem}
                        
                        subtopico= {true}
                        // excluirDadosJsonSubItem={excluirDadosJsonSubItem}
                        subtopicoTipo="passos"
                        SubTopicoConteudoCampo="digite os passos para a receita">
                        
                    </CampoForm> 
                    


                    <div className="form-group">
                        {/* <button onClick={() => handleSubmit(onSubmit)()}>Criar post</button> */}
                    </div>



                </div>

            </div>
        </div>
        </>
    )
}

export default CriarPost;