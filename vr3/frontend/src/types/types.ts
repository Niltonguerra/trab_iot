// tipagem 



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


// export interface FormPostTopico{
//   [id_topico:number]:{
//     topico:{
//       idTopico: number| null;
//       nomeTopico: string| null;
//       descricaoTopico: string | null;
//       foto: File | null;
//       subTopico:{
//         [id_sub_topico: number]:{
//           idSubTopico: number;
//           nomesubTopico: string |undefined;
//           descricaosubTopico: string |undefined;
//         }
//       }
//     }
//   }
// }


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







// export interface FormSubmitData {
//   data: FormElement[];
// }




// export interface Elemento {

//   [categoria: number]:{
//       tituloForm: string;
//       descricaoForm: string;
//       subcampo: { [key: number]: SubCampo };
//   }
// }

