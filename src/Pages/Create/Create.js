import { useState } from "react";
import Api from "../../Api/Api";
import { Link, useHistory } from "react-router-dom";
import "./Create.css";

export default function Create() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [status, setStatus] = useState("");
  const [prazo, setPrazo] = useState("");

  const history = useHistory();

  const tarefa = {
    titulo: titulo,
    descricao: descricao,
    prioridade: prioridade,
    status: status,
    prazo: prazo,
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const request = await Api.create(tarefa).catch((e) => {
      console.error("Erro ao tentar adicionar o item ao banco: ", e);
    });
    const result = await request.json();
    console.log(result)
    history.push("/", result);
  };

  return (
    <div className="bloco_create">
      <div className="create">
        <div className="container_form">
          <header className="header_create">
            <span className="ola">Olá!</span>
            <p>
              Tenho algumas dicas importantes, para que tenha melhor
              aproveitamento do da sua agenda de tarefas.
            </p>
            <ul>
              <li>Coloque no Título palavras chave que remetam a Tarefa. </li>
              <li>
                Anote tudo que precisa ser feito no campo descrição. Ressaltamos
                que o registro detalhado da atividade, faz toda diferença para o
                sucesso na conclusão da Tarefa.
              </li>
              <li>
                Priorize suas Tarefas e anote com atenção o status e a data
                limite que tem para concluir a tarefa.
              </li>
              <li>Agora é com você!</li>
            </ul>
          </header>
          <form className="form" onSubmit={submitHandler}>
            <label htmlFor="titulo">Título:</label>
            <input
              id="titulo"
              type="text"
              onChange={(e) => setTitulo(e.target.value)}
              required
            ></input>

            <label htmlFor="descricao">Descrição da Tarefa:</label>
            <input
            className="textarea"
              name="descricao"
              id="descricao"
              type="text"
              onChange={(e) => setDescricao(e.target.value)}
              required
            ></input>

            <label htmlFor="prioridade">Grau de Prioridade da Tarefa: </label>
            <select
              id="prioridade"
              onChange={(e) => setPrioridade(e.target.value)}
              required
            >
              <option value="" hidden>
                -
              </option>
              <option value="alta">Alta</option>
              <option value="media">Média</option>
              <option value="baixa">Baixa</option>
            </select>
            <div class="bloco">
              <div class="blocoI">
                <label class="blocoI" htmlFor="status">
                  Status:
                </label>
                <select
                  id="status"
                  onChange={(e) => setStatus(e.target.value)}
                  required
                >
                  <option value="" hidden>
                    -
                  </option>
                  <option value="pendente">Pendente</option>
                  <option value="em_execucao">Em Execução</option>
                  <option value="concluida">Concluída</option>
                </select>
              </div>
              <div className="esp"></div>
              <div class="blocoII">
                <label class="bloco_prazo" htmlFor="prazo">
                  Prazo:
                </label>
                <input
                  id="prazo"
                  type="date"
                  min="17-10-2021"
                  pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
                  onChange={(e) => setPrazo(e.target.value)}
                  required
                ></input>
              </div>
            </div>
           
              <button className="add">Adicionar Tarefa</button>
            
          </form>
        </div>
      </div>
    </div>
  );
}
