import Home from '../../components/home/Home.jsx';
import Menu from '../../components/menu/Menu.jsx';
import Doacao from '../../components/doacao/Doacao.jsx';
import Footer from '../../components/footer/Footer.jsx';



const HomePage = () => {
  return (
    <>
      <Menu />
      <Doacao />
      <Home />
      <Footer />
    </>
  );
} 

export default HomePage;