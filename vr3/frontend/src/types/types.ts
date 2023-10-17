// tipagem 


export type ElementoTipo = string;



export interface FormComponent{
    tipo: string;
    conteudoCampo: string; 
    enviarDadosParaPai: (dados: Elemento[]) => void;
    excluirDadosJsonItem?: (index: number) => void;
    subtopico: boolean;

    excluirDadosJsonSubItem?: (indexPai: number,indexFilho: number) => void;
    subtopicoTipo?: string;
    SubTopicoConteudoCampo?: string;
}


export interface Elemento {

  [categoria: string]:{
      tipo: string;
      dados: string;
      subcampo: { [key: number]: SubCampo };
  }
}

export type SubCampo = {
  subtopico: string |undefined;
  SubTopicoConteudoCampo: string|undefined;
};

