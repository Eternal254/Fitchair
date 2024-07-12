import './App.css';
import Inicio from './componentes/Inicio';
import Login from './componentes/Login';
import Nosotros from './componentes/Nosotros';
import { Routes, Route } from 'react-router-dom';
import Layout from './componentes/Layout';
import DataPage from './componentes/DataPage';


function App() {
  return (
    <div className='elementos'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='inicio' element={<Inicio />} />
          <Route path='nosotros' element={<Nosotros />} />
          <Route path='login' element={<Login />} />
          <Route path='bd' element={<DataPage />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
