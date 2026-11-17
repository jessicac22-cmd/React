export type Produto={
    id: number;
    nome:string;
    descricaoCurta:string;
    descriacaolonga:string;
    precoPorkg:number;
    ativo:boolean;
    imagem:string;
    categoriasIds:number[]
}