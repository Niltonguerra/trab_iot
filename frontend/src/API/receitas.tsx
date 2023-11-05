import axios from 'axios';

import { BACKEND_URL } from './env'; 


// trás todos os nomes e o _id de todos os registros do banco de dados
export async function fetchReceitasNome() {
  try {
    const response = await fetch(`${BACKEND_URL}receitas/Nomeid`);
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
export async function fetchReceitasData() {
try {
  const response = await fetch(`${BACKEND_URL}receitas`);
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


// trás todas as informasções de apenas um registro no banco de dados
export async function fetchReceitasRegistro(nome: string) {
try {
  const response = await fetch(`${BACKEND_URL}receitas/${nome}`);
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




export async function  criarPostReceita(API:string) {
  fetch(`${BACKEND_URL}receitas`, {
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
}

// export function criarPostReceita(API: string): Promise<any> {
//   return new Promise((resolve, reject) => {
//     fetch('${BACKEND_URL}receitas', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json', // Defina o tipo de conteúdo como JSON
//       },
//       body: API, // Converte o objeto API em JSON
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Erro na solicitação'); // Trate erros de resposta aqui
//         }
//         return response.json(); // Converte a resposta em JSON
//       })
//       .then((data) => {
//         console.log(data); // Faça algo com os dados
//         resolve(data);
//       })
//       .catch((error) => {
//         console.log(error); // Trate erros aqui
//         reject(error);
//       });
//   });
// }

export async function  editardadosReceitas(API:string,registro:string) {
    
  try {
    await axios.delete(`${BACKEND_URL}receitas/deletarPorNome/${registro}`); // Substitua a URL pela rota adequada em seu backend
    
      // tentativa 02
      fetch(`${BACKEND_URL}receitas`, {
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
    console.error("Erro ao excluir para editar a receitas:", error);
  }
}




export async function  deletarDadoReceita(nome:string) {

  try {
      await axios.delete(`${BACKEND_URL}receitas/deletarPorNome/${nome}`); // Substitua a URL pela rota adequada em seu backend
      // Após a exclusão bem-sucedida, você pode atualizar a lista de alimentos se necessário
      
    } catch (error) {
      console.error("Erro ao excluir o alimento:", error);
    }
}



// vai para o banco e pesquisa todas as receitas pelo ingrediente e traz aquelas que tem o ingrediente passado como parametro
export function fetchBuscaIngredientes(nomeAlimento:string) {
  const url = `${BACKEND_URL}receitas/buscaIngredientes/${nomeAlimento}`;

  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados. Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
