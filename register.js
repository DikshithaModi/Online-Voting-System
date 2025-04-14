function displayResults() {
    let votes = JSON.parse(localStorage.getItem("votes")) || {
        "Candidate A": 0,
        "Candidate B": 0,
        "Candidate C": 0
    };

    let resultsDiv = document.getElementById("resultsList");
    resultsDiv.innerHTML = "";

    for (let candidate in votes) {
        let div = document.createElement("div");
        div.classList.add("result-box");
        div.innerHTML = `<strong>${candidate}</strong>: ${votes[candidate]} votes`;
        resultsDiv.appendChild(div);
    }
}

displayResults();
