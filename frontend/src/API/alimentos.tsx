import axios from 'axios';


// trás todos os nomes e o _id de todos os registros do banco de dados
export async function fetchAlimentosNome() {
    try {
      const response = await fetch("http://localhost:3000/alimentos/Nomeid");
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
    fetch("http://localhost:3000/alimentos")
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
    fetch(`http://localhost:3000/alimentos/${nome}`)
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




















export async function  editardadosAlimento(API:string,registro:string) {
    
  try {
    await axios.delete(`http://localhost:3000/alimentos/deletarPorNome/${registro}`); // Substitua a URL pela rota adequada em seu backend
    
      // tentativa 02
      fetch('http://localhost:3000/alimentos', {
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





export async function  criarPostAlimento(API:string) {

fetch('http://localhost:3000/alimentos', {
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






export async function  deletarDadoAlimento(nome:string) {

  try {
      await axios.delete(`http://localhost:3000/alimentos/deletarPorNome/${nome}`); // Substitua a URL pela rota adequada em seu backend
      // Após a exclusão bem-sucedida, você pode atualizar a lista de alimentos se necessário
      
    } catch (error) {
      console.error("Erro ao excluir o alimento:", error);
    }
}

