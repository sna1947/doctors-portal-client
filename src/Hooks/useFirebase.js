import { useEffect, useState } from "react";
import initializeAuthencation from "../Pages/Login/Firebase/firebase.initialize";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut,updateProfile } from "firebase/auth";

initializeAuthencation();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoding, setIsLoding] = useState(true);
    const [authError, setAuthError] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // register user ==================================================
    const registerUser = (email, password, name, history) => {
        setIsLoding(true);
        // console.log(email,password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                history.replace('/')
      //Display email and display name on booking Modal popup************* 
      //send name to firebase to after creation        
                const newUser = {email, displayName:name};
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName:name, 
                  }).then(() => {
                  }).catch((error) => {
                  });

            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setAuthError(error.message);
                // console.log(error)
                // ..
            })
            .finally(() => setIsLoding(false));
    };

    // Login user================================================
    const loginUser = (email, password, location, history) => {
        setIsLoding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoding(false));
    };
  // SignIn with Google ================================================
    const signInWithGoogle = (location, history) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user; 
                setAuthError('');

            }).catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoding(false));
    }

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
            .finally(() => setIsLoding(false));
    };

    return {
        authError,
        user,
        isLoding,
        loginUser,
        logOut,
        registerUser,
        signInWithGoogle,
    }

};

export default useFirebase;
