import React from 'react';
import './App.css';
import Inicio from './componentes/Inicio';
import Login from './componentes/Login';
import Nosotros from './componentes/Nosotros';
import { Routes, Route } from 'react-router-dom';
import Layout from './componentes/Layout';
import DbTest from './componentes/DbTest';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase/firebaseConfig';
import Grafica from './componentes/grafica/Grafica';
import 'bootstrap/dist/css/bootstrap.min.css';

let initializedApp;

function App() {
  return (
    <div className='elementos'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='inicio' element={<Inicio />} />
          <Route path='nosotros' element={<Nosotros />} />
          <Route path='login' element={<Login />} />
          <Route path='mytest' element={<DbTest />} />
          <Route path='graph' element={<Grafica />} />
        </Route>
      </Routes>
    </div>
  );
}

initializedApp = initializeApp(firebaseConfig);

export { initializedApp as app, App };
export default App;