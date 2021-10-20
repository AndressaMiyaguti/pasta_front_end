import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.gif';
import './Header.css';



export default function Header() {

  
    return(
     <div >
        <header className="header">
          <div className="img">
            <img className="logoHeader" src={logo} alt="Robô trabalhando"/>
          </div>
         
          <div className="container_ul">
            <ul className="header_Ul">
              <li className="header_Li">
                <Link to="/" className="header_Li_Rotas">
                  Home
                </Link>            
              </li>
              <li className="header_Li">
                <Link to="/create" className="header_Li_Rotas">
                  Cadastro
                </Link>            
              </li> 
              <li className="header_Li">
                <Link to="/deleteAll" className="header_Li_Rotas">
                  Deletar Tudo
                </Link>            
              </li>
              <li className="header_Li">
                <Link to="/sobre" className="header_Li_Rotas">
                  Sobre
                </Link>            
              </li>
            </ul>  
          </div>  
        </header> 
 </div> 
        )
}