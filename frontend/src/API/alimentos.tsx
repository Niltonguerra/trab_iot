import axios from 'axios';

import { BACKEND_URL } from './env'; 





// trás todos os nomes e o _id de todos os registros do banco de dados
export async function fetchAlimentosNome() {
    try {
      const response = await fetch(`${BACKEND_URL}alimentos/Nomeid`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error("Erro ao buscar dados. Status:", response.status);
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  
}


// trás todas as informações de todos os registros do banco de dados do banco de dados

export function fetchAlimentosData() {
  return new Promise((resolve, reject) => {
    fetch(`${BACKEND_URL}alimentos`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.error("Erro ao buscar dados. Status:", response.status);
          reject("Erro ao buscar dados. Status: " + response.status);
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error);
        reject("Erro ao buscar dados: " + error.message);
      });
  });
}



// trás todas as informasções de apenas um registro no banco de dados

export function fetchAlimentosRegistro(nome: string) {
  return new Promise((resolve, reject) => {
    fetch(`${BACKEND_URL}alimentos/${nome}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.error("Erro ao buscar dados. Status:", response.status);
          reject("Erro ao buscar dados. Status: " + response.status);
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error);
        reject("Erro ao buscar dados: " + error.message);
      });
  });
}


















// chamada para editar

export async function  editardadosAlimento(API:string,registro:string) {
    
  try {
    await axios.delete(`${BACKEND_URL}alimentos/deletarPorNome/${registro}`); // Substitua a URL pela rota adequada em seu backend
    
      // tentativa 02
      fetch(`${BACKEND_URL}alimentos`, {
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

  } catch (error) {
    console.error("Erro ao excluir para editar o alimento:", error);
  }
}



// chamada para criar

export function criarPostAlimento(API: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(`${BACKEND_URL}alimentos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: API,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        resolve(data); // Resolva a Promise com os dados da resposta
      })
      .catch((error) => {
        console.error(error);
        reject(error); // Rejeite a Promise se ocorrer um erro
      });
  });
}





// chamada para deletar

export async function  deletarDadoAlimento(nome:string) {

  try {
      await axios.delete(`${BACKEND_URL}alimentos/deletarPorNome/${nome}`); // Substitua a URL pela rota adequada em seu backend
      // Após a exclusão bem-sucedida, você pode atualizar a lista de alimentos se necessário
      
    } catch (error) {
      console.error("Erro ao excluir o alimento:", error);
    }
}






// traz todas as informações com base em uma informação de texto que pode estár presente em qualquer lugar do campo nome

// export function fetchAlimentosPesquisa(nome: string) {
//   return new Promise((resolve, reject) => {
//     fetch(`${BACKEND_URL}alimentos/nomeIncompleto/${nome}`)
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           console.error("Erro ao buscar dados. Status:", response.status);
//           reject("Erro ao buscar dados. Status: " + response.status);
//         }
//       })
//       .then(data => {
//         resolve(data);
//       })
//       .catch(error => {
//         console.error("Erro ao buscar dados:", error);
//         reject("Erro ao buscar dados: " + error.message);
//       });
//   });
// }