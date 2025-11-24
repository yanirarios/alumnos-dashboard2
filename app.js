import { db } from "./firebaseConfig.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Función para leer profesores
async function cargarProfesores() {
    const colRef = collection(db, "profesores");
    const snapshot = await getDocs(colRef);

    const profesores = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    mostrarProfesores(profesores);
}

// Mostrar en pantalla
function mostrarProfesores(lista) {
    const contenedor = document.getElementById("lista-profesores");

    contenedor.innerHTML = lista.map(prof => `
        <div style="margin-bottom: 10px; padding: 10px; border: 1px solid #ccc">
            <strong>${prof.Nombre} ${prof.apellido}</strong><br>
            DNI: ${prof.DNI}<br>
            Email: ${prof.email}<br>
            Materias: ${prof.materias?.join(", ")}
        </div>
    `).join("");
}

// Llamar a la función al iniciar
cargarProfesores();

