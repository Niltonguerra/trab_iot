import axios from 'axios';


export async function  fetchCriarForm(API:string) {
    fetch('http://localhost:3000/formulario', {
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
  



// trás todas as informações de todos os registros do banco de dados do banco de dados
export async function fetchFormData() {
    try {
      const response = await fetch("http://localhost:3000/formulario");
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
    


  export async function  fetchDeletarForm(id:string) {
  
    try {
        await axios.delete(`http://localhost:3000/formulario/deletarPorNome/${id}`); 


      } catch (error) {
        console.error("Erro ao excluir o alimento:", error);
      }
  }
  


  // trás todas as informações de um registro por id
  export function fetchFormRegistro(id:string) {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/formulario/${id}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            console.error("Erro ao buscar dados. Status:", response.status);
            reject("Erro ao buscar dados");
          }
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          console.error("Erro ao buscar dados:", error);
          reject("Erro ao buscar dados");
        });
    });
  }
  