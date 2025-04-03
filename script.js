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
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

// Function to display menu from Firestore
const menuList = document.getElementById('menu-list');

// Fetch menu items from Firestore
db.collection('menu').get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${data.timestamp}</strong><br><img src="${data.image_url}" alt="menu item" style="width: 100px; height: auto;">`;
      menuList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error('Error fetching data: ', error);
  });
