import { useEffect, useState } from "react"
import initAuth from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, } from "firebase/auth";

initAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const signInUsinggoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                window.location.reload();
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log(user);
                setUser(user);
            }
        })
    }, [])

    return {
        user,
        error,
        logout,
        signInUsinggoogle
    }
}
export default useFirebase;