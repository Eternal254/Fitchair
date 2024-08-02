import * as React from 'react';
import { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { onValue, ref } from 'firebase/database';
import { useAuth } from '../auth/AuthContext';
import { app, database, firestore, storage, analytics, auth } from '../../firebase/firebaseConfig';


//Funcion que crea y da forma a una grafica lineal
export default function BasicLineChart() {
  const [fechas, setFechas] = useState([]);
  const [pesos, setPesos] = useState([]);
  const user = useAuth();

  useEffect(() => {
    const usersRef = ref(database, 'Usarios');

    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.Pesos) {
        const fechasArray = [];
        const pesosArray = [];

        Object.values(data.Pesos).forEach((peso) => {
          // Convertir la fecha de string a objeto Date
          const [day, month, year] = peso.Fecha.split('-');
          const dateObj = new Date(year, month - 1, day);
          fechasArray.push(dateObj);
          pesosArray.push(peso.Peso);
        });

        const sortedData = fechasArray
          .map((fecha, index) => ({ fecha, peso: pesosArray[index] }))
          .sort((a, b) => a.fecha - b.fecha);

        setFechas(sortedData.map(item => item.fecha));
        setPesos(sortedData.map(item => item.peso));
      }
    });
  }, []);

  return (
    <div>
      {user ? (
        <LineChart
          xAxis={[
            {
              data: fechas,
              label: 'Fechas',
            }
          ]}
          series={[
            {
              data: pesos,
              label: 'Peso',
            },
          ]}
          width={500}
          height={300}
        />
      ) : (
        <p>Por favor inicia sesión para ver la gráfica.</p>
      )}
    </div>
  );
}
