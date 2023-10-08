// script.js
function registerUser() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Perform registration logic (e.g., send data to server)
    console.log("User registered:", username, email);
}

function loginUser() {
    var loginEmail = document.getElementById("loginEmail").value;
    var loginPassword = document.getElementById("loginPassword").value;

    // Perform login logic (e.g., send data to server and verify)
    console.log("User logged in:", loginEmail);
}
