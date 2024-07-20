/*

import React, { useState, useEffect } from 'react';
import { ref, onValue, getDatabase } from 'firebase/database';
import { app } from '../App'; 

const db = getDatabase(app);

const DbTest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dataRef = ref(db, 'Usuarios');
      try {
        onValue(dataRef, (snapshot) => {
          const items = snapshot.val();
          const formattedItems = items ? Object.keys(items).map(key => ({ id: key, ...items[key] })) : [];
          setData(formattedItems);
          setLoading(false);
        });
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Peso</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.Nombre}</td>
            <td>{item.Apellido}</td>
            <td>{item.Correo}</td>
            <td>{item.Peso}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DbTest;
*/