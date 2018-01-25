import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCjVBw1Zd0ma76NGyQCpTSA-DARJpdtlgo",
    authDomain: "tilr-contacts.firebaseapp.com",
    databaseURL: "https://tilr-contacts.firebaseio.com",
    storageBucket: "tilr-contacts.appspot.com",
  };


firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;