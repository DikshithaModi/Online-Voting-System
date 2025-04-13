function goToLogin() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userType");
    window.location.href = "login.html";
}

function viewResults() {
    window.location.href = "results.html";
}
