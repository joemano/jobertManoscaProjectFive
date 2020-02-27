import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI20Y8ig9VXXnj-XOVd_9SNopGi7NyP4k",
  authDomain: "azur-lane-memory-lane.firebaseapp.com",
  databaseURL: "https://azur-lane-memory-lane.firebaseio.com",
  projectId: "azur-lane-memory-lane",
  storageBucket: "azur-lane-memory-lane.appspot.com",
  messagingSenderId: "840441768354",
  appId: "1:840441768354:web:328db674c4a0eac9ceeafb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;