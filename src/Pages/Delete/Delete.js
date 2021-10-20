/* eslint-disable react-hooks/exhaustive-deps */
import Api from "../../Api/Api";
import { useHistory } from "react-router";
import { React, useState, useEffect } from "react";
import "./Delete.css";

export default function DeleteOne(props) {
  const history = useHistory();
  const _id = props.match.params.id;
  console.log(_id);

  const [tarefa, setTarefa] = useState([]);

  const getTarefa = async () => {
    const response = await Api.getOne(_id);
    const result = await response.json();
    setTarefa(result);
  };

  useEffect(() => {
    getTarefa();
  }, []);
  console.log(tarefa);

  const Home = () => {
    history.push("/");
  };

  const clickHandler = async (event) => {
    event.preventDefault();
    const response = await Api.deleteOne(_id);
    const result = await response.json().catch((e) => {
      console.error(`Error ao  deletar a tarefa: ${tarefa.titulo}`);
    });
    console.log(result);
    alert(`Tarefa ${tarefa.titulo} deletada com sucesso!`);

    Home();
  };

  return (
    <div className="cont_del">
      <div className="blc_del">
        <div className="blc_del_h1">
          <h1>Deletar</h1>
        </div>

        <h2 className="modal">
          <span />A operação de deletar a Tarefa, não poderá ser desfeita.
          Deseja apagar a Tarefa
          <span>{tarefa.titulo}</span>?
        </h2>

        <div id="opcoes_btn">
          <button onClick={Home}>Cancelar</button>
          <button onClick={clickHandler}>Deletar</button>
        </div>
      </div>
    </div>
  );
}
