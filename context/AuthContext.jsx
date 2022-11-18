import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';
import Loading from '../components/Loading';

const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      auth.onIdTokenChanged(async (user) => {
        if (!user) {
          setCurrentUser(null);
          setLoading(false);
          return;
        }
        const token = await user.getIdToken();
        setCurrentUser(user);
        setLoading(false);
        console.log(token);
      }),
    []
  );

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = async () => {
    await signOut(auth);
    setCurrentUser(null);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ currentUser, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
