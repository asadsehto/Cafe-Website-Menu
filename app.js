// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCtNjAKEulqQwlYWuedvr1jq0Pozl_yaqA",
  authDomain: "cafe-app-684ad.firebaseapp.com",
  projectId: "cafe-app-684ad",
  storageBucket: "cafe-app-684ad.firebasestorage.app",
  messagingSenderId: "191008909640",
  appId: "1:191008909640:web:665b02b7dcc46d1b6f2b7d",
  measurementId: "G-1JBKQW19XL"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to display menu from Firestore
const menuList = document.getElementById('menu-list');

// Fetch menu items from Firestore
async function fetchMenu() {
  try {
    const querySnapshot = await getDocs(collection(db, "menu"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${data.timestamp}</strong><br><img src="${data.image_url}" alt="menu item" style="width: 100px; height: auto;">`;
      menuList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}

fetchMenu();
