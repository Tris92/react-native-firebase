import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCSa8rlebjedZJcJ89RX788f_baerfymd8',
  authDomain: 'newapp-40f3e.firebaseapp.com',
  databaseURL: 'https://newapp-40f3e.firebaseio.com',
  projectId: 'newapp-40f3e',
  storageBucket: 'newapp-40f3e.appspot.com',
  messagingSenderId: '121287127009',
  appId: '1:121287127009:web:ee873bd1234c0deb7eba61ce',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
