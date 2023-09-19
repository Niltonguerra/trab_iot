
// tipagem 



export type Product = {
    titulo_cur: string[];
    conteudo_cur: string[];

    titulo_ben: string[];
    conteudo_ben: string[];

    titulo_his: string[];
    conteudo_his: string[];

    titulo_rec: string[];
    conteudo_rec: string[][];
};

export type Curiosidade = {
    titulo_cur: string[];
    conteudo_cur: string[];
};


export interface Professor {
    id_professor: number;
    name_professor: string;
    // outras propriedades
}

export  interface ListComponentProps {
    professor: Professor[];
}
