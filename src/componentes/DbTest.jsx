import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase/firebaseConfig"; 

const DbTest = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const usersRef = ref(database, 'Usuarios');

    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      const usuariosArray = [];
      for (let id in data) {
        usuariosArray.push({ id, ...data[id] });
      }
      setUsuarios(usuariosArray);
    });
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <p>Nombre: {usuario.Nombre}</p>
            <p>Apellido: {usuario.Apellido}</p>
            <p>Correo: {usuario.Correo}</p>
            <p>Peso: {usuario.Peso}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

//Esta funcionando extrañamente, muestra la info de todos los usuarios
// Falta meter una comprobacion para que requiera de login y solo muestre 
// Los datos del usuario logeado en base al ID

export default DbTest;