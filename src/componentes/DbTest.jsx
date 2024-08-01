import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase/firebaseConfig"; 
import { useAuth } from "./auth/AuthContext";
import './../App.css';

const DbTest = () => {
  const [usuarios, setUsuarios] = useState({});
  const user = useAuth();

  useEffect(() => {
    const usersRef = ref(database, 'Usarios');

    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      setUsuarios(data);
    });
  }, []);

  const renderPesoTabla = (pesos) => {
    return (
      <div className="container">
      <table className="table table-dark table-borderless custom-table">
        <thead>
          <tr>
            <th>Fecha de pesaje</th>
            <th>Peso</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(pesos).map((key) => (
            <tr key={key}>
              <td>{pesos[key].Fecha}</td>
              <td>{pesos[key].Peso} - Kg</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  };

  return (
    <div>
      {user ? (
        <div className="container">
          <h1>Usuario {user.displayName}</h1>
          {usuarios.Pesos ? (
            renderPesoTabla(usuarios.Pesos)
          ) : (
            <p>No hay datos de pesaje disponibles</p>
          )}
        </div>
      ) : (
        <h1>No hay usuario logueado</h1>
      )}
    </div>
  );
};

export default DbTest;
