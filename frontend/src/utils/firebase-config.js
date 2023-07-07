import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlfuFhyXuZjtvU11JaQ4RZKgtMfCN2CFM",
  authDomain: "netflix-clone-615f4.firebaseapp.com",
  projectId: "netflix-clone-615f4",
  storageBucket: "netflix-clone-615f4.appspot.com",
  messagingSenderId: "666115330777",
  appId: "1:666115330777:web:c23f9c7af52b5a4d7ea4c8",
  measurementId: "G-GGXRS8BHFL"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);