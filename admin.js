function addCandidate() {
    let candidateName = document.getElementById("candidateName").value;
    if (!candidateName) {
        alert("Please enter a candidate name.");
        return;
    }

    let candidates = JSON.parse(localStorage.getItem("candidates")) || [];
    candidates.push(candidateName);
    localStorage.setItem("candidates", JSON.stringify(candidates));
    displayCandidates();
    document.getElementById("candidateName").value = ""; // Clear input after adding
}

function displayCandidates() {
    let candidates = JSON.parse(localStorage.getItem("candidates")) || [];
    let list = document.getElementById("candidateList");
    list.innerHTML = "";

    candidates.forEach((candidate, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${candidate} <button class='btn' onclick='removeCandidate(${index})'>Remove</button>`;
        list.appendChild(li);
    });
}

function removeCandidate(index) {
    let candidates = JSON.parse(localStorage.getItem("candidates")) || [];
    candidates.splice(index, 1);
    localStorage.setItem("candidates", JSON.stringify(candidates));
    displayCandidates();
}

function resetVotes() {
    localStorage.removeItem("votes");
    localStorage.removeItem("hasVoted");
    alert("All votes have been reset!");
}

displayCandidates();
