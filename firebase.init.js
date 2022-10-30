import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDVFBGVvm373RVYqzA_6aMfHqIJZMfsUZs",
  authDomain: "genius-car-services-c3c39.firebaseapp.com",
  projectId: "genius-car-services-c3c39",
  storageBucket: "genius-car-services-c3c39.appspot.com",
  messagingSenderId: "700930816253",
  appId: "1:700930816253:web:18efd4859aa0ff23c22694"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;