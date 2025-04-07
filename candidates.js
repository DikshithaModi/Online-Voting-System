function displayCandidates() {
    let candidates = JSON.parse(localStorage.getItem("candidates")) || [];
    let list = document.getElementById("candidateList");
    list.innerHTML = "";

    if (candidates.length === 0) {
        list.innerHTML = "<p>No candidates available.</p>";
        return;
    }

    candidates.forEach(candidate => {
        let li = document.createElement("li");
        li.textContent = candidate;
        list.appendChild(li);
    });
}

displayCandidates();
