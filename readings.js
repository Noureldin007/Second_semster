import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";

let temp_inside = document.getElementById("temp-inside-value");
let temp_outside = document.getElementById("temp-outside-value");
let diff = document.getElementById("temp-diff-value");
let humi_value = document.getElementById("humidity-value");
let air_qulaity = document.getElementById("air-qulaity");

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsbb3hGkeoNbF04d8yjs4FXyCib81ediI",
  authDomain: "data-base-83e01.firebaseapp.com",
  databaseURL: "https://data-base-83e01-default-rtdb.firebaseio.com",
  projectId: "data-base-83e01",
  storageBucket: "data-base-83e01.appspot.com",
  messagingSenderId: "1021017417849",
  appId: "1:1021017417849:web:840fbc1f1f833cfe8c4ca8",
  measurementId: "G-ZDJNZKSJLE"
};
// Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// getting reference to the database
var database = firebase.database();

// Reference to temperature and humidity nodes in database
const temperatureRef = database.ref('DHT_inside/Temperature');
const humidityRef = database.ref('DHT_inside/Humidity');

// Listen for changes in temperature node
temperatureRef.on('value', function(temperatureRef) {

    document.getElementById('temperature').innerHTML = temperatureRef.val() + ' &#8451;';
});

// Listen for changes in humidity node
humidityRef.on('value', function(humidityRef) {
    document.getElementById('humidity').innerHTML = humidityRef.val() + ' %';
});