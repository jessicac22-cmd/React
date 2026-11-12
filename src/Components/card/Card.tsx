import { Link } from 'react-router-dom'

import star from'../../assets/icones/star.svg'
import usuario from'../../assets/icones/user.svg'

import './Card.css'

type CardProps = {
    imgProduto:string;
    nome:string;
    descricao:string;
    valor:number;
    quantidadeAvaliacaoes:number;
    nota:number;
}

function Card({
    imgProduto,
    nome,
    descricao,
    valor,
    quantidadeAvaliacaoes,
    nota,

} : CardProps) {
    return(
       
        <article className="prod_card">
          <figure>
            <img
              src={imgProduto}
              alt="foto do produto"
              />
          </figure>
          <h2>
            <Link to="/detalheProduto">{nome}</Link>
          </h2>
          <p className="card_desc">
            {descricao}
          </p>
          <p className="card_rodape">
            <data value={valor}>R$ {valor}/ kg</data>
            <span className="card_av">
              <img src={usuario} alt="icone de usuarios" />
              <data value={quantidadeAvaliacaoes}>{quantidadeAvaliacaoes}</data>
              <img src={star} alt="icone de estrela" />
              <data value={nota}>{nome}</data>
            </span>
          </p>
              </article>

    )
}
export default Card;