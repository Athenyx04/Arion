import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCv3eP4-tHrww7y4yqNS0h1_wB0mjFxqr0',
  authDomain: 'esalab-arion.firebaseapp.com',
  projectId: 'esalab-arion',
  storageBucket: 'esalab-arion.appspot.com',
  messagingSenderId: '699676127455',
  appId: '1:699676127455:web:a220700a11071bdd7ab96a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
