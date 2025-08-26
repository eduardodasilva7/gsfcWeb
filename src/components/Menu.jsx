
import menuImg from '../assets/img/menu.png';

import './Menu.css'

function Menu(){
  const abrirMenu = () => {
    document.querySelector('.menuItems').classList.toggle('active');
  }

  return(
    <div className='menu'>
      <div className='menuImg'>
        <img src="" alt="" className='logo' id='logo'/>
        <img src={menuImg} alt="" className='logomenu' onClick={abrirMenu}/>
      </div>
      <nav> 
        <ul className='menuItems'>
          <li className='item'><a href="">Início</a></li>
          <li className='item'><a href="">Atividades</a></li>
          <li className='item'><a href="">Luz e Amor</a></li>
          <li className='item'><a href="">Quem somos</a></li>
          <li className='item'><a href="">Como doar</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;