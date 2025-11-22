import Menu from '../../components/menu/Menu.jsx';
import QuemSomos from '../../components/quem-somos/QuemSomos.jsx';
import Footer from '../../components/footer/Footer.jsx';

const SobreNos = () => {
  return (
    <div className="quemSomos" >
      
        <Menu />
        <QuemSomos id='quemSomos' style={{ scrollMarginTop: "100px" }}/>
        <Footer />
      
    </div>
  );
}
export default SobreNos;