import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
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

  const signUp = (email, password, name) =>
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: `https://avatars.dicebear.com/api/personas/${auth.currentUser.uid}.svg`,
      });
    });

  const logIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
      })
      .catch((err) => {
        console.error(err);
      });
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
