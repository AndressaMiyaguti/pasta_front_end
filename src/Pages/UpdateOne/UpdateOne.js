/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Api from "../../Api/Api";
import "./UpdateOne.css";

export default function Update(props) {
  const _id = props.match.params.id;
  const history = props.history;

  const [tarefa, setTarefa] = useState([{}]);

  const getTarefaById = async () => {
    const response = await Api.getOne(_id);
    const result = await response.json();

    setTarefa(result);
  };
  useEffect(() => {
    getTarefaById();
  }, []);

  const handleFieldsChange = (event) => {
    const itens = { ...tarefa };

    itens[event.target.name] = event.target.value;

    setTarefa(itens);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    const tarefaObj = { ...tarefa };

    try {
      const response = await Api.upDate(tarefaObj, _id);
      const result = await response.json();
      alert(result.message);
      history.push("/");
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container_update">
      <div className="bloco_update">
        <div className="tituloUp">
          <h1>Editar</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="titulo">Título</label>
          <input
            className="inputPut"
            id="titulo"
            name="titulo"
            type="text"
            onChange={handleFieldsChange}
            value={tarefa.titulo}
            required
          ></input>

          <label htmlFor="descricao">Descrição da Tarefa</label>
          <input
            className="inputPut"
            id="descricao"
            name="descricao"
            value={tarefa.descricao}
            type="text"
            onChange={handleFieldsChange}
            required
          ></input>

          <label htmlFor="prioridade">Grau de Prioridade da Tarefa </label>
          <select
            id="prioridade"
            name="prioridade"
            value={tarefa.prioridade}
            onChange={handleFieldsChange}
            required
          >
            <option value="alta">Alta</option>
            <option value="media">Média</option>
            <option value="baixa">Baixa</option>
          </select>

          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={tarefa.status}
            onChange={handleFieldsChange}
            required
          >
            <option value="pendente">Pendente</option>
            <option value="em_execucao">Em Execução</option>
            <option value="concluida">Concluída</option>
          </select>
          <label htmlFor="prazo">Data Limite para Concluir a Tarefa</label>
          <input
            className="inputPut"
            id="prazo"
            name="prazo"
            type="date"
            min="10-10-2021"
            pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
            onChange={handleFieldsChange}
            value={tarefa.prazo}
            required
          ></input>
          <button className="add">Adicionar Tarefa</button>
        </form>
      </div>
    </div>
  );
}
