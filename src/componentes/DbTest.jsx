import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase/firebaseConfig"; 
import { useAuth } from "./auth/AuthContext";

const DbTest = () => {
  const [usuarios, setUsuarios] = useState([]);
  const user = useAuth();

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
        {user ? (
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
        ) : (
            <h1>Logeate puta</h1>
        )}
    </div>
);
};  

// Se intenta meter comprobacion de usuario, para que solo le muestre la info a alguien logeado, pero no se deja

export default DbTest;