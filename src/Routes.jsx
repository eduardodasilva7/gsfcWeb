import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import QuemSomosPage from './pages/SobreNos/SobreNos.jsx';
import InformativosPage from './pages/InfoDoacao/InfoDoacao.jsx'
import LuzAmor from './components/luz-e-amor/LuzeAmor.jsx'
import Relatorio from './components/relatorio/relatorio.jsx'
import Fomulario from './components/formulario/formulario.jsx'
import Eventos from './components/eventos/eventos.jsx'
import BazarDaPechincha from './components/eventos/bazar.jsx';
import BazarDiaDasMaes from './components/eventos/bazarmae.jsx';
import Almoco from './components/eventos/almoco.jsx';
import BazarNatal from './components/eventos/bazarnatal.jsx';
import Biscoitodoamor from './components/eventos/biscoitodoamor.jsx';
import DriveThru from './components/eventos/drivethru.jsx';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/luz-e-amor" element={<HomePage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path="/informativos" element={<InformativosPage />} />
        <Route path="/" element={<LuzAmor/>}/>
        <Route path="/relatorio" element={<Relatorio/>} /> 
        <Route path='/formulario' element={<Fomulario/>}/>
        <Route path='/eventos' element={<Eventos/>}/>
        <Route path="/eventos/bazar" element={<BazarDaPechincha />} />
        <Route path="/eventos/bazarmae" element={<BazarDiaDasMaes />} />
        <Route path="/eventos/almoco" element={<Almoco/>}/>
        <Route path="/eventos/bazarnatal" element={<BazarNatal/>}/> 
        <Route path="/eventos/biscoitodoamor" element={<Biscoitodoamor />} />
        <Route path="/eventos/drivethru" element={<DriveThru />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes;