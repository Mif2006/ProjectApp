// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1My9SGN988poyr1z5R-xSlFMDq0-vaHI",
  authDomain: "projectapp-20c6a.firebaseapp.com",
  projectId: "projectapp-20c6a",
  storageBucket: "projectapp-20c6a.appspot.com",
  messagingSenderId: "120461487472",
  appId: "1:120461487472:web:b6e80bb2181e0b2702f3b5",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAXNfXpRRmB5WYHFiAezLcaWqIG4NBncVg",
//   authDomain: "projektapp-ff32a.firebaseapp.com",
//   projectId: "projektapp-ff32a",
//   storageBucket: "projektapp-ff32a.appspot.com",
//   messagingSenderId: "581987567882",
//   appId: "1:581987567882:web:d9bcdff403ac19230252f3",
//   measurementId: "G-KZF67K7X01",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
