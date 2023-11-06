import axios from 'axios';
import { BACKEND_URL } from './env'; 



export function fetchCriarForm(API: string): Promise<any> {
  return fetch(`${BACKEND_URL}formulario`, {
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

      return response; // Converte a resposta em JSON
    })
    .then((data) => {
      console.log(data); // Faça algo com os dados
      return data.status; // Retorne os dados da promessa
    });
}


// trás todas as informações de todos os registros do banco de dados do banco de dados
export async function fetchFormData() {
    try {
      const response = await fetch(`${BACKEND_URL}formulario`);
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
        await axios.delete(`${BACKEND_URL}formulario/deletarPorNome/${id}`); 


      } catch (error) {
        console.error("Erro ao excluir o alimento:", error);
      }
  }
  


  // trás todas as informações de um registro por id
  export function fetchFormRegistro(id:string) {
    return new Promise((resolve, reject) => {
      fetch(`${BACKEND_URL}formulario/${id}`)
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
  