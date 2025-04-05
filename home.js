// Set dynamic welcome message
document.getElementById("welcome-message").innerText =
    "Welcome, " + (localStorage.getItem("username") || "Voter") + "!";

// Countdown Timer for Upcoming Election
function updateCountdown() {
    const electionDate = new Date("April 15, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = electionDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const countdownEl = document.getElementById("countdown");

    if (timeLeft < 0) {
        countdownEl.innerText = "Voting Open Now!";
    } else {
        countdownEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Confirmation before voting
function confirmVote() {
    return confirm("Are you sure you want to cast your vote now?");
}

// Confirmation before viewing results
function confirmResults() {
    return confirm("Are you sure you want to view the results?");
}
