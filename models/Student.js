// Firebase app configration
const admin = require('firebase-admin');
const serviceAccount = require("../serviceAccountKey");

// Intialize Firebase app
admin.initializeApp({
    credential : admin.credential.cert(serviceAccount)
});

// Store Firebase db
const db = admin.firestore();

// Store Collection refrence
const Students = db.collection("Students");

module.exports = Students;