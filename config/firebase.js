import firebase from 'firebase'
import app from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDHKymhgxZa1b-ar4loimsEitT-R3ThcfE",
    authDomain: "testapp-97f78.firebaseapp.com",
    databaseURL: "https://testapp-97f78.firebaseio.com",
    projectId: "testapp-97f78",
    storageBucket: "testapp-97f78.appspot.com",
    messagingSenderId: "209697755135",
    appId: "1:209697755135:web:d4b10a935618772463a1ca",
    measurementId: "G-B4BPXF3FMC"
}
if (!firebase.apps.length) {
    app.initializeApp(firebaseConfig);
}

export default firebase;