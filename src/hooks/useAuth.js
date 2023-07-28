import {useCallback, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useAuthStore} from '../store';

const useAuth = (email, password) => {
  const [loading, setLoading] = useState(false);
  const setUser = useAuthStore(s => s.setUser);

  const onAuthStateChanged = useCallback(
    async user => {
      if (user) {
        console.log('User is signed in');
        setUser({name: user?.email});
      }
    },
    [setUser],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  const handleLogin = () => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {})
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.warn('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.warn('That email address is invalid!');
        }
        console.warn(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {loading, handleLogin};
};

export default useAuth;
