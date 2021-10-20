/* eslint-disable react-hooks/exhaustive-deps */
import Api from '../../Api/Api';
import { useHistory } from 'react-router';
import './DeleteAll.css';



export default function DeleteAll() {

  const history = useHistory();
  const apiUrl = Api.apiUrl + "/";
  console.log(apiUrl);
  
 
  
  const Home = () => {
    history.push('/');
  };
 const clickHandler = async (event) => {
     event.preventDefault();

     await Api.deleteAll(`${apiUrl}`)
    
    alert("Lista de tarefas excluída!")

    Home();
  };
  return (
    <div className="container_delete">
      <div className="delete">
      <div className="container_titulo">
         <h1 className="titulo"> Sua lista de Tarefas, pode conter atividades importantes pendentes.
         Ao clicar em deletar, todas as informações serão permanentemente perdidas.
         </h1>
      </div>   
         <h2 className="titulo">  Deseja deletar a Lista de Tarefas?</h2>
        <div className="button">    
            <button onClick={Home}>Cancelar</button>
            <button onClick={clickHandler}>Deletar</button>
            </div>
        </div>     
            
    </div>
  );
}
