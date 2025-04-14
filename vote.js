document.addEventListener("DOMContentLoaded", function () {
    let user = localStorage.getItem("currentUser");
    if (!user) {
        alert("Please log in first.");
        window.location.href = "login.html";
    }
    loadCandidates();
});

function loadCandidates() {
    let candidates = JSON.parse(localStorage.getItem("candidates")) || ["Candidate A", "Candidate B", "Candidate C"];
    let container = document.getElementById("candidatesList");
    container.innerHTML = "";

    candidates.forEach(candidate => {
        let div = document.createElement("div");
        div.classList.add("candidate");
        div.innerHTML = `<span>${candidate}</span> <button class='btn' onclick='castVote("${candidate}")'>Vote</button>`;
        container.appendChild(div);
    });
}

function castVote(candidate) {
    let user = localStorage.getItem("currentUser");
    if (!user) {
        alert("Please log in first.");
        window.location.href = "login.html";
        return;
    }

    let userVotes = JSON.parse(localStorage.getItem("userVotes")) || {};
    if (userVotes[user]) {
        alert("You have already voted. You cannot vote again.");
        return;
    }

    let votes = JSON.parse(localStorage.getItem("votes")) || {};
    votes[candidate] = (votes[candidate] || 0) + 1;
    localStorage.setItem("votes", JSON.stringify(votes));

    userVotes[user] = true;
    localStorage.setItem("userVotes", JSON.stringify(userVotes));

    alert("Your vote for " + candidate + " has been submitted successfully!");
    setTimeout(() => {
        window.location.href = "results.html";
    }, 500);
}
