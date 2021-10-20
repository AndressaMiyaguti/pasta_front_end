import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Api from '../../../Api/Api';
import './List.css';
import Search from './../../shared/Search/Search';

export default function List () {

  const [tarefas, setTarefas] = useState([]);
  const [busca, setBusca] = useState([]);
  
  useEffect(() => {
    getTarefas();
  }, []);
  
  const getTarefas = async () => {
    const response = await Api.getAll(); 
    const data = await response.json(); 
    setTarefas(data); 
    setBusca(data);
    console.log(data)
  }
  const filter = (e) => {
    const filtered = busca.filter(item => item.prioridade.includes(e.target.value));
    setTarefas(filtered)
  }

  return (
    <div className="list">
    <div className="buscar">
      <Search placeholder="Busca por prioridade" action={filter}></Search>
    </div>
    <div className="container_list">
      <div className="list_titulo" >
      <h1 className="titulo"> Lista de Tarefas</h1>
      </div>
      {
        tarefas.map((tarefa, index) => ( // iterar o array de vagas e para cada vaga chamar um componente card
          <Card data={tarefa} key={tarefa._id}/>
          
        ))
      }
    </div>
    </div>
  )
}


