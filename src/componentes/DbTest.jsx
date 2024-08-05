import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase/firebaseConfig"; 
import { useAuth } from "./auth/AuthContext";
import BasicLineChart from './grafica/BasicLineChart';
import '../center.css'; // Importa el nuevo archivo CSS
import imagen from "../imagenes/titilo-removebg-preview.png";
import imagen2 from "../imagenes/imgpersona.png";

const DbTest = () => {
  const [usuarios, setUsuarios] = useState({});
  const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || imagen2);
  const user = useAuth();

  useEffect(() => {
    const usersRef = ref(database, 'Usarios');

    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      setUsuarios(data);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setProfileImage(imageUrl);
        localStorage.setItem('profileImage', imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  // Función que crea y muestra una tabla con todos los pesos del usuario
  const renderPesoTabla = (pesos) => (
    <div className="tabla-container">
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
              <td>{pesos[key].Peso} kg</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="fondo">
      {user ? (
        <>
          <header className="header">
            <img className="fitchar" src={imagen} alt="Nombre de la pagina" />
            <div className="profile-image-container">
              <img className="profile-image" src={profileImage} alt="Imagen del usuario" />
              <input type="file" onChange={handleImageUpload} className="file-input" />
            </div>
            <h1 className="usuario">{user.displayName}</h1>
          </header>
          <div className="contenido">
            <h1 className="titulo">Gráfica de peso</h1>
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
