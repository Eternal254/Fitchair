import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase/firebaseConfig"; 
import { useAuth } from "./auth/AuthContext";
import BasicLineChart from './grafica/BasicLineChart';
import '../center.css'; // Importa el nuevo archivo CSS
import imagen from "../imagenes/titilo-removebg-preview.png"
import imagen2 from "../imagenes/imgpersona.png"

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

  //Funcion que crea y muestra una tabla con todos los pesos del usuario
  // En funcion a la base de datos
  const renderPesoTabla = (pesos) => {
    return (
      <div className="hola">
        <table className="tabla">
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
    <div className="fondo">
      {user ? (
        <>
          <header>
            <img className='fitchar' src={imagen} alt="Nombre de la pagina" />
            <img className='fitchar2' src={imagen2} alt="Nombre de la pagina" />
            <h1 className="usuario"> {user.displayName}</h1>
          </header>
          <div>
            <h1 className='titulo'>Grafica de peso</h1>
            <div className="grafica-container">
              <BasicLineChart />
            </div>
            {usuarios.Pesos ? (
              renderPesoTabla(usuarios.Pesos)
            ) : (
              <p>No hay datos de pesaje disponibles</p>
            )}
          </div>
        </>
      ) : (
        <h1>No hay usuario logueado</h1>
      )}
    </div>
  );
};

export default DbTest;
