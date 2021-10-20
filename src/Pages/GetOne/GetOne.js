/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory } from "react-router-dom";
import { React, useEffect, useState } from "react";
import Api from "../../Api/Api";
import "./GetOne.css";
import img from "./img.png";

export default function GetOne(props) {
  const history = useHistory();
  const _id = props.match.params.id;
  console.log(_id);
  const [tarefa, setTarefa] = useState({});

  const getTarefa = async () => {
    const response = await Api.getOne(_id);
    const result = await response.json();
    setTarefa(result);
  };
  useEffect(() => {
    getTarefa();
  }, []);

  console.log(tarefa);

  const deleteHandler = async (event) => {
    event.preventDefault();
    history.push(`/delete/${_id}`);
  };

  const editHandler = async (event) => {
    event.preventDefault();
    history.push(`/updateOne/${_id}`);
  };

  const date = `${tarefa.dataCriacao}`;
  let dateString = date.toString();
  let data = `${dateString.slice(0, 10)}`;
  console.log(data);

  return (
    <div className="container_one">
      <div className="container_bloco">
        <div className="container_tarefa">
          <div className="tarefa">
            <div className="titulo">{tarefa.titulo}</div>
            <div className="item">
              <p className="titulo_desc">Status da Tarefa</p>
              <p className="item_desc"> {tarefa.status}</p>
            </div>
            <div className="item">
              <p className="titulo_desc"> Descrição da Tarefa</p>
              <p className="item_desc">{data}</p>
            </div>

            <div className="item">
              <p className="titulo_desc">Nível de Prioridade</p>
              <p className="item_desc">{tarefa.prioridade}</p>
            </div>
            <div className="item">
              <p className="titulo_desc">Prazo para concluir a Tarefa</p>
              <p className="item_desc"> {tarefa.prazo}</p>
            </div>
            <div className="item border">
              <p className="titulo_desc">Data de criação da Tarefa</p>
              <p className="item_desc"> {tarefa.dataCriacao}</p>
            </div>

            <div className="item_btn">
              <button className="add " onClick={editHandler}>
                Editar
              </button>
              <button className="add " onClick={deleteHandler}>
                Deletar
              </button>
            </div>
          </div>
          <div className="img_one">
            <img className="avatar" src={img} alt=" avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}
