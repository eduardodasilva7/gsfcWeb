import Home from '../../components/home/Home.jsx';
import Menu from '../../components/menu/Menu.jsx';
import Atividades from '../../components/atividades/Conteudo.jsx';
import Doacao from '../../components/doacao/Doacao.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Ong from '../../components/sobre-ong/SobreOng.jsx'
import LuzeAmor from '../../components/LuzeAmor/LuzeAmor.jsx';
import Relatorio from '../../components/Relatorio/relatorio.jsx';



const HomePage = () => {
  return (
    <>
      <Menu />
      <Home />
      <Atividades />
      <Doacao />
      <Ong />
      <Footer />
      
    </>
  );
} 

export default HomePage;