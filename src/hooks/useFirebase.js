import { useEffect, useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("inside state change", user);
                setUser(user);
            } else {
                setUser({})
            }
        });
    }, [auth]);

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        });
    };

    return {
        user,
        error,
        logout,
        signInUsingGoogle,
    };
};

export default useFirebase;