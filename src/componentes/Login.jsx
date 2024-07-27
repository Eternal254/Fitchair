import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import '../login.css';
import { call_login_google } from './auth/Autent';
import firebaseConfig from '../firebase/firebaseConfig';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const handleLogout = async () => {
    try {
        await signOut(auth);
        window.location.href = '/';
        {console.log('Sesion cerrada')}
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
};


export const Login = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!user) {
            const btnIniciarSesion = document.getElementById("btn__iniciar-sesion");
            const btnRegistrarse = document.getElementById("btn__registrarse");
            const formularioLogin = document.querySelector(".formulario__login");
            const formularioRegister = document.querySelector(".formulario__register");
            const contenedorLoginRegister = document.querySelector(".contenedor__login-register");
            const cajaTraseraLogin = document.querySelector(".caja__trasera-login");
            const cajaTraseraRegister = document.querySelector(".caja__trasera-register");

            function ajustarInterfaz() {
                if (window.innerWidth > 850) {
                    cajaTraseraRegister.style.display = "block";
                    cajaTraseraLogin.style.display = "block";
                } else {
                    cajaTraseraRegister.style.display = "block";
                    cajaTraseraRegister.style.opacity = "1";
                    cajaTraseraLogin.style.display = "none";
                    formularioLogin.style.display = "block";
                    contenedorLoginRegister.style.left = "0px";
                    formularioRegister.style.display = "none";
                }
            }

            function iniciarSesion() {
                if (window.innerWidth > 850) {
                    formularioLogin.style.display = "block";
                    contenedorLoginRegister.style.left = "10px";
                    formularioRegister.style.display = "none";
                    cajaTraseraRegister.style.opacity = "1";
                    cajaTraseraLogin.style.opacity = "0";
                } else {
                    formularioLogin.style.display = "block";
                    contenedorLoginRegister.style.left = "0px";
                    formularioRegister.style.display = "none";
                    cajaTraseraRegister.style.display = "block";
                    cajaTraseraLogin.style.display = "none";
                }
            }

            function register() {
                if (window.innerWidth > 850) {
                    formularioRegister.style.display = "block";
                    contenedorLoginRegister.style.left = "410px";
                    formularioLogin.style.display = "none";
                    cajaTraseraRegister.style.opacity = "0";
                    cajaTraseraLogin.style.opacity = "1";
                } else {
                    formularioRegister.style.display = "block";
                    contenedorLoginRegister.style.left = "0px";
                    formularioLogin.style.display = "none";
                    cajaTraseraRegister.style.display = "none";
                    cajaTraseraLogin.style.display = "block";
                    cajaTraseraLogin.style.opacity = "1";
                }
            }

            btnIniciarSesion.addEventListener("click", iniciarSesion);
            btnRegistrarse.addEventListener("click", register);
            window.addEventListener("resize", ajustarInterfaz);

            ajustarInterfaz();

            return () => {
                btnIniciarSesion.removeEventListener("click", iniciarSesion);
                btnRegistrarse.removeEventListener("click", register);
                window.removeEventListener("resize", ajustarInterfaz);
            };
        }
    }, [user]);

    return (
        <div>
            {user ? (
                <div>
                    <h2>Bienvenido, {user.displayName}</h2>
                    <p>Estás autenticado</p>
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                    {console.log('Sesion iniciada')}
                    {console.log("User ID:", user.uid)}
                </div>
            ) : (
                <main>
                    <div className="contenedor__todo">
                        <div className="caja__trasera">
                            <div className="caja__trasera-login">
                                <h3>¿Ya tienes una cuenta?</h3>
                                <p>Inicia sesión para entrar en la página</p>
                                <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                            </div>
                            <div className="caja__trasera-register">
                                <h3>¿Aún no tienes una cuenta?</h3>
                                <p>Regístrate para que puedas iniciar sesión</p>
                                <button id="btn__registrarse">Regístrarse</button>
                            </div>
                        </div>

                        <div className="contenedor__login-register">
                            <form action="" className="formulario__login">
                                <h2>Iniciar Sesión</h2>
                                <input type="text" placeholder="Correo Electrónico" />
                                <input type="password" placeholder="Contraseña" />
                                <button>Entrar</button>
                                <button className='button-google' onClick={call_login_google}>Entrar con Google</button>
                            </form>

                            <form action="" className="formulario__register">
                                <h2>Regístrarse</h2>
                                <input type="text" placeholder="Nombre completo" />
                                <input type="text" placeholder="Correo Electrónico" />
                                <input type="text" placeholder="Usuario" />
                                <input type="password" placeholder="Contraseña" />
                                <button>Regístrarse</button>
                                <button className='button-google' onClick={call_login_google}>Entrar con Google</button>
                            </form>
                        </div>
                    </div>
                </main>
            )}
        </div>
    );
};

export default Login;
