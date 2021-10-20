import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import primeiraLetra from "../Lib/utils";

export default function Card(props) {
  const tarefa = props.data;
  return (
    <div className="bloc_card">
      <div className="cont_card">
        <Link to={`/getOne/${tarefa._id}`} className="card_link">
          <div className="blocTitulo">
            <div className="card_titulo">
              <h5 className="desc">Título:</h5>
              <h5 className="card_titulo">{primeiraLetra(tarefa.titulo)}</h5>
            </div>
          </div>
          <div className="card">
            <div className="card_topo">
              <h5 className="desc">Nível de prioridade</h5>
              <h5 className="card_info">{primeiraLetra(tarefa.prioridade)}</h5>
            </div>
            <div className="card_info">
              <h5 className="desc">Status da Tarefa</h5>
              <h5 className="card_info"> {primeiraLetra(tarefa.status)}</h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
