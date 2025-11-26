import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import QuemSomosPage from './pages/SobreNos/SobreNos.jsx';

import LuzeAmor from './components/LuzeAmor/LuzeAmor.jsx';
import Relatorio from './components/Relatorio/relatorio.jsx';
import InformativosPage from './pages/InfoDoacao/InfoDoacao.jsx'


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path='/luzeamor' element={<LuzeAmor/>}/>
        <Route path='/relatorio' element={<Relatorio/>}/>
        <Route path="/informativos" element={<InformativosPage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes;