// Initialize Firebase
var config = {
    apiKey: "make your own on firebase.google.com",
    authDomain: "make your own on firebase.google.com",
    databaseURL: "make your own on firebase.google.com",
    projectId: "make your own on firebase.google.com",
    storageBucket: "make your own on firebase.google.com",
    messagingSenderId: "make your own on firebase.google.com"
  };
  firebase.initializeApp(config);

const messageRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    const name = getInputId('name');
    const company = getInputId('company');
    const email = getInputId('email');
    const phone = getInputId('phone');
    const message = getInputId('message');

    saveMessage(name,company,email,phone,message);

    document.getElementById('contactForm').reset();
}

function getInputId(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name,company,email,phone,message){
    const newMessageRef = messageRef.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}