function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let userType = document.getElementById("userType").value;

    if (username && password) {
        localStorage.setItem("currentUser", username);
        localStorage.setItem("userType", userType);
        alert("Login Successful!");

        if (userType === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "profile.html";
        }
    } else {
        alert("Please enter valid credentials.");
    }
}
