
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaW1_YD5AOrdXZCJFMJ6DPf6bs3w3fhpQ",
    authDomain: "conversation-app-3d804.firebaseapp.com",
    projectId: "conversation-app-3d804",
    storageBucket: "conversation-app-3d804.appspot.com",
    messagingSenderId: "768186841488",
    appId: "1:768186841488:web:b452ddf681b75ee34a9b15",
    measurementId: "G-RRR5QKQKMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// 
// 
// 
// 
// 
// 
// 
let Username = prompt("Type your name")

const sendMessage = () => {
    let message = document.getElementById("message").value
    firebase.database().ref("messages").push().set({
        "Sender": Username,
        "Message": message
    })

    let message1 = document.getElementById("message")
    message1.value = ""
    return false; 
}