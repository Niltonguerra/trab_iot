import { Foto } from './typesReceitas';
// formulario de Post de Alimentos


// faz o controle da criação de novos subcampos
export type SubTopico = {
  subTituloForm: string |undefined;
  SubDescricaoForm: string|undefined;
};

// faz o controle da criação de novos campos
export interface FormElement {
  tituloForm: string;
  descricaoForm?: string |null;
  imagemForm:File | null | string;
  subCampos?:  SubTopico[];
}




// prepara os dados dos SubTopicos para mandar para a api
export interface FormPostAPISubTopico{
  [id_subTopico: number]:{
    idSubTopico: number;
    nomesubTopico: string |undefined;
    descricaosubTopico: string |undefined;
  }

}




// prepara os dados dos Topicos para mandar para a api
export interface FormPostAPITopico{
  [id_topico: number]: {
      idTopico: number| null;
      nomeTopico: string;
      descricaoTopico: string | null;
      foto:string | Foto;
      subTopico: FormPostAPISubTopico;
  }
}



// dados enviados para o onSubmit em alimentos

export interface FormPostDataOnSubmit{
  nome: string;
  tipoDoAlimento: string;
  nomeCientifico: string;
  descricaoVegetal:string;
  id_topico: FormPostAPITopico[];
}


