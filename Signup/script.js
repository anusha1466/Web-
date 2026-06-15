document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let valid = true;

    // Username validation
    if (username.length < 3) {
        document.getElementById("userError").innerText = "Username must be at least 3 characters";
        valid = false;
    } else {
        document.getElementById("userError").innerText = "";
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter a valid email";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passError").innerText = "Password must be at least 6 characters";
        valid = false;
    } else {
        document.getElementById("passError").innerText = "";
    }

    if (valid) {
        alert("Signup Successful!");
    }
});