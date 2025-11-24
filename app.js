import { db } from "./firebaseConfig.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function cargarProfesores() {
  const col = collection(db, "Profesores");
  const snapshot = await getDocs(col);

  snapshot.forEach(doc => {
    console.log("Profesor:", doc.id, doc.data());
  });
}

cargarProfesores();
