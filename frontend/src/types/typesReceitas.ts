// formulario de receitas



export interface Ingredientes{
  nome: string;
}

export interface ModoDePreparo{
  passos: string;
}



export interface Foto{
  imagem_grande: string;
  imagem_media: string;
  imagem_pequena: string;
  excluir: string;
}




export interface ReceitaAPI{
  nome: string;
  foto: Foto | string;
  tempoDePreparo:string;
  ingredientes: { nome: string | undefined}[]; // Agora é um array de objetos
  modoDePreparo: { passos: string | undefined}[]; // Também é um array de objetos
}

export interface ReceitaAPIOnsubmit{
  nome: string;
  foto: File;
  tempoDePreparo:string;
  ingredientes: { nome: string }[]; // Agora é um array de objetos
  modoDePreparo: { passos: string }[]; // Também é um array de objetos
}


