import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from '../../firebase/firebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// Función de Firebase para autenticar con Google
export function call_login_google(e) {
    e.preventDefault();
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
            window.location.href = '/';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.error(error);
        });
}

// Función para registrar un nuevo usuario con correo y contraseña
export function registerWithEmailPassword(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

// Función para iniciar sesión con correo y contraseña
export function loginWithEmailPassword(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}
