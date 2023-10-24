// tipagem 


// formulario de Post de Alimentos
export type SubCampo = {
  subTituloForm: string |undefined;
  SubDescricaoForm: string|undefined;
};


export interface FormElement {
  tituloForm: string |null;
  descricaoForm: string |null;
  imagemForm:File | null;
  subCampos?:  SubCampo[];
}


export interface FormState {
  form: FormElement[];
}

export interface FormSubmitData {
  nomeDoAlimento: string;
  nomeCientifico: string;
  tipoDoAlimento: string;
  form: FormElement[];
}






export interface FormPostAPISubTopico{
  [id_subTopico: number]:{
    idSubTopico: number;
    nomesubTopico: string |undefined;
    descricaosubTopico: string |undefined;
  }

}


export interface FormPostAPITopico{
  [id_topico: number]: {
      idTopico: number| null;
      nomeTopico: string| null;
      descricaoTopico: string | null;
      foto:string | null;
      subTopico: FormPostAPISubTopico;
  }
}


export interface FormularioPostAPI{
  Nome: string;
  tipoDoAlimento: string;
  nomeCientifico: string;
  id_topico: FormPostAPITopico;
}







// formulario de receitas



export interface Ingredientes{
  ingredientes: string;
}

export interface ModoDePreparo{
  passos: string;
}




export interface ReceitaAPI{
  nome: string;
  foto: string;
  ingredientes: { nome: string }[]; // Agora é um array de objetos
  modoDePreparo: { passos: string }[]; // Também é um array de objetos
}
