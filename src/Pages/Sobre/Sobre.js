import De from "./De.jpg";
import "./Sobre.css";

export default function Sobre() {
  return (
    <div className="sobre">
      <div className="bloco_sobre">
        <h1>Sobre</h1>
        <div className="img-sobre">
          <img className="img-sobre" src={De} alt="foto"></img>
        </div>
        <div className="apresentacao">
          <h2>
            <span /> Para quem está chegando agora, muito obrigada por estar
            aqui. Permita me apresentar... Meu nome é Andressa, sou aluna do
            terceiro módulo de Full Stack na BlueEdtech. Esse projeto foi
            desenvolvido em aula com React.js e db Mongo, afim de adquirir
            prática em operações de CRUD, tendo como base os conhecimentos
            transmitidos pelo professor Ivo Soares.
          </h2>
        </div>
        <div className="redes">
          <a
            className="a"
            href="https://github.com/AndressaMiyaguti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="im im-github"></i>
          </a>

          <a
            className="a"
            href="https://www.linkedin.com/in/karine-miyaguti-042a07212/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="im im-linkedin"></i>
          </a>

          <a
            className="a"
            href="https://www.instagram.com/andressamiya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="im im-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
