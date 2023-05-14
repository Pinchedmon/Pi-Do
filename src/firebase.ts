import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA00Qzmf3ujtEBzuf8RVQMUHB-GDXevaDQ",
  authDomain: "pi-do-49582.firebaseapp.com",
  projectId: "pi-do-49582",
  storageBucket: "pi-do-49582.appspot.com",
  messagingSenderId: "831262148277",
  appId: "1:831262148277:web:365b5e0bebd4ab059b60fc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
