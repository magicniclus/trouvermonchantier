import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "trouvermonchantier.firebaseapp.com",
  databaseURL:
    "https://trouvermonchantier-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "trouvermonchantier",
  storageBucket: "trouvermonchantier.appspot.com",
  messagingSenderId: "637542921551",
  appId: "1:637542921551:web:8c9b360a3fa5764993c13a",
};

// Vérifier si Firebase a déjà été initialisé
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Get a reference to the auth service
const auth = getAuth();
const database = getDatabase(app);

export { app, auth, database };
