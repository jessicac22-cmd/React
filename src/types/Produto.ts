export type Produto={
    precoPorKg: any;
    id: number;
    nome:string;
    descricaoCurta:string;
    descricaoLonga:string;
    precoPorkg:number;
    ativo:boolean;
    imagem:string;
    categoriaIds:number[]
}
export type ProdutoRequest = Omit<Produto, 'id'>