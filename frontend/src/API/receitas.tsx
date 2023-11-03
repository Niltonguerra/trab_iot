import axios from 'axios';


// trás todos os nomes e o _id de todos os registros do banco de dados
export async function fetchReceitasNome() {
  try {
    const response = await fetch("http://localhost:3000/receitas/Nomeid");
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
  const response = await fetch("http://localhost:3000/receitas");
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
  const response = await fetch(`http://localhost:3000/receitas/${nome}`);
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
  fetch('http://localhost:3000/receitas', {
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
//     fetch('http://localhost:3000/receitas', {
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
    await axios.delete(`http://localhost:3000/receitas/deletarPorNome/${registro}`); // Substitua a URL pela rota adequada em seu backend
    
      // tentativa 02
      fetch('http://localhost:3000/receitas', {
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
      await axios.delete(`http://localhost:3000/receitas/deletarPorNome/${nome}`); // Substitua a URL pela rota adequada em seu backend
      // Após a exclusão bem-sucedida, você pode atualizar a lista de alimentos se necessário
      
    } catch (error) {
      console.error("Erro ao excluir o alimento:", error);
    }
}
