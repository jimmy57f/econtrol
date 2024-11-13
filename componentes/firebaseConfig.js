
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
   /*aqui va la configuracion de las credenciales de firebase que te dan cuando inicias un proyecto en firebase */
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
export { db };
