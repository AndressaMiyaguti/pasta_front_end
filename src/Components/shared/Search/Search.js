import {Link} from 'react-router-dom';
import './Search.css';


export default function Search(filter) {
  return(
    <div className="search">
      
        <input
         className="search_input"
          type="text"
          placeholder={filter.placeholder}
          onChange={filter.action}
        />
        
        <button className="btn">
          <Link className="btn_link" to="/">Buscar</Link>
        </button>
      </div>
      
    
  )
}