// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCmiD7QARZBhwX5O3MXhwuybJnujF_9UZE',
  authDomain: 'sneakerstore-37bad.firebaseapp.com',
  projectId: 'sneakerstore-37bad',
  storageBucket: 'sneakerstore-37bad.appspot.com',
  messagingSenderId: '491931135516',
  appId: '1:491931135516:web:30ed8a3dd54df363ce39d9',
  measurementId: 'G-9WXXRQLJ64',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
auth.useDeviceLanguage();
