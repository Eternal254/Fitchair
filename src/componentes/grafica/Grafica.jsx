import React from 'react';
import BasicLineChart from './BasicLineChart';
import './graph.css';

function Grafica() {
    return (
      <div className="inicio container my-5 LineChart">
        <header>
          <h1 className='title'>Grafica de peso</h1>
          <BasicLineChart />
        </header>
      </div>
    );
  }

export default Grafica;