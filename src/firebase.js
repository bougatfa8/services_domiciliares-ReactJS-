import  firebase from "firebase";

var firebaseApp =firebase.initializeApp({
   
        apiKey: "AIzaSyArFUjx0V6iYkh7Z-_uTqcB5ZaU-5U-aXI",
        authDomain: "protecteur2022.firebaseapp.com",
        projectId: "protecteur2022",
        storageBucket: "protecteur2022.appspot.com",
        messagingSenderId: "908995987169",
        appId: "1:908995987169:web:0d94a6c9c5daf51352d9a0",
        measurementId: "G-0YZ16KT8G2"
      
    
 
    

});
var db = firebaseApp.firestore();

export{ db };



