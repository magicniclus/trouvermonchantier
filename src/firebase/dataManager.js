import { ref, push, set, getDatabase } from "firebase/database";
import { app } from "./firebase.config"; // Assurez-vous d'importer votre instance de base de données Firebase

// Obtenez une référence à la base de données de Firebase
const db = getDatabase(app);

export const addProspect = async (prospectData) => {
  const prospectsRef = ref(db, "prospects"); // Référence au dossier 'prospects'

  try {
    const newProspectRef = push(prospectsRef); // Crée une nouvelle référence avec un ID unique dans 'prospects'
    await set(newProspectRef, prospectData); // Sauvegarde les données du prospect avec cet ID unique
    console.log(`Added new prospect successfully.`);
  } catch (error) {
    console.error("Failed to add new prospect: ", error);
  }
};
