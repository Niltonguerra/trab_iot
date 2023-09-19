import axios from 'axios';




export async function fetchProfessorData() {
  try {
    const res = await axios.get('http://localhost:8000/api/prof');
    if (res.data.status === 200) {
      return res.data.professors;
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return;
  }
}
