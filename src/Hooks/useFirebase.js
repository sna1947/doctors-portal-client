import { useEffect, useState } from "react";
import initializeAuthencation from "../Pages/Login/Firebase/firebase.initialize";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

initializeAuthencation();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoding, setIsLoding] = useState(true);
    const [authError, setAuthError] = useState('');


    const auth = getAuth();

    // register user ==================================================
    const registerUser = (email, password) => {
        setIsLoding(true);
        // console.log(email,password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // ...
                setAuthError('');
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setAuthError(error.message);
                // console.log(error)
                // ..
            })
            .finally(()=> setIsLoding(false));
    };

    // Login user================================================
    const loginUser = (email, password, location, history) => {
        setIsLoding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from  || '/';
                history.replace(destination);
                // Signed in 
                // const user = userCredential.user;
                // ...
                setAuthError('');
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setAuthError(error.message);
            })
            .finally(()=> setIsLoding(false));
    };

    //observer user state======================================
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {

                setUser({})
            }
            setIsLoding(false);
        });
        return () => unsubcribe;
    }, []);

    // logout section =========================================
    const logOut = () => {
        setIsLoding(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(()=> setIsLoding(false));
    };

    return {
        authError,
        user,
        isLoding,
        loginUser,
        logOut,
        registerUser,
    }

};

export default useFirebase;
