// const firebaseConfig = {
//     apiKey: "AIzaSyCaW1_YD5AOrdXZCJFMJ6DPf6bs3w3fhpQ",
//     authDomain: "conversation-app-3d804.firebaseapp.com",
//     projectId: "conversation-app-3d804",
//     storageBucket: "conversation-app-3d804.appspot.com",
//     messagingSenderId: "768186841488",
//     appId: "1:768186841488:web:b452ddf681b75ee34a9b15",
//     measurementId: "G-RRR5QKQKMF"
//   };
//   firebase.initializeApp(firebaseConfig);
//   const db = firebase.firestore();
// // 
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
console.log("message",message)
console.log("prompt",prompt)
// console.log("db",db)