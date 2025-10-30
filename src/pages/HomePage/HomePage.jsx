import Home from '../../components/home/Home.jsx';
import Menu from '../../components/menu/Menu.jsx';
import Doacao from '../../components/doacao/Doacao.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Ong from '../../components/sobre-ong/SobreOng.jsx'



const HomePage = () => {
  return (
    <>
      <Menu />
      <Home />
      <Doacao />
      <Ong />
      <Footer />
    </>
  );
} 

export default HomePage;