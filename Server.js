
  const firebaseConfig = {
    apiKey: "AIzaSyAKJDRHVIqgSwtzkU3eegrO6O5oH4D6_DA",
    authDomain: "myproject-7ee01.firebaseapp.com",
    projectId: "myproject-7ee01",
    storageBucket: "myproject-7ee01.appspot.com",
    messagingSenderId: "27397837345",
    appId: "1:27397837345:web:60a0afa42b9b66d79c0960",
    measurementId: "G-QQQYBM1HNW"
  };

  // Initialize Firebase
 server.initializeApp(firebaseConfig);
 export const sr = server.firestore();
 console.log(sr);