import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "examen-e836d.firebaseapp.com",
    projectId: "examen-e836d",
    storageBucket: "examen-e836d.appspot.com",
    messagingSenderId: "900551617182",
    appId: "1:900551617182:web:3925b64bd5579711d1e98f",
    databaseURL: "https://examen-e836d-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };