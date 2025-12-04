import menuImg from "../../assets/img/menu.png";
import "./Menu.css";
import { useNavigate } from "react-router-dom";

function Menu() {
  const abrirMenu = () => {
    document.querySelector(".menuItems").classList.toggle("active");
  };

  const navigate = useNavigate();

  const inicio = () => {
    navigate("/");
  };

  return (
    <div className="menu">
      <div className="menuImg">
        <img className="logo" id="logo" onClick={inicio} />
        <img src={menuImg} alt="" className="logomenu" onClick={abrirMenu} />
      </div>
      <nav>
        <ul className="menuItems">
          <li className="item">
            <a href="/" className="btnNav">
              Início
            </a>
          </li>
          <li className="item">
            <a href="/#atividades" className="btnNav">
              Atividades
            </a>
          </li>
          <li className="item">
            <a href="/luz-e-amor" className="btnNav">
              Luz e amor
            </a>
          </li>
          <li className="item">
            <a href="/#doacao" className="btnNav">
              Como doar
            </a>
          </li>
          <li className="item">
            <a href="/eventos" className="btnNav">
              Eventos
            </a>
          </li>
          <li className="item">
            <a href="/quem-somos" className="btnNav">
              Quem somos
            </a>
          </li>
          <li className="item">
            <a href="/relatorio" className="btnNav">
              Relatório
            </a>
          </li>
          <li className="item">
            <a href="/formulario" className="btnNav">
              Formulário
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
