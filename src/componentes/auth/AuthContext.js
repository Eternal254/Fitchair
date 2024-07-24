import { createContext, useContext, useState, useEffect, Children } from "react";
import { getAuth, onAuthStateChanged, updateCurrentUser } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsuscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsuscribe();
    }, [auth]);

    return(
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
}